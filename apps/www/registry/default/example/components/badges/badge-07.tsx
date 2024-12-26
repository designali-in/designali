// Dependencies: pnpm install lucide-react

import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function BadgeDemo() {
  return (
    <Badge variant="outline" className="gap-1.5">
      <Check
        className="text-emerald-500"
        size={12}
        strokeWidth={2}
        aria-hidden="true"
      />
      Badge
    </Badge>
  );
}
