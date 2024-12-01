import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input11() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-11">Input with start inline add-on</Label>
      <div className="relative">
        <Input
          id="input-11"
          className="pl-12"
          placeholder="    google.com"
          type="text"
        />
        <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center px-3 text-sm text-muted-foreground">
          https://
        </span>
      </div>
    </div>
  );
}
