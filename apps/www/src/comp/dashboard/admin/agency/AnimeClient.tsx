"use client";

import type { Graphic } from "@prisma/client";
import dynamic from "next/dynamic";

import { Skeleton } from "@/components/ui/skeleton";

import AnimeCardSkeleton from "./AnimeCardSkeleton";

const Animes = dynamic(() => import("./Animes"), {
  ssr: false,
  loading: () => <AnimeSkeleton />,
});

const AnimeClient = ({ initialAnimes }: { initialAnimes: Graphic[] }) => {
  return <Animes initialAnimes={initialAnimes} />;
};

export default AnimeClient;

const AnimeSkeleton = () => {
  return (
    <div className=" flex flex-col gap-y-4">
      <Skeleton className="h-10 w-full" />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index}>
            <AnimeCardSkeleton />
          </div>
        ))}
      </div>
    </div>
  );
};
