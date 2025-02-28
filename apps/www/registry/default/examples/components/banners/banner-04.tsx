"use client";

// Dependencies: pnpm install dicons
import { useState } from "react";
import { DIcons } from "dicons";

import { Button } from "@/components/ui/button";

export default function BannerDemo() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="dark bg-muted px-4 py-3 text-foreground">
      <div className="flex gap-2">
        <div className="flex grow gap-3">
          <DIcons.Palette
            className="mt-0.5 h-4 w-4 shrink-0 opacity-60"
            strokeWidth={1}
            aria-hidden="true"
          />
          <div className="flex grow flex-col justify-between gap-2 md:flex-row">
            <p className="text-sm">
              We’ve just added something amazing to elevate your Designali
              experience!
            </p>
            <a href="#" className="group whitespace-nowrap text-sm font-medium">
              Learn more
              <DIcons.ArrowRight
                className="-mt-0.5 ms-1 inline-flex h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5"
                strokeWidth={1}
                aria-hidden="true"
              />
            </a>
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
