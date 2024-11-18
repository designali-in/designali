import type { AnimeWatchlistServerType } from "@/src/lib/validations/graphic";
import {
  AnimeWatchlistServer,
  AnimeWatchlistUpdate,
} from "@/src/lib/validations/graphic";
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
    const payloads = body;

    if (body.length === 0) {
      return new Response("Nothing to add", { status: 422 });
    }

    const results = await Promise.all(
      payloads.map(async (payload: AnimeWatchlistServerType) => {
        const { animeId, category } = AnimeWatchlistServer.parse(payload);

        const anime = await prisma.agency.findUnique({
          where: {
            id: animeId,
          },
        });

        if (!anime) {
          return new Response("Anime not found", { status: 404 });
        }

        const promises = [
          prisma.notStartedWatching.findFirst({
            where: {
              animeId,
              userId: session.user.id,
            },
          }),
          prisma.currentlyWatching.findFirst({
            where: {
              animeId,
              userId: session.user.id,
            },
          }),
          prisma.finishedWatching.findFirst({
            where: {
              animeId,
              userId: session.user.id,
            },
          }),
        ];

        const [pendingAnimes, watchingAnimes, finishedAnimes] =
          await Promise.all(promises);

        if (pendingAnimes || watchingAnimes || finishedAnimes) {
          return new Response("Anime already in watchlist", { status: 409 });
        }

        if (category === "pending") {
          await prisma.notStartedWatching.create({
            data: {
              animeId,
              userId: session.user.id,
            },
          });
        } else if (category === "watching") {
          await prisma.currentlyWatching.create({
            data: {
              animeId,
              userId: session.user.id,
            },
          });
        } else if (category === "finished") {
          await prisma.finishedWatching.create({
            data: {
              animeId,
              userId: session.user.id,
            },
          });
        }

        // Return something to indicate success (if needed)
        return {
          success: true,
          message: "Anime added to watchlist successfully",
        };
      }),
    );

    const hasError = results.some(
      (result) => result instanceof Response && result.status === 409,
    );
    if (hasError) {
      return new Response("One or more anime already in watchlist", {
        status: 409,
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

export async function PATCH(req: Request) {
  try {
    const session = await auth();

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    const body = await req.json();

    const { animeId, category, dropTo } = AnimeWatchlistUpdate.parse(body);

    const anime = await prisma.anime.findUnique({
      where: {
        id: animeId,
      },
    });

    if (!anime) {
      return new Response("Anime not found", { status: 404 });
    }

    // Delete from previous category
    if (category === "pending") {
      const pendingAnime = await prisma.notStartedWatching.findFirst({
        where: {
          animeId,
          userId: session.user.id,
        },
      });

      if (!pendingAnime) {
        return new Response("Anime not found in pending watchlist.", {
          status: 404,
        });
      }

      await prisma.notStartedWatching.delete({
        where: {
          id: pendingAnime.id,
        },
      });
    } else if (category === "watching") {
      const watchingAnime = await db.currentlyWatching.findFirst({
        where: {
          animeId,
          userId: session.user.id,
        },
      });

      if (!watchingAnime) {
        return new Response("Anime not found in watching watchlist.", {
          status: 404,
        });
      }

      await prisma.currentlyWatching.delete({
        where: {
          id: watchingAnime.id,
        },
      });
    } else if (category === "finished") {
      const finishedAnime = await prisma.finishedWatching.findFirst({
        where: {
          animeId,
          userId: session.user.id,
        },
      });

      if (!finishedAnime) {
        return new Response("Anime not found in finished watchlist.", {
          status: 404,
        });
      }

      await prisma.finishedWatching.delete({
        where: {
          id: finishedAnime.id,
        },
      });
    }

    // Add to new category
    if (dropTo === "pending") {
      await prisma.notStartedWatching.create({
        data: {
          animeId,
          userId: session.user.id,
        },
      });
    } else if (dropTo === "watching") {
      await prisma.currentlyWatching.create({
        data: {
          animeId,
          userId: session.user.id,
        },
      });
    } else if (dropTo === "finished") {
      await prisma.finishedWatching.create({
        data: {
          animeId,
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
