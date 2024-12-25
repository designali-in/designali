import { useEffect, useMemo, useState } from "react";

import { ActiveTool, Editor } from "../types";
import { ScrollArea } from "../ui/scroll-area";
import { Slider } from "../ui/slider";
import { cn } from "../utils";
import { ToolSidebarClose } from "./tool-sidebar-close";
import { ToolSidebarHeader } from "./tool-sidebar-header";

interface OpacitySidebarProps {
  editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const OpacitySidebar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}: OpacitySidebarProps) => {
  const initialValue = editor?.getActiveOpacity() || 1;
  const selectedObject = useMemo(
    () => editor?.selectedObjects[0],
    [editor?.selectedObjects],
  );

  const [opacity, setOpacity] = useState(initialValue);

  useEffect(() => {
    if (selectedObject) {
      setOpacity(selectedObject.get("opacity") || 1);
    }
  }, [selectedObject]);

  const onClose = () => {
    onChangeActiveTool("select");
  };

  const onChange = (value: number) => {
    editor?.changeOpacity(value);
    setOpacity(value);
  };

  return (
    <aside
      className={cn(
        "relative z-[40] flex h-full w-auto flex-col  ",
        activeTool === "opacity"
          ? "absolute top-20 z-20 -mt-3 border-t bg-secondary p-3 "
          : "hidden",
      )}
    >
      <ToolSidebarClose onClick={onClose} />
      <ToolSidebarHeader
        title="Opacity"
        description="Change the opacity of the selected object"
      />

      <div className="mt-3 space-y-4  ">
        <Slider
          value={[opacity]}
          onValueChange={(values) => {
            if (values[0] !== undefined) {
              onChange(values[0]);
            }
          }}
          max={1}
          min={0}
          step={0.01}
        />
      </div>
    </aside>
  );
};
