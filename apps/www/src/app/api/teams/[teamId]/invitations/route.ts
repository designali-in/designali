 //@ts-nocheck
import crypto from "crypto";
import { NextResponse } from "next/server";
import TeamInviteEmail from "@/emails/team-invite-email";
import { addDays } from "date-fns";
import { z } from "zod";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { sendEmail } from "@/lib/emails";
import { logTeamActivity } from "@/lib/validations/team-activity";

const inviteSchema = z.object({
  email: z.string().email(),
  role: z.enum(["ADMIN", "MEMBER"]),
});

export async function POST(
  req: Request,
  { params }: { params: { teamId: string } },
) {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if user has permission to invite members
    const membership = await prisma.teamMember.findFirst({
      where: {
        teamId: params.teamId,
        userId: session.user.id,
        role: {
          in: ["OWNER", "ADMIN"],
        },
      },
    });

    if (!membership) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const json = await req.json();
    const body = inviteSchema.parse(json);

    // Check if user is already a member
    const existingMember = await prisma.user.findFirst({
      where: {
        email: body.email,
        teams: {
          some: {
            teamId: params.teamId,
          },
        },
      },
    });

    if (existingMember) {
      return NextResponse.json(
        { error: "User is already a member of this team" },
        { status: 400 },
      );
    }

    // Check for existing invitation
    const existingInvitation = await prisma.invitation.findFirst({
      where: {
        teamId: params.teamId,
        email: body.email,
        expires: {
          gt: new Date(),
        },
      },
    });

    if (existingInvitation) {
      return NextResponse.json(
        { error: "Invitation already sent" },
        { status: 400 },
      );
    }

    const token = crypto.randomBytes(32).toString("hex");
    const invitation = await prisma.invitation.create({
      data: {
        teamId: params.teamId,
        email: body.email,
        role: body.role,
        token,
        expires: addDays(new Date(), 7),
      },
      include: {
        team: true,
      },
    });

    // Log the invitation activity
    await logTeamActivity(params.teamId, session.user.id, "member.invited", {
      invitedEmail: body.email,
      role: body.role,
      invitedBy: session.user.name || session.user.email,
    });

    // Send invitation email
    await sendEmail({
      to: body.email,
      subject: `Invitation to join ${invitation.team.name}`,
      template: TeamInviteEmail,
      props: {
        teamName: invitation.team.name,
        inviterName: session.user.name || "A team member",
        inviteUrl: `${process.env.NEXT_PUBLIC_APP_URL}/teams/join?token=${token}`,
        expiresIn: "7 days",
      },
    });

    return NextResponse.json(invitation);
  } catch (error) {
    console.error("Error creating invitation:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request data", details: error.issues },
        { status: 422 },
      );
    }

    return NextResponse.json(
      { error: "Failed to create invitation" },
      { status: 500 },
    );
  }
}
