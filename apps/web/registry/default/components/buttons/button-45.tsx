// Dependencies: npm install dicons

import { Button } from "@/components/ui/button";
import { DIcons } from "dicons";

export default function Button45() {
  return (
    <div className="flex flex-col gap-2">
      <Button>
        <DIcons.Instagram className="mr-1 size-6" aria-hidden="true" />
        Login with Instagram
      </Button>

      <Button variant="destructive">
        <DIcons.Threads className="mr-1 size-6" aria-hidden="true" />
        Login with Threads
      </Button>
      <Button variant="outline">
        <DIcons.Facebook className="mr-1 size-6" aria-hidden="true" />
        Login with Facebook
      </Button>
      <Button variant="secondary">
        <DIcons.X className="mr-1 size-6" aria-hidden="true" />
        Login with X
      </Button>
    </div>
  );
}
