"use client";

import type { Session } from "next-auth";
import dynamic from "next/dynamic";

import { Skeleton } from "@/components/ui/skeleton";

const AnimeRating = dynamic(() => import("./AnimeRating"), {
  ssr: false,
  loading: () => (
    <div className="w-full space-y-2">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-4 w-full md:w-3/4" />
    </div>
  ),
});

interface AnimeRatingProps {
  animeId: string;
  userRating: number | undefined;
  session: Session | null;
}

const AnimeRatingClient = ({
  animeId,
  session,
  userRating,
}: AnimeRatingProps) => {
  return (
    <AnimeRating animeId={animeId} session={session} userRating={userRating} />
  );
};

export default AnimeRatingClient;
