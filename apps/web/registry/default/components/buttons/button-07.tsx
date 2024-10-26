// Dependencies: npm install dicons

import { Button } from "@/components/ui/button";
import { Sparkles } from "dicons";

export default function Button07() {
  return (
    <Button variant="outline">
      Button
      <Sparkles className="ml-1 h-4 w-4" />
    </Button>
  );
}
