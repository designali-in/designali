import { NextResponse } from "next/server";
import { z } from "zod";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { logTeamActivity } from "@/lib/validations/team-activity";

const updateMemberSchema = z.object({
  role: z.enum(["ADMIN", "MEMBER"]),
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
  { params }: { params: { teamId: string; memberId: string } },
) {
  try {
    const session = await auth();

    if (!session.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const hasPermission = await checkTeamPermissions(
      params.teamId,
      session.user.id,
    );
    if (!hasPermission) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    const json = await req.json();
    const body = updateMemberSchema.parse(json);

    const targetMember = await prisma.teamMember.findUnique({
      where: { id: params.memberId },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!targetMember) {
      return new NextResponse("Member not found", { status: 404 });
    }

    if (targetMember.role === "OWNER") {
      return new NextResponse("Cannot change role of team owner", {
        status: 400,
      });
    }

    const updatedMember = await prisma.teamMember.update({
      where: { id: params.memberId },
      data: { role: body.role },
    });

    // Log activity
    await logTeamActivity(
      params.teamId,
      session.user.id,
      "member.role_updated",
      {
        memberName: targetMember.user.name,
        memberId: targetMember.id,
        oldRole: targetMember.role,
        newRole: body.role,
      },
    );

    return NextResponse.json(updatedMember);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.issues), { status: 422 });
    }

    return new NextResponse(null, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { teamId: string; memberId: string } },
) {
  try {
    const session = await auth();

    if (!session.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const hasPermission = await checkTeamPermissions(
      params.teamId,
      session.user.id,
    );
    if (!hasPermission) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    const targetMember = await prisma.teamMember.findUnique({
      where: { id: params.memberId },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!targetMember) {
      return new NextResponse("Member not found", { status: 404 });
    }

    if (targetMember.role === "OWNER") {
      return new NextResponse("Cannot remove team owner", { status: 400 });
    }

    await prisma.teamMember.delete({
      where: { id: params.memberId },
    });

    // Log activity
    await logTeamActivity(params.teamId, session.user.id, "member.removed", {
      memberName: targetMember.user.name,
      memberId: targetMember.id,
      role: targetMember.role,
    });

    return new NextResponse(null, { status: 200 });
  } catch (error) {
    return new NextResponse(null, { status: 500 });
  }
}
