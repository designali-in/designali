// Dependencies: npm install lucide-react

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input18() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-18">Input with end select</Label>
      <div className="flex">
        <Input
          id="input-18"
          className="-me-px rounded-e-none shadow-none focus-visible:z-10"
          placeholder="google"
          type="text"
        />
        <div className="relative">
          <select
            className="peer inline-flex h-full appearance-none items-center rounded-md border border-input bg-background px-3 text-sm text-muted-foreground ring-offset-background transition-shadow hover:bg-accent hover:text-foreground focus:z-10 focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Domain suffix"
          >
            <option>.com</option>
            <option>.org</option>
            <option>.net</option>
          </select>
        </div>
      </div>
    </div>
  );
}
