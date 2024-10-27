"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "dicons";

export default function Button23() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Button
      className="group"
      variant="outline"
      size="icon"
      onClick={() => setOpen((prevState) => !prevState)}
      aria-expanded={open}
      aria-label={open ? "Close menu" : "Open menu"}
    >
      <Menu className="size-4" />
    </Button>
  );
}
