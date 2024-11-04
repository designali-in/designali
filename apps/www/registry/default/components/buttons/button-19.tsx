// Dependencies: npm install dicons

import { Plus } from "dicons";

import { Button } from "@/components/ui/button";

export default function Button19() {
  return (
    <Button variant="outline" className="aspect-square max-sm:p-0">
      <Plus className="mr-1 size-4" />
      <span className="max-sm:sr-only">Add new</span>
    </Button>
  );
}
