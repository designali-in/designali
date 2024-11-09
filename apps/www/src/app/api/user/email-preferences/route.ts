import { NextResponse } from "next/server";
import * as z from "zod";

import { auth } from "@/lib/auth";

const emailPreferencesSchema = z.object({
  marketing: z.boolean(),
  social: z.boolean(),
  security: z.boolean(),
});

export async function PATCH(req: Request) {
  try {
    const session = await auth();

    if (!session.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { marketing, social, security } = emailPreferencesSchema.parse(body);

    // Here you would typically update the user's email preferences in your database
    // For now, we'll just return a success response
    return new NextResponse("Email preferences updated", { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.issues), { status: 422 });
    }

    return new NextResponse(null, { status: 500 });
  }
}
