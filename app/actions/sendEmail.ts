"use server";

import nodemailer from "nodemailer";

function getErrorMessage(error: unknown, fallback: string) {
  if (error instanceof Error) {
    return error.message;
  }

  if (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    return error.message;
  }

  return fallback;
}

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: Number(process.env.EMAIL_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Name, Email, and Message are required" };
  }

  try {
    const transporter = getTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "info@unityalgo.com",
      subject: `New Contact Request from ${name}`,
      text: `You have received a new message from the contact form.\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error: unknown) {
    console.error("Error sending contact email:", error);
    return { success: false, error: getErrorMessage(error, "Failed to send email") };
  }
}

export async function sendNewsletterEmail(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email) {
    return { success: false, error: "Email is required" };
  }

  try {
    const transporter = getTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "info@unityalgo.com",
      subject: `New Newsletter Subscription`,
      text: `A new user has subscribed to the newsletter: ${email}`,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error: unknown) {
    console.error("Error sending newsletter email:", error);
    return { success: false, error: getErrorMessage(error, "Failed to subscribe") };
  }
}
