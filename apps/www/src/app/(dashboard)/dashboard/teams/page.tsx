import { Suspense } from "react";
import { CreateTeamDialog } from "@/comp/dashboard/teams/create-team-dialog";
import { TeamList, TeamListSkeleton } from "@/comp/dashboard/teams/team-list";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

async function getTeams(userId: string) {
  return await prisma.team.findMany({
    where: {
      members: {
        some: {
          userId,
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
}

export default async function TeamsPage() {
  const session = await auth();

  const teams = await getTeams(session.user.id);

  return (
    <main className="p-6">
      <div className="">
        <div className="flex items-center justify-between">
          <h1 className="py-4 text-2xl font-semibold">Teams</h1>
          <CreateTeamDialog />
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Your Teams</CardTitle>
            <CardDescription>Teams you own or are a member of</CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<TeamListSkeleton />}>
              <TeamList teams={teams} />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
