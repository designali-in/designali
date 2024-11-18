"use client";

import type { Graphic } from "@prisma/client";
import dynamic from "next/dynamic";

import { Skeleton } from "@/components/ui/skeleton";

const BrowseAnime = dynamic(() => import("./BrowseAnime"), {
  ssr: false,
  loading: () => <BrowseAnimeSkeleton />,
});

const BrowseClient = ({ initialAnimes }: { initialAnimes: Graphic[] }) => {
  return <BrowseAnime initialAnimes={initialAnimes} />;
};

export default BrowseClient;

const BrowseAnimeSkeleton = () => {
  return (
    <>
      <div className="flex flex-col justify-between gap-y-4 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-8 w-40" />
        </div>
        <Skeleton className="h-8 w-24" />
      </div>
    </>
  );
};
