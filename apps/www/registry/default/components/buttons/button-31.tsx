// Dependencies: npm install dicons

import { Files, Film, Menu } from "dicons";

import { Button } from "@/components/ui/button";

export default function Button31() {
  return (
    <div className="inline-flex -space-x-px rounded-lg shadow-sm shadow-black/[0.04] rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
      >
        <Files className="mr-1 size-4" />
        Files
      </Button>
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
      >
        <Film className="mr-1 size-4" />
        Media
      </Button>
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
        size="icon"
        aria-label="Menu"
      >
        <Menu className="size-4" />
      </Button>
    </div>
  );
}
