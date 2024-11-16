"use client";

import dynamic from "next/dynamic";

import { Skeleton } from "@/components/ui/skeleton";

const AddAnimeForm = dynamic(() => import("./AddAnimeForm"), {
  ssr: false,
  loading: () => <AnimeFormSkeleton />,
});

const CreateAnimeClient = () => {
  return <AddAnimeForm />;
};

export default CreateAnimeClient;

const AnimeFormSkeleton = () => {
  return (
    <div className="mt-2 grid max-w-xl gap-5">
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-[200px] w-full" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-2/3 md:w-40" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
      <Skeleton className="h-8 w-20" />
    </div>
  );
};
