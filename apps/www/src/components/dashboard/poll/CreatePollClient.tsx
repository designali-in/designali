"use client";

import dynamic from "next/dynamic";

import { Skeleton } from "@/components/ui/skeleton";

const CreatePollForm = dynamic(() => import("./CreatePollForm"), {
  ssr: false,
  loading: () => <PollFormSkeleton />,
});

const CreatePollClient = () => {
  return <CreatePollForm />;
};

export default CreatePollClient;

const PollFormSkeleton = () => {
  return (
    <div className="mt-2 grid max-w-lg gap-5">
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
        <div className="flex justify-end">
          <Skeleton className="h-8 w-20" />
        </div>
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 max-w-[280px]" />
      </div>
      <Skeleton className="h-8 w-20" />
    </div>
  );
};
