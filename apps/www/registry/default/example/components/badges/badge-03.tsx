// Dependencies: pnpm install lucide-react

import { Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function BadgeDemo() {
  return (
    <Badge className="gap-1">
      <Zap
        className="-ms-0.5 opacity-60"
        size={12}
        strokeWidth={2}
        aria-hidden="true"
      />
      Badge
    </Badge>
  );
}
