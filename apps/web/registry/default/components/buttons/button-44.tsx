// Dependencies: npm install @remixicon/react

import { Button } from "@/components/ui/button";
import { DIcons } from "dicons";

export default function Button44() {
  return (
    <div className="flex flex-col gap-2">
      <Button variant="outline">
        <DIcons.Plus className="opacity-60" aria-hidden="true" />
        Login with Google
      </Button>
      <Button variant="outline">
        <DIcons.Plus className="opacity-60" aria-hidden="true" />
        Login with X
      </Button>
      <Button variant="outline">
        <DIcons.Plus className="opacity-60" aria-hidden="true" />
        Login with Facebook
      </Button>
      <Button variant="outline">
        <DIcons.Plus className="opacity-60" aria-hidden="true" />
        Login with GitHub
      </Button>
    </div>
  );
}
