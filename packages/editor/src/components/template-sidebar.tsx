import Image from "next/image";
import { AlertTriangle, Crown, Loader } from "lucide-react";

import { ActiveTool, Editor } from "../types";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "../utils";
import { ToolSidebarClose } from "./tool-sidebar-close";
import { ToolSidebarHeader } from "./tool-sidebar-header";

interface TemplateSidebarProps {
  editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const TemplateSidebar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}: TemplateSidebarProps) => {
  const onClose = () => {
    onChangeActiveTool("select");
  };
  return (
    <aside
      className={cn(
        "relative z-[40] flex h-full w-80 flex-col  ",
        activeTool === "templates"
          ? "absolute top-20 z-20 -mt-3 border-t bg-secondary p-3 "
          : "hidden",
      )}
    >
      <ToolSidebarClose onClick={onClose} />
      <ToolSidebarHeader
        title="Templates"
        description="Choose from a variety of templates to get started"
      />

      <ScrollArea>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">Coming Soon</div>
        </div>
      </ScrollArea>
    </aside>
  );
};
