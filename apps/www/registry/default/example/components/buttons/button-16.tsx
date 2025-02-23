// Dependencies: pnpm install dicons

import { Printer } from "dicons";

import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <Button variant="outline">
      <Printer
        className="h-4 w-4 opacity-60"
        strokeWidth={1}
        aria-hidden="true"
      />
      Print
      <kbd className=" inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
        ⌘P
      </kbd>
    </Button>
  );
}
