// Dependencies: npm install dicons

import { Printer } from "dicons";

import { Button } from "@/components/ui/button";

export default function Button116() {
  return (
    <Button variant="outline">
      <Printer className="mr-1 size-4" />
      Print
      <kbd className="ml-2 inline-flex h-5 max-h-full items-center rounded border border-border px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
        ⌘P
      </kbd>
    </Button>
  );
}
