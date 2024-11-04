// Dependencies: npm install dicons

import { ChevronLeft } from "dicons";

import { Button } from "@/components/ui/button";

export default function Button38() {
  return (
    <Button>
      Previous
      <ChevronLeft className="size-4" />
    </Button>
  );
}
