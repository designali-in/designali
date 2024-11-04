// Dependencies: npm install dicons

import { SquareArrowOutUpRight } from "dicons";

import { Button } from "@/components/ui/button";

export default function Button35() {
  return (
    <div className="inline-flex -space-x-px rounded-lg shadow-sm shadow-black/[0.04] rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
      >
        Preview
      </Button>
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
        size="icon"
        aria-label="Open link"
      >
        <SquareArrowOutUpRight className="size-4" />
      </Button>
    </div>
  );
}
