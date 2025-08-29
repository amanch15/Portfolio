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

  try {
    // In a real application, you would send an email here.
    // For now, we'll just log it to the console.
    console.log("New contact form submission:");
    console.log("Name:", parsed.data.name);
    console.log("Email:", parsed.data.email);
    console.log("Message:", parsed.data.message);

    return { success: true, message: "Your message has been sent successfully!" };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: "Something went wrong. Please try again later." };
  }
}
