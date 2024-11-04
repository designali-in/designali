import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input14() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-14">Input with start add-on</Label>
      <div className="flex">
        <span className="-z-10 inline-flex items-center bg-background px-3 text-sm text-muted-foreground">
          https://
        </span>
        <Input
          id="input-14"
          className=" "
          placeholder="google.com"
          type="text"
        />
      </div>
    </div>
  );
}
