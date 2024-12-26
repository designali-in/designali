import { cn } from "@/lib/utils";
import { badgeVariants } from "@/components/ui/badge";

export default function BadgeDemo() {
  return (
    <a
      href="#"
      className={cn(
        badgeVariants({ variant: "default" }),
        "hover:bg-primary/80",
      )}
    >
      Link
    </a>
  );
}
