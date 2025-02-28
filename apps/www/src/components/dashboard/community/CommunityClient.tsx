"use client";

import type { ExtendedCommunity } from "@/types/global";
import dynamic from "next/dynamic";

import { Skeleton } from "@/components/ui/skeleton";

const Communities = dynamic(() => import("./Communities"), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col gap-y-4">
      <Skeleton className="h-10 w-full" />
    </div>
  ),
});

interface CommunitiesProps {
  initialCommunities: ExtendedCommunity[];
  category?: string;
}

const CommunityClient = ({
  initialCommunities,
  category,
}: CommunitiesProps) => {
  return (
    <Communities initialCommunities={initialCommunities} category={category} />
  );
};

export default CommunityClient;
