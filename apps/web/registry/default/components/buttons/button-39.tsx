// Dependencies: npm install dicons

import { Button } from "@/components/ui/button";
import { ChevronRight } from "dicons";

export default function Button39() {
  return (
    <Button>
      Next
      <ChevronRight className="size-4" />
    </Button>
  );
}
