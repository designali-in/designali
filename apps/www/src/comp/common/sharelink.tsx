"use client";

import type { Likes } from "@/src/types";
import * as React from "react";
import Link from "next/link";
import fetcher from "@/src/lib/fetcher";
import useSWR from "swr";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Icons } from "../icons";
import { LikeButtonIcon } from "../uis/like-button";
import { UpdatesToolbar } from "./shate-toolbar";

const ShareLink = ({ name, slug }: { name: string; slug }) => {
  const { data: likesData, isLoading: likesIsLoading } = useSWR<Likes>(
    `/api/likes?slug=${slug}`,
    fetcher,
  );
  return (
    <div className="flex items-center justify-center gap-2">
      <Link href={`/solutions/${name}/#reviews`}>
        <TooltipProvider delayDuration={20}>
          <Tooltip>
            <TooltipTrigger
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "icon",
                }),
              )}
            >
              <Icons.plus strokeWidth={1} className="h-5 w-5" />
            </TooltipTrigger>
            <TooltipContent
              className="rounded-sm px-2 py-1"
              sideOffset={5}
              side="top"
            >
              <span className="text-xs">Review</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>

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
