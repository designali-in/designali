// Dependencies: npm install dicons

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "dicons";

export default function Button26() {
  return (
    <div className="inline-flex -space-x-px rounded-full shadow-sm shadow-black/[0.04] rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-full last:rounded-e-full focus-visible:z-10"
        size="icon"
        aria-label="Upvote"
      >
        <ChevronUp className="size-4" />
      </Button>
      <span className="flex items-center bg-primary px-1 text-sm font-medium text-primary-foreground">
        235
      </span>
      <Button
        className="rounded-none shadow-none first:rounded-s-full last:rounded-e-full focus-visible:z-10"
        size="icon"
        aria-label="Downvote"
      >
        <ChevronDown className="size-4" />
      </Button>
    </div>
  );
}
