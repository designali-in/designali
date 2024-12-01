import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input21() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-21">Input with end button</Label>
      <div className="flex gap-1">
        <Input
          id="input-21"
          className="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
          placeholder="Email"
          type="email"
        />
        <Button>Send</Button>
      </div>
    </div>
  );
}
