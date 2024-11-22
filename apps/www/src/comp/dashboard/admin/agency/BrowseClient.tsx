"use client";

import type { Graphic } from "@prisma/client";
import dynamic from "next/dynamic";
import { DIcons } from "dicons";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
      <div className=" mt-40 grid  gap-3 md:grid-cols-3">
        {Array.from({ length }).map((_, index) => (
          <SingleAnimeCardSkeleton key={index} />
        ))}
      </div>
    </>
  );
};

export const SingleAnimeCardSkeleton = () => {
  return (
    <Card className="rounded-sm">
      <CardHeader className="border-b p-0">
        <AspectRatio>
          <div className="flex h-full items-center justify-center bg-secondary">
            <DIcons.Image
              className="h-9 w-9 text-muted-foreground"
              aria-hidden="true"
            />
          </div>
        </AspectRatio>
      </CardHeader>
      <CardContent className="grid gap-2.5 p-4">
        <Skeleton className="h-4 w-1/2" />
      </CardContent>
    </Card>
  );
};
