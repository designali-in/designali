import type { DIcon } from "dicons";
import type { LucideIcon } from "lucide-react";

import { cn } from "../utils";

interface ShapeToolProps {
  onClick: () => void;
  icon: LucideIcon | DIcon;
  iconClassName?: string;
}

export const IconTool = ({
  onClick,
  icon: Icon,
  iconClassName,
}: ShapeToolProps) => {
  return (
    <button onClick={onClick} className="aspect-square rounded-md border p-5">
      <Icon className={cn("h-full w-full", iconClassName)} />
    </button>
  );
};
