import { AnimeWatchlistDelete } from "@/lib/validations/graphic";
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
    const { category, watchlistId } = AnimeWatchlistDelete.parse(body);

    if (category === "pending") {
      const pendingAnime = await prisma.notStartedDesign.findFirst({
        where: {
          id: watchlistId,
          userId: session.user.id,
        },
      });

      if (!pendingAnime) {
        return new Response("Anime not found in pending watchlist.", {
          status: 404,
        });
      }

      await prisma.notStartedDesign.delete({
        where: {
          id: watchlistId,
        },
      });
    } else if (category === "watching") {
      const DesignAnime = await prisma.currentlyDesign.findFirst({
        where: {
          id: watchlistId,
          userId: session.user.id,
        },
      });

      if (!DesignAnime) {
        return new Response("Anime not found in Design watchlist.", {
          status: 404,
        });
      }

      await prisma.currentlyDesign.delete({
        where: {
          id: watchlistId,
        },
      });
    } else if (category === "finished") {
      const finishedAnime = await prisma.finishedDesign.findFirst({
        where: {
          id: watchlistId,
          userId: session.user.id,
        },
      });

      if (!finishedAnime) {
        return new Response("Anime not found in finished watchlist.", {
          status: 404,
        });
      }

      await prisma.finishedDesign.delete({
        where: {
          id: watchlistId,
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
