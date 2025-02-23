// Dependencies: pnpm install dicons

import { Plus } from "dicons";

import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <Button variant="outline" className="aspect-square max-sm:p-0">
      <Plus className="h-4 w-4 opacity-60" strokeWidth={1} aria-hidden="true" />
      <span className="max-sm:sr-only">Add new</span>
    </Button>
  );
}
