// Dependencies: npm install dicons

import { Button } from "@/components/ui/button";
import { FlipHorizontal, FlipVertical } from "dicons";

export default function Button29() {
  return (
    <div className="inline-flex -space-x-px rounded-lg shadow-sm shadow-black/[0.04] rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
        size="icon"
        aria-label="Flip Horizontal"
      >
        <FlipHorizontal className="size-4" />
      </Button>
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
        size="icon"
        aria-label="Flip Vertical"
      >
        <FlipVertical className="size-4" />
      </Button>
    </div>
  );
}
