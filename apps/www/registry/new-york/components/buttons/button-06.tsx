// Dependencies: npm install dicons

import { XNum } from "dicons";

import { Button } from "@/components/ui/button";

export default function Button06() {
  return (
    <Button variant="secondary">
      <XNum className="mr-1 size-5" />
      Button
    </Button>
  );
}
