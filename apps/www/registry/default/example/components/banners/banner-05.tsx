"use client";

// Dependencies: pnpm install dicons
import { useState } from "react";
import { DIcons } from "dicons";

import { Button } from "@/components/ui/button";

export default function BannerDemo() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="dark bg-muted px-4 py-3 text-foreground md:py-2">
      <div className="flex gap-2 md:items-center">
        <div className="flex grow gap-3 md:items-center">
          <DIcons.Eclipse
            className="h-4 w-4 shrink-0 opacity-60 max-md:mt-0.5"
            strokeWidth={1}
            aria-hidden="true"
          />
          <div className="flex grow flex-col justify-between gap-3 md:flex-row md:items-center">
            <p className="text-sm">
              It’s live and ready for you! Dive in and explore the newest
              addition to your Designali toolkit.
            </p>
            <div className="flex gap-2 max-md:flex-wrap">
              <Button size="sm" className="text-sm">
                Download
              </Button>
              <Button variant="outline" size="sm" className="text-sm">
                Learn more
              </Button>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
          onClick={() => setIsVisible(false)}
          aria-label="Close banner"
        >
          <DIcons.Close
            strokeWidth={1}
            className="h-4 w-4 opacity-60 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  );
}
