import type { Metadata } from "next";
import LeaderboardClient from "@/comp/dashboard/admin/agency/LeaderboardClient";

import { env } from "@/env";
import { INFINITE_SCROLLING_PAGINATION_LEADERBOARD } from "@/lib/constants";
import { prisma } from "@/lib/db";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Leaderboard",
  description:
    "Explore the top-ranked anime based on user ratings in our leaderboard. Find the best and most popular shows according to our community's votes.",
};

const LeaderboardPage = async () => {
  const initialLeaderBoardAnimes = await prisma.graphic.findMany({
    take: INFINITE_SCROLLING_PAGINATION_LEADERBOARD,
    orderBy: [
      {
        totalRatings: "desc",
      },
      {
        createdAt: "desc",
      },
    ],
    include: {
      rating: true,
    },
  });

  return (
    <div className="p-6">
      <h1 className="py-4 text-2xl font-semibold"> Leaderboard</h1>

      <LeaderboardClient initialLeaderBoardAnimes={initialLeaderBoardAnimes} />
    </div>
  );
};

export default LeaderboardPage;
