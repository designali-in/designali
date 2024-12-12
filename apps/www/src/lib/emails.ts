import * as React from "react";
import SubscriptionEmail from "@/emails/subscription-email";
import { Resend } from "resend";

import { siteConfig } from "../config/siteConfig";

if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY environment variable");
}

const resend = new Resend(process.env.RESEND_API_KEY);

// Generic email sending function
export async function sendEmail<T extends Record<string, unknown>>({
  to,
  subject,
  template: EmailTemplate,
  props,
}: {
  to: string;
  subject: string;
  template: React.ComponentType<T>;
  props: T;
}) {
  try {
    const data = await resend.emails.send({
      from: `${siteConfig.emails.from.name} <${siteConfig.emails.from.email}>`,
      to,
      subject,
      react: React.createElement(EmailTemplate, props),
    });

    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}

// Specific email functions
export async function sendSubscriptionEmail(
  email: string,
  name: string | null,
  type: "created" | "updated" | "cancelled",
) {
  const subject = {
    created: "Welcome to Your Subscription!",
    updated: "Your Subscription Has Been Updated",
    cancelled: "Your Subscription Has Been Cancelled",
  }[type];

  return sendEmail({
    to: email,
    subject,
    template: SubscriptionEmail,
    props: {
      name: name || "there",
      type,
    },
  });
}
