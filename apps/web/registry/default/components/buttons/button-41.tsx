// Dependencies: npm install dicons

import { Button } from "@/components/ui/button";
import { Star } from "dicons";

export default function Button41() {
  return (
    <Button>
      <Star
        className="mr-2 size-4"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
      <span className="flex items-baseline gap-2">
        Star
        <span className="text-xs text-primary-foreground/60">729</span>
      </span>
    </Button>
  );
}
