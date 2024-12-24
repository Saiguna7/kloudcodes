import { z } from "zod";
export const ContactFormSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Email is required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(6, "message is required min 6 characters"),
});
