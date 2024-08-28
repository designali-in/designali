import type { DesignaliIcon } from "dicons";
import type { LucideIcon } from "lucide-react";
import { cn } from "@designali/ui";

interface ShapeToolProps {
  onClick: () => void;
  icon: LucideIcon | DesignaliIcon;
  iconClassName?: string;
}

export const ShapeTool = ({
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
