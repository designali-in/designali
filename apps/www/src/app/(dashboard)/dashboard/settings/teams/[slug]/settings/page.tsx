//@ts-nocheck
import { notFound, redirect } from "next/navigation";
import { PendingInvites } from "@/components/dashboard/teams/pending-invites";
import { TeamNav } from "@/components/dashboard/teams/team-nav";
import { TeamSettingsForm } from "@/components/forms/team-settings-form";

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
      invitations: {
        where: {
          expires: {
            gt: new Date(),
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!team) notFound();
  return team;
}

export default async function TeamSettingsPage({
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

  if (userRole !== "OWNER" && userRole !== "ADMIN") {
    redirect(`/dashboard/teams/${params.slug}`);
  }

  return (
    <div className="p-6">
      <div className="grid gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="py-4 text-2xl font-semibold">Team Settings</h1>
        </div>
        <TeamNav slug={team.slug} userRole={userRole} />

        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>General</CardTitle>
              <CardDescription>
                Manage your team settings and preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TeamSettingsForm team={team} userRole={userRole} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pending Invitations</CardTitle>
              <CardDescription>Manage pending team invitations</CardDescription>
            </CardHeader>
            <CardContent>
              <PendingInvites invitations={team.invitations} teamId={team.id} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
