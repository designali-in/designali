"use client";

import type { UrlMeta, User } from "@prisma/client";
import { Skeleton } from "@designali/ui/skeleton";
import useSWR from "swr";

import { fetcher } from "@/lib/utils";

export interface UrlMetaProps {
  user: Pick<User, "id" | "name">;
  action: string;
  urlId: string;
}

export default function UserUrlMetaInfo({ user, action, urlId }: UrlMetaProps) {
  const { data, isLoading } = useSWR<UrlMeta[]>(
    `${action}?id=${urlId}`,
    fetcher,
  );

  if (isLoading)
    return (
      <div className="space-y-2 p-2">
        <Skeleton className="h-40 w-full" />
      </div>
    );

  if (!data || data.length === 0) {
    return <div>No Stats</div>;
  }

  return <div className="animate-fade-down rounded-t-none">Chart</div>;
}
