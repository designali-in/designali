import { z } from "zod";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { AnimeReviewDeleteSchema } from "@/lib/validations/agency";

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { reviewId } = AnimeReviewDeleteSchema.parse(body);

    const review = await prisma.reviews.findFirst({
      where: {
        id: reviewId,
      },
    });

    if (!review) {
      return new Response("Review not found", { status: 404 });
    }

    if (review.userId !== session.user.id) {
      return new Response("Forbidden", { status: 403 });
    }

    //all checks complete✅
    await prisma.reviews.delete({
      where: {
        id: reviewId,
      },
    });

    return new Response("OK");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    return new Response("Something went wrong", { status: 500 });
  }
}
