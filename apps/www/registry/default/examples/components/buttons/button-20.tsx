// Dependencies: pnpm install lucide-react

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <Button
      className="rounded-full"
      variant="outline"
      size="icon"
      aria-label="Add new item"
    >
      <Plus size={16} strokeWidth={2} aria-hidden="true" />
    </Button>
  );
}
