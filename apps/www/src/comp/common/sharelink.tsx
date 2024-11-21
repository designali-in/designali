"use client";

import type { Likes } from "@/src/types";
import * as React from "react";
import fetcher from "@/src/lib/fetcher";
import useSWR from "swr";

import { Skeleton } from "@/components/ui/skeleton";

import { LikeButtonIcon } from "../uis/like-button";
import { UpdatesToolbar } from "./shate-toolbar";

const ShareLink = ({ slug }: { slug }) => {
  const { data: likesData, isLoading: likesIsLoading } = useSWR<Likes>(
    `/api/likes?slug=${slug}`,
    fetcher,
  );
  return (
    <div className="flex items-center justify-center gap-2">
      <UpdatesToolbar posts={""} />

      <div className="flex items-center gap-3">
        <LikeButtonIcon slug={slug} />

        {likesIsLoading ? (
          <Skeleton className="h-5 w-10 rounded-md" />
        ) : (
          <div className="flex gap-1">
            {likesData.likes}
            <span>likes</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShareLink;
