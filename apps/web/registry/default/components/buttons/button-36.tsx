// Dependencies: npm install dicons

import { Button } from "@/components/ui/button";
import { ChevronDown, Pin } from "dicons";

export default function Button36() {
  return (
    <div className="inline-flex -space-x-px divide-x divide-primary-foreground/30 rounded-lg shadow-sm shadow-black/[0.04] rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        size="icon"
        aria-label="Options"
      >
        <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
      <Button className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10">
        <Pin className="mr-1 size-4" />
        Pinned
      </Button>
    </div>
  );
}
