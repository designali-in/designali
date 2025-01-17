import { NextResponse } from "next/server";
import * as z from "zod";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

const profileSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  username: z.string().min(3),
});

export async function PATCH(req: Request) {
  try {
    const session = await auth();

    if (!session.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { name, email, username } = profileSchema.parse(body);

    // Check if email is already taken by another user
    if (email !== session.user.email) {
      const existingUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (existingUser) {
        return new NextResponse("Email already taken", { status: 400 });
      }
    }

    if (username !== session.user.username) {
      const existingUser = await prisma.user.findUnique({
        where: {
          username,
        },
      });

      if (existingUser) {
        return new NextResponse("Username already taken", { status: 400 });
      }
    }

    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        name,
        email,
        username,
      },
    });

    return new NextResponse("Profile updated", { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.issues), { status: 422 });
    }

    return new NextResponse(null, { status: 500 });
  }
}
