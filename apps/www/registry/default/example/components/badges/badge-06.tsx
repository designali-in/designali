import { Badge } from "@/components/ui/badge";

export default function BadgeDemo() {
  return (
    <Badge className="items-baseline gap-1">
      Badge
      <span className="text-[0.5rem] font-medium text-primary-foreground/60">
        73
      </span>
    </Badge>
  );
}
