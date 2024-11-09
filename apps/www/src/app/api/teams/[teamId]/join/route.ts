import { NextResponse } from "next/server";
import { z } from "zod";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { logTeamActivity } from "@/lib/validations/team-activity";

const joinTeamSchema = z.object({
  token: z.string(),
});

export async function POST(
  req: Request,
  { params }: { params: { teamId: string } },
) {
  try {
    const session = await auth();

    if (!session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const json = await req.json();
    const body = joinTeamSchema.parse(json);

    // First, find the invitation without email check to debug
    const invitation = await prisma.invitation.findFirst({
      where: {
        token: body.token,
      },
      include: {
        team: true,
      },
    });

    if (!invitation) {
      return NextResponse.json(
        { error: "Invitation not found" },
        { status: 400 },
      );
    }

    // Check if invitation is expired
    if (invitation.expires < new Date()) {
      return NextResponse.json(
        { error: "Invitation has expired" },
        { status: 400 },
      );
    }

    // Check if the invitation email matches the user's email
    if (invitation.email !== session.user.email) {
      return NextResponse.json(
        { error: "This invitation was sent to a different email address" },
        { status: 400 },
      );
    }

    // Check if user is already a member
    const existingMember = await prisma.teamMember.findFirst({
      where: {
        teamId: invitation.teamId,
        userId: session.user.id,
      },
    });

    if (existingMember) {
      return NextResponse.json(
        {
          error: "Already a member of this team",
          teamSlug: invitation.team.slug,
        },
        { status: 400 },
      );
    }

    // Create team member and delete invitation in a transaction
    const [member] = await prisma.$transaction([
      prisma.teamMember.create({
        data: {
          teamId: invitation.teamId,
          userId: session.user.id,
          role: invitation.role,
        },
      }),
      prisma.invitation.delete({
        where: {
          id: invitation.id,
        },
      }),
    ]);

    // Log the join activity
    await logTeamActivity(invitation.teamId, session.user.id, "member.joined", {
      role: invitation.role,
      teamName: invitation.team.name,
    });

    return NextResponse.json({
      member,
      teamSlug: invitation.team.slug,
      message: `Successfully joined ${invitation.team.name}`,
    });
  } catch (error) {
    console.error("Error joining team:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request data", details: error.issues },
        { status: 422 },
      );
    }

    return NextResponse.json({ error: "Failed to join team" }, { status: 500 });
  }
}
