// Dependencies: npm install @remixicon/react

import { Button } from "@/components/ui/button";
import { DIcons } from "dicons";

export default function Button43() {
  return (
    <div className="grid w-full gap-2">
      <Button variant="outline">
        <DIcons.VercelFull className="size-12" />
      </Button>
      <Button variant="outline">
        <DIcons.BehanceFull className="size-12" />
      </Button>
      <Button variant="outline">
        <DIcons.Nextjs className="size-12" />
      </Button>
      <Button variant="outline">
        <DIcons.NPM className="size-12" />
      </Button>
    </div>
  );
}
