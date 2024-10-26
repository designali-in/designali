// Dependencies: npm install dicons

import { Button } from "@/components/ui/button";
import { Plus } from "dicons";

export default function Button20() {
  return (
    <Button variant="default" size="icon" className="rounded-full">
      <Plus className="size-4" />
    </Button>
  );
}
