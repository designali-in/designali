// Dependencies: npm install dicons

import { Button } from "@/components/ui/button";
import { XNum } from "dicons";

export default function Button06() {
  return (
    <Button variant="secondary">
      <XNum className="mr-1 size-5" />
      Button
    </Button>
  );
}
