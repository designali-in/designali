// Dependencies: pnpm install lucide-react @radix-ui/react-tooltip

"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ButtonDemo() {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Add new item">
            <Plus size={16} strokeWidth={2} aria-hidden="true" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="px-2 py-1 text-xs">Tooltip</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
