import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxDemo() {
  return (
    <div className="flex gap-6">
      <div className="flex items-center gap-2">
        <Checkbox id="checkbox-08-a" />
        <Label htmlFor="checkbox-08-a">Photoshop</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="checkbox-08-b" />
        <Label htmlFor="checkbox-08-b">Illustrator</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="checkbox-08-c" />
        <Label htmlFor="checkbox-08-c">Canva</Label>
      </div>
    </div>
  );
}
