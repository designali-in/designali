import { notFound, redirect } from "next/navigation";
import { InviteMemberDialog } from "@/comp/dashboard/teams/invite-member-dialog";
import { TeamMembers } from "@/comp/dashboard/teams/team-members";
import { TeamNav } from "@/comp/dashboard/teams/team-nav";
import { TeamOverview } from "@/comp/dashboard/teams/team-overview";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

async function getTeam(slug: string) {
  const team = await prisma.team.findUnique({
    where: { slug },
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
      activities: {
        take: 5,
        orderBy: {
          createdAt: "desc",
        },
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
          activities: true,
        },
      },
    },
  });

  if (!team) notFound();

  return team;
}

export default async function TeamPage({
  params,
}: {
  params: { slug: string };
}) {
  const session = await auth();

  if (!session.user) {
    redirect("/login");
  }

  const team = await getTeam(params.slug);
  const userRole = team.members.find(
    (member) => member.userId === session.user.id,
  ).role;

  const canManageTeam = userRole === "OWNER" || userRole === "ADMIN";

  return (
    <main className="p-6">
      <div className="grid gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="py-4 text-2xl font-semibold">{team.name}</h1>
            {canManageTeam && <InviteMemberDialog teamId={team.id} />}
          </div>
        </div>
        <TeamNav slug={team.slug} userRole={userRole} />
        <TeamOverview team={team} />

        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>
              Manage your team members and their roles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TeamMembers
              members={team.members}
              teamId={team.id}
              currentUserId={session.user.id}
              userRole={userRole}
            />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
