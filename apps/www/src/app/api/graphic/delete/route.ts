/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { idAnimeSchema } from "@/lib/validations/graphic";
import { z } from "zod";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    const isAdmin = await prisma.user.findFirst({
      where: {
        id: session.user.id,
      },
    });

    if (!isAdmin) {
      return new Response("User not found", { status: 404 });
    }

    if (isAdmin.role !== "ADMIN") {
      return new Response("Forbidden", { status: 403 });
    }

    const body = await req.json();
    const { id } = idAnimeSchema.parse(body);

    const anime = await prisma.graphic.findFirst({
      where: {
        id,
      },
    });

    if (!anime) {
      return new Response("Anime not found", { status: 404 });
    }

    //all checks complete ✅
    await prisma.graphic.delete({
      where: {
        id,
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
