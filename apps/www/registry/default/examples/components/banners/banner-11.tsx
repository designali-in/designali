"use client";

// Dependencies: pnpm install dicons
import { useEffect, useState } from "react";
import { DIcons } from "dicons";

import { Button } from "@/components/ui/button";

export default function BannerDemo() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <div className="bg-muted px-4 py-3 md:py-2">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <p className="text-sm">
          <span className="font-medium">v2.1.0</span>
          <span className="mx-2 text-muted-foreground">•</span>
          New features and improvements available
        </p>
        <Button
          size="sm"
          variant="outline"
          disabled={isDownloading}
          onClick={handleDownload}
          className="min-w-24"
        >
          {isDownloading ? (
            <>
              <DIcons.LoaderCircle
                className="-ms-0.5  me-1 h-4 w-4 animate-spin"
                strokeWidth={1}
                aria-hidden="true"
              />
              Updating...
            </>
          ) : (
            <>
              <DIcons.Download
                className="-ms-0.5 me-1 h-4 w-4"
                aria-hidden="true"
              />
              Update now
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
