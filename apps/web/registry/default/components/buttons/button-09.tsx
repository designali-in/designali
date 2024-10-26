// Dependencies: npm install dicons

import { Button } from "@/components/ui/button";
import { ArrowRight } from "dicons";

export default function Button10() {
  return (
    <Button className="group">
      Button
      <ArrowRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Button>
  );
}
