"use client"
import { ContactFormSchema } from "@/schemas/ContactForm"
import { zodResolver } from "@hookform/resolvers/zod"
import {z} from "zod"
import {toast} from "sonner"
import {SubmitHandler, useForm} from "react-hook-form"
import { sendEmail } from "@/app/_actions"
export type ContactForminput=z.infer<typeof ContactFormSchema>
export default function Formemail() {
    const{
        register,
        handleSubmit,
        reset,
        formState:{errors,isSubmitting}
    }=useForm<ContactForminput>({
        resolver: zodResolver(ContactFormSchema)
    })
    const processForm: SubmitHandler<ContactForminput> = async (data) => {
     const result= await sendEmail(data)
  
      if (result?.success) {
        toast.success("Email sent");
        reset();
      } else {
        toast.error("Something went wrong!");
      }
    };
  return (
    <>
      <form className="flex flex-col"     onSubmit={handleSubmit(processForm)}   >
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
    </>
  )
}
