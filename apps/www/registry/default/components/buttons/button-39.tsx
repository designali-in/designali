// Dependencies: npm install dicons

import { ChevronRight } from "dicons";

import { Button } from "@/components/ui/button";

export default function Button39() {
  return (
    <Button>
      Next
      <ChevronRight className="size-4" />
    </Button>
  );
}
