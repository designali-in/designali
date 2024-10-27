// Dependencies: npm install dicons

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "dicons";

export default function Button38() {
  return (
    <Button>
      Previous
      <ChevronLeft className="size-4" />
    </Button>
  );
}
