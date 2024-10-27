// Dependencies: npm install lucide-react

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Button51() {
  return (
    <Button className="group h-auto gap-4 py-3 text-left" variant="outline">
      <div className="space-y-1">
        <h3>Design Agency</h3>
        <p className="font-normal text-muted-foreground">
          With a Touch of Magic
        </p>
      </div>
      <ChevronRight
        className="opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
    </Button>
  );
}
