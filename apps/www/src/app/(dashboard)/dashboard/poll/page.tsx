//@ts-nocheck
import Link from "next/link";
import PollClient from "@/components/dashboard/poll/PollClient";

import { auth } from "@/lib/auth";
import { INFINITE_SCROLLING_PAGINATION_BROWSE } from "@/lib/constants";
import { prisma } from "@/lib/db";
import { Button } from "@/components/ui/button";

const PollPage = async () => {
  const session = await auth();

  const initialPolls = await prisma.poll.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      option: {
        include: {
          vote: true,
        },
      },
      creator: true,
    },
    take: INFINITE_SCROLLING_PAGINATION_BROWSE,
    where: {
      expiresAt: {
        gt: new Date(), // only show polls that haven't expired yet
      },
    },
  });

  return (
    <div className="p-6">
      <div className="flex gap-2">
        <Link href="/dashboard/poll/create">
          <Button>Create Poll</Button>
        </Link>
        <Link href="/dashboard/poll/results">
          <Button variant="outline">Results</Button>
        </Link>
      </div>
      <PollClient
        initialPolls={initialPolls}
        interaction
        sessionId={session.user.id}
      />
    </div>
  );
};

export default PollPage;
