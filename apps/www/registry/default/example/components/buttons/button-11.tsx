// Dependencies: pnpm install dicons

import { ChevronDown } from "dicons";

import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <Button>
      Button
      <ChevronDown
        className="h-4 w-4 opacity-60"
        strokeWidth={1}
        aria-hidden="true"
      />
    </Button>
  );
}
