/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
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
        const { graphicId, category } = AnimeWatchlistServer.parse(payload);

        const anime = await prisma.graphic.findUnique({
          where: {
            id: graphicId,
          },
        });

        if (!anime) {
          return new Response("Anime not found", { status: 404 });
        }

        const promises = [
          prisma.notStartedDesign.findFirst({
            where: {
              graphicId,
              userId: session.user.id,
            },
          }),
          prisma.currentlyDesign.findFirst({
            where: {
              graphicId,
              userId: session.user.id,
            },
          }),
          prisma.finishedDesign.findFirst({
            where: {
              graphicId,
              userId: session.user.id,
            },
          }),
        ];

        const [pendingAnimes, DesignAnimes, finishedAnimes] =
          await Promise.all(promises);

        if (pendingAnimes || DesignAnimes || finishedAnimes) {
          return new Response("Anime already in watchlist", { status: 409 });
        }

        if (category === "pending") {
          await prisma.notStartedDesign.create({
            data: {
              graphicId,
              userId: session.user.id,
            },
          });
        } else if (category === "watching") {
          await prisma.currentlyDesign.create({
            data: {
              graphicId,
              userId: session.user.id,
            },
          });
        } else if (category === "finished") {
          await prisma.finishedDesign.create({
            data: {
              graphicId,
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

    const { graphicId, category, dropTo } = AnimeWatchlistUpdate.parse(body);

    const anime = await prisma.graphic.findUnique({
      where: {
        id: graphicId,
      },
    });

    if (!anime) {
      return new Response("Anime not found", { status: 404 });
    }

    // Delete from previous category
    if (category === "pending") {
      const pendingAnime = await prisma.notStartedDesign.findFirst({
        where: {
          graphicId,
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
          id: pendingAnime.id,
        },
      });
    } else if (category === "watching") {
      const DesignAnime = await prisma.currentlyDesign.findFirst({
        where: {
          graphicId,
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
          id: DesignAnime.id,
        },
      });
    } else if (category === "finished") {
      const finishedAnime = await prisma.finishedDesign.findFirst({
        where: {
          graphicId,
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
          id: finishedAnime.id,
        },
      });
    }

    // Add to new category
    if (dropTo === "pending") {
      await prisma.notStartedDesign.create({
        data: {
          graphicId,
          userId: session.user.id,
        },
      });
    } else if (dropTo === "watching") {
      await prisma.currentlyDesign.create({
        data: {
          graphicId,
          userId: session.user.id,
        },
      });
    } else if (dropTo === "finished") {
      await prisma.finishedDesign.create({
        data: {
          graphicId,
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
