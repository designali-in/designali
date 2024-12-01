// Dependencies: npm install dicons

import { ChevronDown, GitBranch } from "dicons";

import { Button } from "@/components/ui/button";

export default function Button37() {
  return (
    <div className="inline-flex -space-x-px divide-x divide-primary-foreground/30 rounded-lg shadow-sm shadow-black/[0.04] rtl:space-x-reverse">
      <Button className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10">
        <GitBranch className="mr-1 size-4" />
        Fork
        <span className="ml-2 inline-flex h-5 max-h-full items-center rounded border border-primary-foreground/30 px-1 font-[inherit] text-[0.625rem] font-medium text-primary-foreground/60">
          18
        </span>
      </Button>
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        size="icon"
        aria-label="Options"
      >
        <ChevronDown className="size-4" />
      </Button>
    </div>
  );
}
