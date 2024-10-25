import { Button } from "@/components/ui/button";
import { Trash } from "dicons";

export default function Button05() {
  return (
    <Button variant="destructive">
      <Trash
        className="mr-1 h-4 w-4 opacity-60"
        strokeWidth={2}
        aria-hidden="true"
      />
      Button
    </Button>
  );
}
