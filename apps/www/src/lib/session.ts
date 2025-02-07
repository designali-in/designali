import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function getCurrentUser() {
  const session = await auth();

  if (!session?.user?.email) {
    return null;
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      username: true,
      bio: true,
      website: true,
      twitter: true,
      instagram: true,
      linkedin: true,
      image: true,
      coverImage: true,
      createdAt: true,
    },
  });

  if (!currentUser) {
    return null;
  }

  return {
    ...currentUser,
    role: currentUser.role as "USER" | "ADMIN", // Type assertion for role
  };
}
