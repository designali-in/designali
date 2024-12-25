import type { LucideIcon } from "lucide-react";

import { Button } from "../ui/button";
import { cn } from "../utils";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

export const SidebarItem = ({
  icon: Icon,
  label,
  isActive,
  onClick,
}: SidebarItemProps) => {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={cn("p-2", isActive && "bg-secondary text-primary")}
    >
      <Icon className="size-4" />
      <span className="text-xs">{label}</span>
    </Button>
  );
};
