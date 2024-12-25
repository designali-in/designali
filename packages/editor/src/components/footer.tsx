import { Minimize, ZoomIn, ZoomOut } from "lucide-react";

import { Hint } from "../hint";
import { Editor } from "../types";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";

interface FooterProps {
  editor: Editor | undefined;
}

export const Footer = ({ editor }: FooterProps) => {
  return (
    <footer className="flex items-center gap-x-1 ">
      <Hint label="Reset" side="top" sideOffset={10}>
        <Button onClick={() => editor?.autoZoom()} size="icon" variant="ghost">
          <Minimize className="size-3" />
        </Button>
      </Hint>
      <Hint label="Zoom out" side="top" sideOffset={10}>
        <Button onClick={() => editor?.zoomOut()} size="icon" variant="ghost">
          <ZoomOut className="size-4" />
        </Button>
      </Hint>
      <Slider
        className="w-40"
        defaultValue={[500]}
        max={1000}
        min={100}
        step={10}
        onClick={() => editor?.autoZoom()}
      />
      <Hint label="Zoom in" side="top" sideOffset={10}>
        <Button onClick={() => editor?.zoomIn()} size="icon" variant="ghost">
          <ZoomIn className="size-4" />
        </Button>
      </Hint>
    </footer>
  );
};
