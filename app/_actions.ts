"use server"
import {z} from "zod"
import { Resend } from "resend"
import { ContactFormSchema } from "@/schemas/ContactForm"
import ContactFormEmail from "@/emails/contant-email-form"
type ContactFormInputs=z.infer<typeof  ContactFormSchema>
const resend=new Resend(process.env.RESEND_API_KEY)
export async function sendEmail(data: ContactFormInputs) {
    const result=ContactFormSchema.safeParse(data)
    if(result.success){
        const {name,email,subject,message}=result.data
        try{
            const data=await resend.emails.send({
                from:'kloudcodes <email@kloudcodes.com>',
                to:'info.kloudcode@gmail.com',
                subject:subject,
                reply_to: email,
                text:`Name:${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
                react: ContactFormEmail({name,email,subject,message})
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

