//@ts-nocheck
import { redirect } from "next/navigation";
import PollClient from "@/components/dashboard/poll/PollClient";

import { auth } from "@/lib/auth";
import { INFINITE_SCROLLING_PAGINATION_BROWSE } from "@/lib/constants";
import { prisma } from "@/lib/db";

const PollResultsPage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/sign-in");
  }

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
        lte: new Date(), // only show polls that have expired
      },
    },
  });

  return (
    <div className="p-6">
      <PollClient initialPolls={initialPolls} sessionId={session.user.id} />
    </div>
  );
};

export default PollResultsPage;
