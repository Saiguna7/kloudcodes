"use client"
import { ContactFormSchema } from "@/schemas/ContactForm"
import { zodResolver } from "@hookform/resolvers/zod"
import {SubmitHandler, useForm} from "react-hook-form"
import LinkedinIcon from "@/public/linkedin-icon.svg";
import FacebookIcon from "@/public/facebook.svg";
import InstagramIcon from "@/public/instagram.svg";
import { MapPinIcon } from "@heroicons/react/24/solid";
import {z} from "zod"
import {toast} from "sonner"
import Image from "next/image";
import Link from "next/link";
import {PhoneIcon} from "@heroicons/react/24/solid" 
import ContactFormEmail from "@/emails/contant-email-form";
import {sendEmail} from "@/app/_actions"
import ReactDOMServer from "react-dom/server";
export type ContactForminput=z.infer<typeof ContactFormSchema>
export default function Emailsection() {
    const{
        register,
        handleSubmit,
        reset,
        formState:{errors,isSubmitting}
    }=useForm<ContactForminput>({
        resolver: zodResolver(ContactFormSchema)
    })
    const processForm: SubmitHandler<ContactForminput>= async data=>{
      const emailHtml = await generateEmailHtml(data);
        const result=await sendEmail(data,emailHtml)
        if(result?.success){
            toast.success('Email sent')
            reset()
            return
        }
        console.log(result?.error)
        toast.error('something went wrong!')
    }
    const generateEmailHtml = async (data: ContactForminput) => {
      const emailElement = <ContactFormEmail {...data} />;
      const emailHtml = ReactDOMServer.renderToString(emailElement);
      return emailHtml;
    };
  return (
    <>
   <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2">
      </div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md text-justify">
          {" "}
          We&apos;re currently looking for new opportunities, our inbox is always
          open. Whether you have a question or just want to say hi, We&apos;re
          try my best to get back to you!
          <br></br>
          <MapPinIcon className='h-6 w-6 inline-flex text-white'/>
          <strong className="text-white">
            Jai Bharath Nagar, Nizampet, Hyderabad-500090
            </strong>
          <br></br>
            <PhoneIcon className="h-6 w-6 inline-flex text-white"/> <strong className="text-white">
              +91 9154548806
              </strong>
        </p>

        <div className="socials flex flex-row gap-2">
          <Link href="https://www.instagram.com/kloudcode?igsh=MWZjMHVhZTlhejV3dg==">
            <Image src={InstagramIcon}  alt="Instagram Icon" />
          </Link>
          <Link href="">
            <Image src={FacebookIcon}  alt="Facebook Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/sai-guna-vanam-817404251/">
            <Image src={LinkedinIcon}  alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <h1 className='text-center text-white'>Contact Us</h1>
        <form className="flex flex-col" onSubmit={handleSubmit(processForm)}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Name
            </label>
            <input
              {...register('name')}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="john"
              />
            {
              errors.name?.message && (
                <p className='ml-1 mt-1 text-sm text-red-400'>{errors.name.message}</p>
                )
              }
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              {...register('email')}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
            {
              errors.email?.message && (
                <p className='ml-1 mt-1 text-sm text-red-400'>{errors.email.message}</p>
                )
              }
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
              >
              Subject
            </label>
            <input
              {...register('subject')}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
              />
            {
              errors.subject?.message && (
                <p className='ml-1 mt-1 text-sm text-red-400'>{errors.subject.message}</p>
                )
              }
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              rows={5}
              cols={5}
              {...register('message')}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
              />
            {
              errors.message?.message && (
                <p className='ml-1 mt-1 text-sm text-red-400'>{errors.message.message}</p>
              )
            }
          </div>
          <button
            disabled={isSubmitting}
            className="hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full bg-purple-500"
            >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>

    </>
  )
}
