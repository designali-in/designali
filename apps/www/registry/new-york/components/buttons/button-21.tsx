// Dependencies: npm install dicons

"use client";

import { useState } from "react";
import { Plus } from "dicons";

import { Button } from "@/components/ui/button";

export default function Button21() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Button
      className="group rounded-full"
      variant="outline"
      size="icon"
      onClick={() => setOpen((prevState) => !prevState)}
      aria-expanded={open}
      aria-label={open ? "Close menu" : "Open menu"}
    >
      <Plus className="size-4 transition-transform duration-500 group-aria-expanded:rotate-[135deg]" />
    </Button>
  );
}
