// Dependencies: npm install dicons @radix-ui/react-toggle-group

"use client";

import { useState } from "react";
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from "dicons";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function Button30() {
  const [value, setValue] = useState<string>("center");

  return (
    <ToggleGroup
      className="inline-flex gap-0 -space-x-px divide-x divide-background rounded-lg shadow-sm shadow-black/[0.04] rtl:space-x-reverse"
      type="single"
      value={value}
      onValueChange={(value) => {
        if (value) setValue(value);
      }}
    >
      <ToggleGroupItem
        className="data-[state=on]: rounded-none bg-primary/80 first:rounded-s-lg last:rounded-e-lg hover:bg-primary/50 focus-visible:z-10 data-[state=on]:bg-primary"
        aria-label="Align Left"
        value="left"
      >
        <AlignLeft className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="data-[state=on]: rounded-none bg-primary/80 first:rounded-s-lg last:rounded-e-lg hover:bg-primary/50 focus-visible:z-10 data-[state=on]:bg-primary"
        aria-label="Align Center"
        value="center"
      >
        <AlignCenter className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="data-[state=on]: rounded-none bg-primary/80 first:rounded-s-lg last:rounded-e-lg hover:bg-primary/50 focus-visible:z-10 data-[state=on]:bg-primary"
        aria-label="Align Right"
        value="right"
      >
        <AlignRight className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="data-[state=on]: rounded-none bg-primary/80 first:rounded-s-lg last:rounded-e-lg hover:bg-primary/50 focus-visible:z-10 data-[state=on]:bg-primary"
        aria-label="Align Justify"
        value="justify"
      >
        <AlignJustify className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
