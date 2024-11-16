import { z } from "zod";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { AnimeReviewServerSchema } from "@/lib/validations/agency";

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    const body = await req.json();

    const { agencyId, review, title } = AnimeReviewServerSchema.parse(body);

    const anime = await prisma.agency.findUnique({
      where: {
        id: agencyId,
      },
    });

    if (!anime) {
      return new Response("Anime not found", { status: 404 });
    }

    await prisma.reviews.create({
      data: {
        text: review,
        agencyId,
        userId: session.user.id,
        title,
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
    const { limit, page, agencyId } = z
      .object({
        limit: z.string(),
        page: z.string(),
        agencyId: z.string(),
      })
      .parse({
        limit: url.searchParams.get("limit"),
        page: url.searchParams.get("page"),
        agencyId: url.searchParams.get("agencyId"),
      });

    const reviews = await prisma.reviews.findMany({
      take: parseInt(limit),
      skip: (parseInt(page) - 1) * parseInt(limit),
      where: {
        agencyId,
      },
      include: {
        user: true,
        reviewLikes: true,
      },
      orderBy: {
        reviewLikes: {
          _count: "desc",
        },
      },
    });

    return new Response(JSON.stringify(reviews));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    return new Response("Something went wrong", { status: 500 });
  }
}
