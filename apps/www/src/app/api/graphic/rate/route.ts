//@ts-nocheck
import { rateAnimeSchema } from "@/lib/validations/graphic";
import { z } from "zod";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    const body = await req.json();

    const { id, rating } = rateAnimeSchema.parse(body);

    const anime = await prisma.graphic.findFirst({
      where: {
        id,
      },
    });

    if (!anime) {
      return new Response("Anime not found", { status: 404 });
    }

    const alreadyRated = await prisma.rating.findFirst({
      where: {
        userId: session.user.id,
        graphicId: id,
      },
    });

    let updatedRating;

    if (alreadyRated) {
      if (alreadyRated.rating === rating) {
        await prisma.rating.delete({
          where: {
            id: alreadyRated.id,
            userId: session.user.id,
            graphicId: id,
          },
        });

        updatedRating = anime.totalRatings - alreadyRated.rating;
      } else {
        await prisma.rating.update({
          where: {
            id: alreadyRated.id,
            userId: session.user.id,
            graphicId: id,
          },
          data: {
            rating,
          },
        });
        updatedRating = anime.totalRatings - alreadyRated.rating + rating;
      }
    } else {
      await prisma.rating.create({
        data: {
          userId: session.user.id,
          graphicId: id,
          rating,
        },
      });
      updatedRating = anime.totalRatings + rating;
    }

    //add the rating to the existing anime
    await prisma.graphic.update({
      where: {
        id,
      },
      data: {
        totalRatings: updatedRating,
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
