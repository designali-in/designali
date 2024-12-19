// Dependencies: pnpm install lucide-react

import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <Button>
      Button
      <ChevronDown
        className="-me-1 ms-2 opacity-60"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
    </Button>
  );
}
