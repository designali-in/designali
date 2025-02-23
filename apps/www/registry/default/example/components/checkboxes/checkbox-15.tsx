import { DIcons } from "dicons";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxDemo() {
  return (
    <div className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring">
      <Checkbox
        id="checkbox-15"
        className="order-1 after:absolute after:inset-0"
        aria-describedby="checkbox-15-description"
      />
      <div className="flex grow items-center gap-3">
        <div className="h-9 w-9 border">
          <DIcons.Designali className="m-2 h-5 w-5" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="checkbox-15">
            Label{" "}
            <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
              (Sublabel)
            </span>
          </Label>
          <p
            id="checkbox-15-description"
            className="text-xs text-muted-foreground"
          >
            A short description goes here.
          </p>
        </div>
      </div>
    </div>
  );
}
