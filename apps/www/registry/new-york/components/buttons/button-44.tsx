// Dependencies: npm install @remixicon/react

import { DIcons } from "dicons";

import { Button } from "@/components/ui/button";

export default function Button44() {
  return (
    <div className="flex flex-col gap-2">
      <Button variant="outline">
        <DIcons.Instagram className="mr-1 size-6" aria-hidden="true" />
        Login with Instagram
      </Button>
      <Button variant="outline">
        <DIcons.X className="mr-1 size-6" aria-hidden="true" />
        Login with X
      </Button>
      <Button variant="outline">
        <DIcons.Facebook className="mr-1 size-6" aria-hidden="true" />
        Login with Facebook
      </Button>
      <Button variant="outline">
        <DIcons.Threads className="mr-1 size-6" aria-hidden="true" />
        Login with Threads
      </Button>
    </div>
  );
}
