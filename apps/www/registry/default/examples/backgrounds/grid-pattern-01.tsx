"use client";

import GridPattern from "@/components/ui/backgrounds/grid-pattern";

import { cn } from "@/lib/utils";

export default function GridPattern01() {
  return (
    <div className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Grid Pattern
      </p>
      <GridPattern
        strokeDasharray="1"
        width={100}
        height={10}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
}
