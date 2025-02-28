//@ts-nocheck
import { z } from "zod";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { creatPostServerValidator } from "@/lib/validations/community";

export async function POST(req: Request) {
  const url = new URL(req.url);
  try {
    const session = await auth();

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    const body = await req.json();

    const extendedBody = {
      ...body,
      communityId: url.searchParams.get("communityId"),
    };

    const { communityId, text, title } =
      creatPostServerValidator.parse(extendedBody);

    await prisma.designPost.create({
      data: {
        title,
        message: text,
        communityId,
        creatorId: session.user.id,
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

export async function GET(req: Request) {
  const url = new URL(req.url);

  try {
    const session = await auth();

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { limit, page, communityId } = z
      .object({
        limit: z.string(),
        page: z.string(),
        communityId: z.string(),
      })
      .parse({
        limit: url.searchParams.get("limit"),
        page: url.searchParams.get("page"),
        communityId: url.searchParams.get("communityId"),
      });

    const posts = await prisma.designPost.findMany({
      take: parseInt(limit),
      skip: (parseInt(page) - 1) * parseInt(limit),
      where: {
        communityId,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        comment: true,
        creator: true,
        like: true,
        community: true,
      },
    });

    return new Response(JSON.stringify(posts));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    return new Response("Something went wrong", { status: 500 });
  }
}
