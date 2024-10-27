// Dependencies: npm install dicons

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "dicons";

export default function Input10() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-10">Input with end icon</Label>
      <div className="relative">
        <Input
          id="input-10"
          className="pl-8"
          placeholder="Email"
          type="email"
        />
        <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <Mail className="ml-3 size-4" />
        </div>
      </div>
    </div>
  );
}
