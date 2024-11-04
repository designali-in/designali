// Dependencies: npm install dicons

import { Send } from "dicons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input19() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-19">Input with end inline button</Label>
      <div className="relative">
        <Input
          id="input-19"
          className="absolute"
          placeholder="Email"
          type="email"
        />
        <Button variant="ghost" size="icon" className="absolute right-2">
          <Send className="size-4" />
        </Button>
      </div>
    </div>
  );
}
