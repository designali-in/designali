// Dependencies: npm install dicons

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "dicons";

export default function Button47() {
  return (
    <Button variant="link">
      <ChevronLeft className="mr-1 size-4" />
      Go back
    </Button>
  );
}
