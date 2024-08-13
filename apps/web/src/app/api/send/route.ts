import { sendEmail, WelcomeEmail } from "@designali/emails";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(params) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Ali Imam - Designali <contact@designali.in>",
      subject: "Welcome to Designali.",
      to: [params.user.email],
      react: WelcomeEmail(),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
