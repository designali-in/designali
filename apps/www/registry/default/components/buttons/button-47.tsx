// Dependencies: npm install dicons

import { ChevronLeft } from "dicons";

import { Button } from "@/components/ui/button";

export default function Button47() {
  return (
    <Button variant="link">
      <ChevronLeft className="mr-1 size-4" />
      Go back
    </Button>
  );
}
