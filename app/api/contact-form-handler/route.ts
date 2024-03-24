import { z } from "zod";
import { ContactFormSchema } from "@/schemas/ContactForm";
import { sendEmail } from "@/app/_actions";

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export async function POST(request: Request) {
  const body = await request.json();
  const result = ContactFormSchema.safeParse(body);

  if (!result.success) {
    const errorMessage = result.error.format().toString();
    return new Response(errorMessage, { status: 400 });
  }

  const { name, email, subject, message } = result.data;
  const emailResult = await sendEmail({ name, email, subject, message });
if(emailResult)
  if (emailResult.success) {
    return new Response("Email sent successfully", { status: 200 });
  } else {
    if (emailResult.error) {
      return new Response(`Failed to send email: ${emailResult.error}`, {
        status: 500,
      });
    } else {
      // This case should never happen, but it's a safeguard
      return new Response("Failed to send email", { status: 500 });
    }
  }
}