"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { DIcons } from "dicons";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border border-dashed border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-black",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function Beam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-8"
      ref={containerRef}
    >
      <div className="flex size-full max-h-full max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <DIcons.Shapes className="text-orange-500" />
          </Circle>
          <Circle ref={div5Ref}>
            <DIcons.Image className="text-blue-500" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <DIcons.Send className="text-green-500" />
          </Circle>
          <Circle ref={div4Ref} className="h-20 w-20 p-3">
            <DIcons.Designali className="m-1 h-12 pl-1" />
          </Circle>
          <Circle ref={div6Ref}>
            <DIcons.Check className="text-yellow-500" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <DIcons.Repeat className="text-purple-500" />
          </Circle>
          <Circle ref={div7Ref}>
            <DIcons.Check className="text-teal-500" />
          </Circle>
        </div>
      </div>
    </div>
  );
}
