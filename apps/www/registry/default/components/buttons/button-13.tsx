// Dependencies: npm install dicons

import { LoaderCircle } from "dicons";

import { Button } from "@/components/ui/button";

export default function Button13() {
  return (
    <Button disabled>
      <LoaderCircle className="mr-1 size-4 animate-spin" />
      Button
    </Button>
  );
}
