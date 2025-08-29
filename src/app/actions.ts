"use server";

import { z } from 'zod';
import nodemailer from 'nodemailer';

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

  const { name, email, message } = parsed.data;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    to: 'amanch1504@gmail.com',
    replyTo: email,
    subject: `New message from ${name} via portfolio`,
    text: `You have a new message from:\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `<p>You have a new message from:</p>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
           <hr>
           <p><strong>Message:</strong></p>
           <p>${message.replace(/\n/g, '<br>')}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Your message has been sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Something went wrong. Please try again later." };
  }
}
