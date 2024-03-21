"use server"
import {z} from "zod"
import { Resend } from "resend"
import { ContactFormSchema } from "@/schemas/ContactForm"

type ContactFormInputs=z.infer<typeof  ContactFormSchema>
const resend=new Resend(process.env.RESEND_API_KEY)
export async function sendEmail(data: ContactFormInputs,emailHtml: string) {
    const result=ContactFormSchema.safeParse(data)
    if(result.success){
        const {name,email,subject,message}=result.data
        try{
            const data=await resend.emails.send({
                from:'kloudcodes <info.kloudcode@gmail.com>',
                to:'info.kloudcode@gmail.com',
                subject:subject,
                text:`Name:${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
                reply_to: email,
                html: emailHtml,
            })
            return {success:true,data}
        }catch(error){
            return {success: false,error}
        }
    }
        if(result.error){
            return {success:false, error:result.error.format()}
        }
    }

