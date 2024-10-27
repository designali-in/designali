// Dependencies: npm install dicons

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Search } from "dicons";

export default function Input26() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-26">Search input with icon and button</Label>
      <div className="relative">
        <Input
          id="input-26"
          className="absolute pl-8"
          placeholder="Search..."
          type="search"
        />
        <Search className="absolute left-2 top-2.5 size-4" />
        <Button
          className="absolute right-0"
          variant="ghost"
          aria-label="Submit search"
          type="submit"
        >
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
