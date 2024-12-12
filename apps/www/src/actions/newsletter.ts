"use server";

import type {
  CheckIfSubscribedToNewsletterInput,
  NewsletterSignUpFormInput,
} from "@/lib/validations/newsletter";
import { WelcomeEmail } from "@/emails/welcome-email";
import { Resend } from "resend";

import { prisma } from "@/lib/db";
import {
  checkIfSubscribedToNewsletterSchema,
  newsletterSignUpSchema,
} from "@/lib/validations/newsletter";

import { env } from "../env";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function checkIfSubscribedToNewsletter(
  rawInput: CheckIfSubscribedToNewsletterInput,
): Promise<boolean> {
  try {
    const validatedInput =
      checkIfSubscribedToNewsletterSchema.safeParse(rawInput);
    if (!validatedInput.success) return false;

    const subscribed = await prisma.newsletterSubscriber.findUnique({
      where: {
        email: validatedInput.data.email,
      },
    });
    return subscribed ? true : false;
  } catch (error) {
    console.error(error);
    throw new Error("Error checking if already subscribed to newsletter");
  }
}

export async function subscribeToNewsletter(
  rawInput: NewsletterSignUpFormInput,
): Promise<"exists" | "error" | "success"> {
  try {
    const validatedInput = newsletterSignUpSchema.safeParse(rawInput);
    if (!validatedInput.success) return "error";

    const alreadySubscribed = await checkIfSubscribedToNewsletter({
      email: validatedInput.data.email,
    });
    if (alreadySubscribed) return "exists";

    const newSubscriber = await prisma.newsletterSubscriber.create({
      data: { email: validatedInput.data.email },
    });

    const emailSent = await resend.emails.send({
      from: env.RESEND_EMAIL_FROM,
      to: validatedInput.data.email,
      subject: "Welcome to My Newsletter!",
      react: WelcomeEmail(),
    });

    return newSubscriber && emailSent ? "success" : "error";
  } catch (error) {
    console.error(error);
    throw new Error("Error subscribing to the newsletter");
  }
}
