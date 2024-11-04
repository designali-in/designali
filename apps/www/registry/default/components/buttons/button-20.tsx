// Dependencies: npm install dicons

import { Plus } from "dicons";

import { Button } from "@/components/ui/button";

export default function Button20() {
  return (
    <Button variant="default" size="icon" className="rounded-full">
      <Plus className="size-4" />
    </Button>
  );
}
