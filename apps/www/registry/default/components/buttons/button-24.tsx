// Dependencies: npm install dicons @radix-ui/react-tooltip @radix-ui/react-toggle

"use client";

import { useState } from "react";
import { Bookmark } from "dicons";

import { Toggle } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Button24() {
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div>
            <Toggle
              className="group size-9 p-0 hover:bg-violet-50 hover:text-violet-500 data-[state=on]:bg-violet-50 data-[state=on]:text-violet-500"
              aria-label="Bookmark this"
              pressed={bookmarked}
              onPressedChange={setBookmarked}
            >
              <Bookmark className="size-4" />
            </Toggle>
          </div>
        </TooltipTrigger>
        <TooltipContent className="border border-input bg-popover px-2 py-1 text-xs text-muted-foreground">
          <p>{bookmarked ? "Remove bookmark" : "Bookmark this"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
