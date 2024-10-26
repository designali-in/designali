// Dependencies: npm install dicons

import { Button } from "@/components/ui/button";
import { LoaderCircle } from "dicons";

export default function Button13() {
  return (
    <Button disabled>
      <LoaderCircle className="mr-1 size-4 animate-spin" />
      Button
    </Button>
  );
}
