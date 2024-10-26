// Dependencies: npm install dicons

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "dicons";

export default function Button31() {
  return (
    <Button className="group" variant="secondary">
      <Mail className="mr-1 size-4" />
      Email
      <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
    </Button>
  );
}
