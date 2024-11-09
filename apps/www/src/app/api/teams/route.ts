import { NextResponse } from "next/server";
import { z } from "zod";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { logTeamActivity } from "@/lib/validations/team-activity";

const createTeamSchema = z.object({
  name: z.string().min(2).max(50),
});

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const json = await req.json();
    const body = createTeamSchema.parse(json);

    // Create a URL-friendly slug from the team name
    const slug = body.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    // Create the team and add the creator as an OWNER
    const team = await prisma.team.create({
      data: {
        name: body.name,
        slug,
        members: {
          create: {
            userId: session.user.id,
            role: "OWNER",
          },
        },
      },
    });

    // Log the team creation activity
    await logTeamActivity(team.id, session.user.id, "team.created", {
      name: team.name,
    });

    return NextResponse.json(team);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.issues), { status: 422 });
    }

    return new NextResponse(null, { status: 500 });
  }
}

export async function GET() {
  try {
    const session = await auth();

    if (!session.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const teams = await prisma.team.findMany({
      where: {
        members: {
          some: {
            userId: session.user.id,
          },
        },
      },
      include: {
        members: {
          include: {
            user: {
              select: {
                name: true,
                email: true,
                image: true,
              },
            },
          },
        },
        _count: {
          select: {
            members: true,
          },
        },
      },
    });

    return NextResponse.json(teams);
  } catch (error) {
    return new NextResponse(null, { status: 500 });
  }
}
