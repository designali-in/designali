"use client";

import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxDemo() {
  const [checked, setChecked] = useState<boolean | "indeterminate">(
    "indeterminate",
  );

  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id="checkbox-02"
        checked={checked}
        onCheckedChange={setChecked}
      />
      <Label htmlFor="checkbox-02">Indeterminate checkbox</Label>
    </div>
  );
}
