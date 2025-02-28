import * as z from "zod";

import { prisma } from "@/lib/db";

export const userAuthSchema = z.object({
  email: z.string().email(),
});

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        name: true,
        emailVerified: true,
      },
    });

    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
        bio: true,
        website: true,
        twitter: true,
        instagram: true,
        linkedin: true,
        image: true,
        coverImage: true,
        createdAt: true,
        role: true,
      },
    });

    return user;
  } catch {
    return null;
  }
};
