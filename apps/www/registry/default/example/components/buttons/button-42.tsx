// Dependencies: pnpm install @remixicon/react

import { DIcons } from "dicons";

import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <div className="inline-flex flex-wrap gap-2">
      <Button variant="outline" aria-label="Login with Google" size="icon">
        <DIcons.Instagram size={16} aria-hidden="true" />
      </Button>
      <Button variant="outline" aria-label="Login with Facebook" size="icon">
        <DIcons.X size={16} aria-hidden="true" />
      </Button>
      <Button variant="outline" aria-label="Login with X" size="icon">
        <DIcons.Facebook size={16} aria-hidden="true" />
      </Button>
      <Button variant="outline" aria-label="Login with GitHub" size="icon">
        <DIcons.Threads size={16} aria-hidden="true" />
      </Button>
    </div>
  );
}
