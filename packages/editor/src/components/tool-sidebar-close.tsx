import { DIcons } from "dicons";
import { ChevronsLeft } from "lucide-react";

import { Button } from "../ui/button";

interface ToolSidebarCloseProps {
  onClick: () => void;
}

export const ToolSidebarClose = ({ onClick }: ToolSidebarCloseProps) => {
  return (
    <Button
      onClick={onClick}
      variant="outline"
      size="icon"
      className="absolute right-3 h-6 w-6"
    >
      <DIcons.Close className="h-4 w-4 " />
    </Button>
  );
};
