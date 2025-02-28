import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InputDemo() {
  return (
    <div className="grid">
      <div className="mb-2 flex w-full items-center justify-between gap-1">
        <Label htmlFor="input-04" className="leading-6">
          Input with hint
        </Label>
        <span className="text-sm text-muted-foreground">Optional</span>
      </div>
      <Input id="input-04" placeholder="Email" type="email" />
    </div>
  );
}
