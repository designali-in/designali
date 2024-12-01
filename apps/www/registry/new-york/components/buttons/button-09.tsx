// Dependencies: npm install dicons

import { ArrowRight } from "dicons";

import { Button } from "@/components/ui/button";

export default function Button10() {
  return (
    <Button className="group">
      Button
      <ArrowRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Button>
  );
}
