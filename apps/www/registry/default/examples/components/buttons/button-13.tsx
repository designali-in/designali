// Dependencies: pnpm install dicons

import { LoaderCircle } from "dicons";

import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <Button disabled>
      <LoaderCircle
        className="h-4 w-4  animate-spin"
        strokeWidth={1}
        aria-hidden="true"
      />
      Button
    </Button>
  );
}
