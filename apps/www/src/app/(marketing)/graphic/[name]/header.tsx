"use client";

import type { Likes, Views } from "@/types";
import React from "react";
import { Separator } from "@/registry/default/designali/ui/separator";
import { Skeleton } from "@designali/ui/skeleton";
import useSWR from "swr";

import fetcher from "@/lib/fetcher";

interface HeaderProps {
  slug: string;
}

const Header = (props: HeaderProps) => {
  const { slug } = props;

  const { data: viewsData, isLoading: viewsIsLoading } = useSWR<Views>(
    `/api/views?slug=${slug}`,
    fetcher,
  );

  const { data, isLoading } = useSWR<Likes>(`/api/likes?slug=${slug}`, fetcher);

  React.useEffect(() => {
    const increment = async () => {
      await fetch("/api/views", {
        method: "POST",
        body: JSON.stringify({
          slug,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    };

    increment();
  }, []);

  return (
    <div className="">
      <div className="flex flex-wrap justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="text-xs text-slate-600 dark:border-slate-800 dark:text-slate-400">
            Views
          </div>
          {viewsIsLoading ? (
            <Skeleton className="h-6 rounded-md" />
          ) : (
            <div className="text-lg font-bold">{viewsData.views}</div>
          )}
        </div>
        <Separator orientation="vertical" className="w-1" />
        <div className="flex items-center gap-2">
          <div className="text-xs text-slate-600 dark:border-slate-800 dark:text-slate-400">
            Likes
          </div>
          {isLoading || !data ? (
            <Skeleton className="h-6 rounded-md" />
          ) : (
            <div className="text-lg font-bold">{data.likes}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
