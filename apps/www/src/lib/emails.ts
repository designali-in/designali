import type * as React from "react";
import { Resend } from "resend";

import { env } from "../env";

if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY environment variable");
}

export interface Emails {
  react: React.JSX.Element;
  subject: string;
  to: string[];
  from: string;
}

export interface EmailHtml {
  html: string;
  subject: string;
  to: string[];
  from: string;
}

export const sendEmail = async (email: Emails) => {
  await resend.emails.send(email);
};

export const resend = new Resend(process.env.RESEND_API_KEY);
