//@ts-nocheck
import { z } from "zod";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { ReviewLikeValidator } from "@/src/lib/validations/like";

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { reviewId } = ReviewLikeValidator.parse(body);

    const review = await prisma.reviews.findUnique({
      where: {
        id: reviewId,
      },
    });

    if (!review) {
      return new Response("Review not found", { status: 404 });
    }

    const alreadyLiked = await prisma.reviewLike.findFirst({
      where: {
        reviewId,
        userId: session.user.id,
      },
    });

    if (alreadyLiked) {
      await prisma.reviewLike.delete({
        where: {
          userId_reviewId: {
            reviewId,
            userId: session.user.id,
          },
        },
      });
    } else {
      await prisma.reviewLike.create({
        data: {
          reviewId,
          userId: session.user.id,
        },
      });
    }

    return new Response("OK");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    return new Response("Something went wrong", { status: 500 });
  }
}
