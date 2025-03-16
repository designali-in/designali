import { NextResponse } from "next/server";
import { getCurrentUser } from "@/src/lib/session";
import * as z from "zod";
 
import { prisma } from "@/lib/db";

const profileSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters."),
  email: z.string().email("Invalid email address."),
  username: z.string().min(3, "Username must be at least 3 characters."),
  bio: z.string().min(3, "Bio must be at least 3 characters."),
  summary: z.string().min(3, "Summary must be at least 10 characters."),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  twitter: z.string().optional(),
  instagram: z.string().optional(),
  linkedin: z.string().optional(),
  image: z.string().optional(),
  coverImage: z.string().optional(),
});

export async function PATCH(req: Request) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const {
      name,
      email,
      username,
      bio,
      summary,
      website,
      twitter,
      instagram,
      linkedin,
      image,
      coverImage,
    } = profileSchema.parse(body);

    // Check if email is already taken by another user
    if (email !== user.email) {
      const existingUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (existingUser) {
        return new NextResponse("Email already taken", { status: 400 });
      }
    }

    if (username !== user.username) {
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
      where: { id: user.id },
      data: {
        name,
        email,
        username,
        bio,
        summary,
        website,
        twitter,
        instagram,
        linkedin,
        image,
        coverImage,
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
