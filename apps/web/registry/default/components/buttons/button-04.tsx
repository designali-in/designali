import { Archive } from "lucide-react";

import { Button } from "../../designali/ui/button";

export default function Button04() {
  return (
    <Button>
      <Archive
        className="-ms-1 me-2 opacity-60"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
      Button
    </Button>
  );
}
