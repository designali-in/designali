// Dependencies: npm install dicons

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "dicons";

export default function Input17() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-17">Input with start select</Label>
      <div className="flex">
        <div className="relative">
          <select
            className="inline-flex h-full appearance-none items-center rounded-md border border-input bg-background px-3 text-sm text-muted-foreground ring-offset-background transition-shadow hover:bg-accent hover:text-foreground focus:z-10 focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Protocol"
          >
            <option value="https://">https://</option>
            <option value="http://">http://</option>
            <option value="ftp://">ftp://</option>
            <option value="sftp://">sftp://</option>
            <option value="ws://">ws://</option>
            <option value="wss://">wss://</option>
          </select>
        </div>
        <Input
          id="input-17"
          className="-ms-px rounded-s-none shadow-none focus-visible:z-10"
          placeholder="192.168.1.1"
          type="text"
        />
      </div>
    </div>
  );
}
