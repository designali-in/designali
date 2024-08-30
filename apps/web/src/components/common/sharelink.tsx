"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@designali/ui";
import { buttonVariants } from "@designali/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@designali/ui/tooltip";

import { Icons } from "../icons";
import { UpdatesToolbar } from "./shate-toolbar";

const ShareLink = ({ name }: { name: string }) => {
  return (
    <div className="flex gap-2">
      <Link href={`/solutions/${name}/#reviews`}>
        <TooltipProvider delayDuration={20}>
          <Tooltip>
            <TooltipTrigger
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lgicon",
                }),
              )}
            >
              <Icons.pen strokeWidth={1} className="h-5 w-5" />
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
      <TooltipProvider delayDuration={20}>
        <Tooltip>
          <TooltipTrigger
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lgicon",
              }),
            )}
          >
            <Icons.heart
              strokeWidth={1}
              className="h-5 w-5 animate-pulse text-ali"
            />
          </TooltipTrigger>
          <TooltipContent
            className="rounded-sm px-2 py-1"
            sideOffset={5}
            side="top"
          >
            <span className="text-xs">Like</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ShareLink;
