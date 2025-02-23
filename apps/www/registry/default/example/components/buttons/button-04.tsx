// Dependencies: pnpm install dicons

import { Archive } from "dicons";

import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <Button>
      <Archive
        className="h-4 w-4 opacity-60"
        strokeWidth={1}
        aria-hidden="true"
      />
      Button
    </Button>
  );
}
