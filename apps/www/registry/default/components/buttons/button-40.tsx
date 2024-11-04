// Dependencies: npm install dicons

import { ThumbsUp } from "dicons";

import { Button } from "@/components/ui/button";

export default function Button40() {
  return (
    <Button className="py-0 pe-0" variant="outline">
      <ThumbsUp className="mr-2 size-4" />
      Like
      <span className="relative ms-3 inline-flex h-full items-center justify-center rounded-full px-3 text-xs font-medium text-muted-foreground before:absolute before:inset-0 before:left-0 before:w-px before:bg-input">
        86
      </span>
    </Button>
  );
}
