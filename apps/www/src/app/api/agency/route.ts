/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { animeSchema } from "@/lib/validations/agency";

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

    const {
      description,
      designer,
      catalog,
      software,
      filetype,
      name,
      releaseYear,
      coverImage,
      tutorialLink,
    } = animeSchema.parse(body);

    const existingAnime = await prisma.agency.findFirst({
      where: {
        name,
      },
    });

    if (existingAnime) {
      return new Response("Anime already exists", { status: 409 });
    }

    if (catalog.length === 0) {
      return new Response("Please enter a catalog", { status: 422 });
    }

    if (name.includes("-")) {
      return new Response("Anime name cannot contain '-'", { status: 405 });
    }

    //all checks complete ✅
    await prisma.agency.create({
      data: {
        description,
        designer,
        software,
        filetype,
        catalog,
        name,
        releaseYear,
        coverImage: coverImage,
        tutorialLink,
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

export async function PATCH(req: Request) {
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

    const {
      id,
      description,
      designer,
      catalog,
      name,
      releaseYear,
      coverImage,
      tutorialLink,
    } = animeSchema.parse(body);

    const existingAnime = await prisma.agency.findFirst({
      where: {
        name,
      },
    });

    if (existingAnime && existingAnime.id !== id) {
      return new Response("Anime already exists", { status: 409 });
    }

    if (catalog.length === 0) {
      return new Response("Please enter a catalog", { status: 422 });
    }

    //all checks complete ✅
    await prisma.agency.update({
      where: {
        id,
      },
      data: {
        description,
        designer,
        catalog,
        name,
        releaseYear,
        coverImage: coverImage,
        tutorialLink,
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

    const { limit, page, query, orderBy, catalog, year } = z
      .object({
        limit: z.string(),
        page: z.string(),
        query: z.string().nullish().optional(),
        catalog: z.string().nullish().optional(),
        year: z.string().nullish().optional(),
        orderBy: z.string().nullish().optional(),
      })
      .parse({
        limit: url.searchParams.get("limit"),
        page: url.searchParams.get("page"),
        query: url.searchParams.get("q"),
        catalog: url.searchParams.get("catalog"),
        year: url.searchParams.get("year"),
        orderBy: url.searchParams.get("orderBy"),
      });

    let whereClause = {};
    let orderByClause = {};

    if (catalog && year) {
      whereClause = {
        catalog,
        releaseYear: year,
      };
    } else if (catalog) {
      whereClause = {
        catalog,
      };
    } else if (year) {
      whereClause = {
        releaseYear: year,
      };
    } else if (query) {
      whereClause = {
        name: {
          contains: query,
        },
      };
    }

    if (orderBy) {
      orderByClause = [
        {
          [orderBy]: "desc",
        },
        {
          createdAt: "desc",
        },
      ];
    } else {
      orderByClause = {
        createdAt: "desc",
      };
    }

    const animes = await prisma.agency.findMany({
      take: parseInt(limit),
      skip: (parseInt(page) - 1) * parseInt(limit),
      where: whereClause,
      orderBy: orderByClause,
    });

    return new Response(JSON.stringify(animes));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    return new Response("Something went wrong", { status: 500 });
  }
}
