import { Badge } from "@/components/ui/badge";

export default function BadgeDemo() {
  return (
    <Badge variant="outline" className="gap-1.5">
      <span
        className="size-1.5 rounded-full bg-red-500"
        aria-hidden="true"
      ></span>
      Badge
    </Badge>
  );
}
