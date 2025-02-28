// Dependencies: pnpm install dicons

import { ArrowRight } from "dicons";

import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <Button className="group">
      Button
      <ArrowRight
        className="h-3 w-3  opacity-60 transition-transform group-hover:translate-x-0.5"
        strokeWidth={1}
        aria-hidden="true"
      />
    </Button>
  );
}
