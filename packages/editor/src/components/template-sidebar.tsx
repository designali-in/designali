import Image from "next/image";
import { cn } from "@designali/ui";
import { ScrollArea } from "@designali/ui/scroll-area";

import { ActiveTool, Editor } from "../types";
import { ToolSidebarClose } from "./tool-sidebar-close";
import { ToolSidebarHeader } from "./tool-sidebar-header";

interface TemplateSidebarProps {
  editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const TemplateSidebar = ({
  activeTool,
  onChangeActiveTool,
}: TemplateSidebarProps) => {
  const onClose = () => {
    onChangeActiveTool("select");
  };

  return (
    <aside
      className={cn(
        "relative z-[40] flex h-full w-[360px] flex-col border-r bg-white",
        activeTool === "templates" ? "visible" : "hidden",
      )}
    >
      <ToolSidebarHeader
        title="Templates"
        description="Choose from a variety of templates to get started"
      />

      <ScrollArea>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      </ScrollArea>
      <ToolSidebarClose onClick={onClose} />
    </aside>
  );
};
