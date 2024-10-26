// Dependencies: npm install dicons @radix-ui/react-tooltip

"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Plus } from "dicons";

export default function Button22() {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Add new item">
            <Plus className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="border border-input bg-popover px-2 py-1 text-xs text-muted-foreground">
          Tooltip
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
