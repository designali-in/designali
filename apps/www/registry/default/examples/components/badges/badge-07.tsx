// Dependencies: pnpm install lucide-react

import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function BadgeDemo() {
  return (
    <Badge variant="outline" className="gap-1">
      <Check
        className="text-emerald-500"
        size={12}
        strokeWidth={1}
        aria-hidden="true"
      />
      Badge
    </Badge>
  );
}
