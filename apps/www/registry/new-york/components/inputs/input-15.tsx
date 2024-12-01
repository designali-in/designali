import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input15() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-15">Input with end add-on</Label>
      <div className="flex">
        <Input id="input-15" placeholder="google" type="text" />
        <span className="-z-10 inline-flex items-center bg-background px-3 text-sm text-muted-foreground">
          .com
        </span>
      </div>
    </div>
  );
}
