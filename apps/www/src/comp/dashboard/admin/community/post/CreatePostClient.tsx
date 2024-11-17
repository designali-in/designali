"use client";

import dynamic from "next/dynamic";

import { Skeleton } from "@/components/ui/skeleton";

const CreatePostForm = dynamic(() => import("./CreatePostForm"), {
  ssr: false,
  loading: () => <PostFormSkeleton />,
});

const CreatePostClient = ({
  category,
  communityId,
}: {
  category: string;
  communityId: string;
}) => {
  return <CreatePostForm category={category} communityId={communityId} />;
};

export default CreatePostClient;

const PostFormSkeleton = () => {
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
      <Skeleton className="h-8 w-14" />
    </div>
  );
};
