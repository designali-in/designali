import { z } from "zod";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { idAnimeSchema } from "@/lib/validations/agency";

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { id: communityId } = idAnimeSchema.parse(body);

    const community = await prisma.community.findFirst({
      where: {
        id: communityId,
      },
    });

    if (!community) {
      return new Response("Not found", { status: 404 });
    }

    if (community.creatorId !== session.user.id) {
      return new Response("Unauthorized", { status: 403 });
    }

    // all checks complete ✅
    await prisma.community.delete({
      where: {
        id: communityId,
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
