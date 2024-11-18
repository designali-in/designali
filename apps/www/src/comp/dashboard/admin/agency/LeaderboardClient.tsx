"use client";

import type { ExtendedAnime } from "@/types";
import dynamic from "next/dynamic";

const TableColumns = ["Rank", "Anime", "Director", "Genre", "Rating", "Votes"];

const LeaderboardAnimes = dynamic(() => import("./LeaderboardAnimes"), {
  ssr: false,
  loading: () => <LeaderboardSkeleton />,
});

const LeaderboardClient = ({
  initialLeaderBoardAnimes,
}: {
  initialLeaderBoardAnimes: ExtendedAnime[];
}) => {
  return (
    <LeaderboardAnimes initialLeaderBoardAnimes={initialLeaderBoardAnimes} />
  );
};

export default LeaderboardClient;

const LeaderboardSkeleton = () => {
  return <></>;
};
