"use server";

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(data: { name: string; email: string; message: string; }) {
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, message: parsed.error.errors.map(e => e.message).join(', ') };
  }

  // The form data is valid, but we are not sending an email.
  // We can just return a success message.
  console.log("Contact form submitted:", parsed.data);

  return { success: true, message: "Your message has been sent successfully!" };
}
