// Dependencies: npm install dicons

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "dicons";

export default function Button25() {
  return (
    <div className="inline-flex -space-x-px rounded-lg shadow-sm shadow-black/[0.04] rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
        size="icon"
        aria-label="Upvote"
      >
        <ChevronUp className="size-4" />
      </Button>
      <span className="flex items-center border border-input px-3 text-sm font-medium">
        235
      </span>
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
        size="icon"
        aria-label="Downvote"
      >
        <ChevronDown className="size-4" />
      </Button>
    </div>
  );
}
