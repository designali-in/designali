"use client";

import type { Community } from "@prisma/client";
import dynamic from "next/dynamic";

import { Skeleton } from "@/components/ui/skeleton";

const UpdateCommunityForm = dynamic(() => import("./UpdateCommunityForm"), {
  ssr: false,
  loading: () => <UpdateCommunityFormSkeleton />,
});

const UpdateCommunityClient = ({ community }: { community: Community }) => {
  return <UpdateCommunityForm community={community} />;
};

export default UpdateCommunityClient;

const UpdateCommunityFormSkeleton = () => {
  return (
    <div className="mt-2 grid gap-5">
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full md:w-1/2" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-24 w-full md:w-1/2" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-2/3 md:w-40" />
      </div>
      <div className="flex items-center gap-x-2">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-8 w-20" />
      </div>
    </div>
  );
};
