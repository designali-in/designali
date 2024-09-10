"use server";

import type { z } from "zod";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "@designali/auth";
import { db } from "@designali/db";
import { products, reviews, users } from "@designali/db/src/schema";
import { count, desc, eq } from "drizzle-orm";

import type { updateUserSchema } from "../validator";
import { formatError } from "../dutils";

const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 10;

// USER
export const SignInWithEmail = async (formData: any) => {
  await signIn("email", formData);
};

export const SignInWithGoogle = async () => {
  await signIn("google");
};

export const SignOut = async () => {
  await signOut();
};
// GET
export async function getAllUsers({
  limit = PAGE_SIZE,
  page,
}: {
  limit?: number;
  page: number;
}) {
  const data = await db.query.users.findMany({
    orderBy: [desc(users.createdAt)],
    limit,
    offset: (page - 1) * limit,
  });
  const dataCount = await db.select({ count: count() }).from(users);
  return {
    data,
    totalPages: Math.ceil(dataCount[0].count / limit),
  };
}

export async function getAdminSummary() {
  const productsCount = await db.select({ count: count() }).from(products);
  const usersCount = await db.select({ count: count() }).from(users);
  const reviewsCount = await db.select({ count: count() }).from(reviews);

  return {
    usersCount,
    reviewsCount,
    productsCount,
  };
}

export async function getUserById(userId: string) {
  const user = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.id, userId),
  });
  if (!user) throw new Error("User not found");
  return user;
}

// DELETE

export async function deleteUser(id: string) {
  try {
    await db.delete(users).where(eq(users.id, id));
    revalidatePath("/admin/users");
    return {
      success: true,
      message: "User deleted successfully",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// UPDATE
export async function updateUser(user: z.infer<typeof updateUserSchema>) {
  try {
    await db
      .update(users)
      .set({
        name: user.name,
      })
      .where(eq(users.id, user.id));
    revalidatePath("/admin/users");
    return {
      success: true,
      message: "User updated successfully",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

export async function updateProfile(user: { name?: string; email?: string }) {
  try {
    const session = await auth();
    const currentUser = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.id, session.user.id),
    });
    if (!currentUser) throw new Error("User not found");
    await db
      .update(users)
      .set({
        name: user.name,
      })
      .where(eq(users.id, currentUser.id));

    return {
      success: true,
      message: "User updated successfully",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
