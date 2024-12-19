// Dependencies: pnpm install lucide-react

import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <Button variant="link">
      <ChevronLeft
        className="me-1 opacity-60"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
      Go back
    </Button>
  );
}
