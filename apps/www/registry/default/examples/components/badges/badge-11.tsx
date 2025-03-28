// Dependencies: pnpm install lucide-react

import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { badgeVariants } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

export default function BadgeDemo() {
  return (
    <label
      className={cn(
        badgeVariants({ variant: "default" }),
        "cursor-pointer hover:bg-primary/80 has-[[data-state=unchecked]]:bg-muted has-[[data-state=unchecked]]:text-muted-foreground has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70",
      )}
    >
      <div className="flex items-center gap-1">
        <Checkbox
          id="badge-selectable"
          className="peer sr-only after:absolute after:inset-0"
          defaultChecked
        />
        <Check
          size={12}
          strokeWidth={2}
          className="hidden peer-data-[state=checked]:block"
          aria-hidden="true"
        />
        <span className="select-none">Selectable</span>
      </div>
    </label>
  );
}
