"use client";

import type { Graphic } from "@prisma/client";
import dynamic from "next/dynamic";

import { Skeleton } from "@/components/ui/skeleton";

const BrowseAnime = dynamic(() => import("./BrowseAnime"), {
  ssr: false,
  loading: () => (
    <div className="grid gap-3">
      <div className="flex justify-between">
        <Skeleton className="h-9 w-40" />
        <Skeleton className="h-9 w-20" />
      </div>
    </div>
  ),
});

const BrowseClient = ({ initialAnimes }: { initialAnimes: Graphic[] }) => {
  return <BrowseAnime initialAnimes={initialAnimes} />;
};

export default BrowseClient;
