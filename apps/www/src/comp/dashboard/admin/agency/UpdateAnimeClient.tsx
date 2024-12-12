"use client";

import type { Graphic } from "@prisma/client";
import dynamic from "next/dynamic";

import { Skeleton } from "@/components/ui/skeleton";

const UpdateAnimeForm = dynamic(() => import("./UpdateAnimeForm"), {
  ssr: false,
  loading: () => <AnimeFormSkeleton />,
});

const UpdateAnimeClient = ({ anime }: { anime: Graphic }) => {
  return <UpdateAnimeForm anime={anime} />;
};

export default UpdateAnimeClient;

const AnimeFormSkeleton = () => {
  return (
    <div className="mt-2 grid gap-5">
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  );
};
