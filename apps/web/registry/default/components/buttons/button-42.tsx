// Dependencies: npm install @remixicon/react

import { Button } from "@/components/ui/button";
import { DIcons } from "dicons";

export default function Button42() {
  return (
    <div className="inline-flex flex-wrap gap-2">
      <Button variant="outline" aria-label="Login with Google" size="icon">
        <DIcons.Plus className="opacity-60" aria-hidden="true" />
      </Button>
      <Button variant="outline" aria-label="Login with Facebook" size="icon">
        <DIcons.Plus className="opacity-60" aria-hidden="true" />
      </Button>
      <Button variant="outline" aria-label="Login with X" size="icon">
        <DIcons.Plus className="opacity-60" aria-hidden="true" />
      </Button>
      <Button variant="outline" aria-label="Login with GitHub" size="icon">
        <DIcons.Plus className="opacity-60" aria-hidden="true" />
      </Button>
    </div>
  );
}
