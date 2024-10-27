// Dependencies: npm install dicons

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download } from "dicons";

export default function Input20() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-20">Input with end icon button</Label>
      <div className="flex gap-1">
        <Input
          id="input-20"
          className="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
          placeholder="Email"
          type="email"
        />
        <Button size="icon">
          <Download className="size-4" />
        </Button>
      </div>
    </div>
  );
}
