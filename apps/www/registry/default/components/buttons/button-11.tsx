// Dependencies: npm install dicons

import { ChevronDown } from "dicons";

import { Button } from "@/components/ui/button";

export default function Button11() {
  return (
    <Button>
      Button
      <ChevronDown className="ml-1 size-4" />
    </Button>
  );
}
