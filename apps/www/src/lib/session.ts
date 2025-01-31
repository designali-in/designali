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
      // Add other fields you need
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
