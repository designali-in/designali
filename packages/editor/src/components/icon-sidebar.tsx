import { FaCircle, FaSquare, FaSquareFull } from "react-icons/fa";

import { DIcons } from "../../../../packages/icons/src/dicons";
import { ActiveTool, Editor } from "../types";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "../utils";
import { IconTool } from "./icon-tool";
import { ShapeTool } from "./shape-tool";
import { ToolSidebarClose } from "./tool-sidebar-close";
import { ToolSidebarHeader } from "./tool-sidebar-header";

interface ShapeSidebarProps {
  editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const IconSidebar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}: ShapeSidebarProps) => {
  const onClose = () => onChangeActiveTool("select");

  return (
    <aside
      className={cn(
        "relative z-[40] flex h-full  w-80 flex-col ",
        activeTool === "icons"
          ? "absolute top-20 z-20 -mt-3  border-t bg-secondary p-3 "
          : "hidden",
      )}
    >
      <ToolSidebarClose onClick={onClose} />
      <ToolSidebarHeader title="Icons" description="Add icons to your canvas" />
      <ScrollArea>
        <div className="mt-3 grid  gap-2">
          <div className="flex w-full flex-wrap justify-center gap-2 ">
            {DIcons &&
              (Object.keys(DIcons) as Array<keyof typeof DIcons>).map(
                (icon) => {
                  const Component = DIcons[icon];

                  return (
                    <div
                      className="rounded-sm border p-2"
                      onClick={() => editor?.addIcon(icon)}
                    >
                      <Component
                        key={icon} // Unique key for React rendering
                        width={30}
                        height={30}
                      />
                    </div>
                  );
                },
              )}
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
};
