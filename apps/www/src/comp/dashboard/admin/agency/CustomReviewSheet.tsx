"use client";

import type { FC, ReactNode } from "react";
import dynamic from "next/dynamic";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";

interface CustomReviewSheetProps {
  children: ReactNode;
  animeId: string;
}

const AddAnimeReviewForm = dynamic(() => import("./AddAnimeReviewForm"), {
  ssr: false,
  loading: () => <PostReviewSkeleton />,
});

const PostReviewSkeleton = () => {
  return (
    <div className="mt-6 grid gap-5">
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-[200px] w-full" />
      </div>
      <div className="flex justify-end">
        <Skeleton className="h-8 w-20" />
      </div>
    </div>
  );
};

const CustomReviewSheet: FC<CustomReviewSheetProps> = ({
  children,
  animeId,
}) => {
  return (
    <Sheet>
      <SheetTrigger
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "w-fit",
        )}
      >
        {children}
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Add your review</SheetTitle>
          <SheetDescription>
            Add your review which will help others. Click save when you&rsquo;re
            done.
          </SheetDescription>
        </SheetHeader>
        <AddAnimeReviewForm graphicId={animeId} />
      </SheetContent>
    </Sheet>
  );
};

export default CustomReviewSheet;
