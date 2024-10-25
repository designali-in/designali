import { Button } from "@/components/ui/button";
import { Archive } from "lucide-react";

export default function Button04() {
  return (
    <Button>
      <Archive
        className="mr-1 opacity-60"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
      Button
    </Button>
  );
}
