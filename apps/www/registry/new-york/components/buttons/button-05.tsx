import { Trash } from "dicons";

import { Button } from "@/components/ui/button";

export default function Button05() {
  return (
    <Button variant="destructive">
      <Trash className="mr-1 h-4 w-4" />
      Button
    </Button>
  );
}
