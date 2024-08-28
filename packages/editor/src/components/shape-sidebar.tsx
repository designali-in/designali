import { cn } from "@designali/ui";
import { ScrollArea } from "@designali/ui/scroll-area";
import { Plus } from "dicons";

import { ActiveTool, Editor } from "../types";
import { ShapeTool } from "./shape-tool";
import { ToolSidebarClose } from "./tool-sidebar-close";
import { ToolSidebarHeader } from "./tool-sidebar-header";

interface ShapeSidebarProps {
  editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const ShapeSidebar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}: ShapeSidebarProps) => {
  const onClose = () => {
    onChangeActiveTool("select");
  };

  return (
    <aside
      className={cn(
        "relative z-[40] flex h-full w-[360px] flex-col border-r bg-white",
        activeTool === "shapes" ? "visible" : "hidden",
      )}
    >
      <ToolSidebarHeader
        title="Shapes"
        description="Add shapes to your canvas"
      />
      <ScrollArea>
        <div className="grid grid-cols-3 gap-4 p-4">
          <ShapeTool onClick={() => editor?.addCircle()} icon={Plus} />
          <ShapeTool onClick={() => editor?.addSoftRectangle()} icon={Plus} />
          <ShapeTool onClick={() => editor?.addRectangle()} icon={Plus} />
          <ShapeTool onClick={() => editor?.addTriangle()} icon={Plus} />
          <ShapeTool
            onClick={() => editor?.addInverseTriangle()}
            icon={Plus}
            iconClassName="rotate-180"
          />
          <ShapeTool onClick={() => editor?.addDiamond()} icon={Plus} />
        </div>
      </ScrollArea>
      <ToolSidebarClose onClick={onClose} />
    </aside>
  );
};
