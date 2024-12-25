import Image from "next/image";
import Link from "next/link";

import { ActiveTool, Editor } from "../types";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "../utils";
import { ToolSidebarClose } from "./tool-sidebar-close";
import { ToolSidebarHeader } from "./tool-sidebar-header";

interface ImageSidebarProps {
  editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const ImageSidebar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}: ImageSidebarProps) => {
  const onClose = () => {
    onChangeActiveTool("select");
  };

  return (
    <aside
      className={cn(
        "relative z-[40] flex h-full w-[360px] flex-col ",
        activeTool === "images"
          ? "absolute top-20 z-20 -mt-3 border-t bg-secondary p-3 "
          : "hidden",
      )}
    >
      <ToolSidebarClose onClick={onClose} />
      <ToolSidebarHeader
        title="Images"
        description="Add images to your canvas"
      />

      <ScrollArea>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">Coming Soon</div>
        </div>
      </ScrollArea>
    </aside>
  );
};
