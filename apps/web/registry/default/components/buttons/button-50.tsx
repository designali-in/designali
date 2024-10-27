// Dependencies: npm install dicons

import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Circle,
} from "dicons";

export default function Button50() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-1">
      <Button variant="outline" size="icon" aria-label="Pan camera up">
        <ChevronUp className="size-4" />
      </Button>
      <div className="flex gap-3">
        <Button variant="outline" size="icon" aria-label="Pan camera left">
          <ChevronLeft className="size-4" />
        </Button>
        <div className="flex items-center justify-center" aria-hidden="true">
          <Circle className="size-4" />
        </div>
        <Button variant="outline" size="icon" aria-label="Pan camera right">
          <ChevronRight className="size-4" />
        </Button>
      </div>
      <Button variant="outline" size="icon" aria-label="Pan camera down">
        <ChevronDown className="size-4" />
      </Button>
    </div>
  );
}
