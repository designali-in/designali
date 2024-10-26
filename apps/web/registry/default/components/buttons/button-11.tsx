// Dependencies: npm install dicons

import { Button } from "@/components/ui/button";
import { ChevronDown } from "dicons";

export default function Button11() {
  return (
    <Button>
      Button
      <ChevronDown className="ml-1 size-4" />
    </Button>
  );
}
