// Dependencies: npm install @remixicon/react

import { Button } from "@/components/ui/button";
import { DIcons } from "dicons";

export default function Button43() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        className="flex-1"
        variant="outline"
        aria-label="Login with Google"
        size="icon"
      >
        <DIcons.Plus className="opacity-60" aria-hidden="true" />
      </Button>
      <Button
        className="flex-1"
        variant="outline"
        aria-label="Login with Facebook"
        size="icon"
      >
        <DIcons.Plus className="opacity-60" aria-hidden="true" />
      </Button>
      <Button
        className="flex-1"
        variant="outline"
        aria-label="Login with X"
        size="icon"
      >
        <DIcons.Plus className="opacity-60" aria-hidden="true" />
      </Button>
      <Button
        className="flex-1"
        variant="outline"
        aria-label="Login with GitHub"
        size="icon"
      >
        <DIcons.Plus className="opacity-60" aria-hidden="true" />
      </Button>
    </div>
  );
}
