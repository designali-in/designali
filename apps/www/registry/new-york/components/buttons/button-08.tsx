// Dependencies: npm install dicons

import { ArrowLeft } from "dicons";

import { Button } from "@/components/ui/button";

export default function Button08() {
  return (
    <Button className="group" variant="ghost">
      <ArrowLeft className="mr-1 size-4 transition-transform duration-300 group-hover:-translate-x-1" />
      Button
    </Button>
  );
}
