//@ts-nocheck
import { NextResponse } from "next/server";
import { z } from "zod";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { logTeamActivity } from "@/lib/validations/team-activity";

const updateTeamSchema = z.object({
  name: z.string().min(2).max(50),
});

async function checkTeamPermissions(teamId: string, userId: string) {
  const member = await prisma.teamMember.findFirst({
    where: {
      teamId,
      userId,
      role: {
        in: ["OWNER", "ADMIN"],
      },
    },
  });

  return !!member;
}

export async function PATCH(
  req: Request,
  { params }: { params: { teamId: string } },
) {
  try {
    const session = await auth();

    if (!session.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Check if user has permission to update team
    const hasPermission = await checkTeamPermissions(
      params.teamId,
      session.user.id,
    );
    if (!hasPermission) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    const json = await req.json();
    const body = updateTeamSchema.parse(json);

    // Create a URL-friendly slug from the team name
    const slug = body.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const updatedTeam = await prisma.team.update({
      where: { id: params.teamId },
      data: {
        name: body.name,
        slug,
      },
    });

    // Log the activity
    await logTeamActivity(params.teamId, session.user.id, "team.updated", {
      name: body.name,
      previousName: updatedTeam.name,
    });

    return NextResponse.json(updatedTeam);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.issues), { status: 422 });
    }

    return new NextResponse(null, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { teamId: string } },
) {
  try {
    const session = await auth();

    if (!session.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Check if user is team owner
    const member = await prisma.teamMember.findFirst({
      where: {
        teamId: params.teamId,
        userId: session.user.id,
        role: "OWNER",
      },
    });

    if (!member) {
      return new NextResponse("Only team owners can delete teams", {
        status: 403,
      });
    }

    await prisma.team.delete({
      where: { id: params.teamId },
    });

    return new NextResponse(null, { status: 200 });
  } catch (error) {
    return new NextResponse(null, { status: 500 });
  }
}
