// Dependencies: pnpm install lucide-react

import { Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function BadgeDemo() {
  return (
    <Badge className="gap-1">
      <Zap className="-ms-0.5" size={8} strokeWidth={1} aria-hidden="true" />
      Badge
    </Badge>
  );
}
