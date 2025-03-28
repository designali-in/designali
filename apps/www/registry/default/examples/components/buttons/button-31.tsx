// Dependencies: pnpm install lucide-react

import { Ellipsis, Files, Film } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <div className="inline-flex -space-x-px rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
      >
        <Files
          className="opacity-60"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        Files
      </Button>
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
      >
        <Film
          className=" opacity-60"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        Media
      </Button>
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
        size="icon"
        aria-label="Menu"
      >
        <Ellipsis size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
    </div>
  );
}
