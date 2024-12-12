import { redirect } from "next/navigation";
import { JoinTeamForm } from "@/comp/forms/join-team-form";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface JoinTeamPageProps {
  searchParams: { token?: string };
}

async function getInvitation(token: string) {
  const invitation = await prisma.invitation.findUnique({
    where: { token },
    include: {
      team: true,
    },
  });

  if (!invitation) return null;

  // Check if invitation has expired
  if (invitation.expires < new Date()) {
    await prisma.invitation.delete({
      where: { token },
    });
    return null;
  }

  return invitation;
}

export default async function JoinTeamPage({
  searchParams,
}: JoinTeamPageProps) {
  const session = await auth();

  if (!session?.user) {
    redirect(`/login?callbackUrl=/teams/join?token=${searchParams.token}`);
  }

  if (!searchParams.token) {
    redirect("/dashboard");
  }

  const invitation = await getInvitation(searchParams.token);

  if (!invitation) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card className="mx-auto w-full max-w-md">
          <CardHeader>
            <CardTitle>Invalid or Expired Invitation</CardTitle>
            <CardDescription>
              This invitation link is no longer valid. Please request a new
              invitation.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle>Join {invitation.team.name}</CardTitle>
          <CardDescription>
            You&apos;ve been invited to join this team
          </CardDescription>
        </CardHeader>
        <CardContent>
          <JoinTeamForm
            teamId={invitation.teamId}
            invitationToken={invitation.token}
            teamName={invitation.team.name}
          />
        </CardContent>
      </Card>
    </div>
  );
}
