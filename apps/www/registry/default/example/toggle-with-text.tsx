import { Toggle } from "@/registry/default/ui/toggle";
import { Italic } from "lucide-react";

export default function ToggleWithText() {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic />
      Italic
    </Toggle>
  );
}
