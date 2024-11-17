"use client";

import dynamic from "next/dynamic";

import { Skeleton } from "@/components/ui/skeleton";

const CreateCommunityForm = dynamic(() => import("./CreateCommunityForm"), {
  ssr: false,
  loading: () => <CommunityFormSkeleton />,
});

const CreateCommunityClient = () => {
  return <CreateCommunityForm />;
};

export default CreateCommunityClient;

const CommunityFormSkeleton = () => {
  return (
    <div className="mt-2 grid max-w-xl gap-5">
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-24 w-full" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full md:w-[200px]" />
      </div>
      <Skeleton className="h-8 w-20" />
    </div>
  );
};
