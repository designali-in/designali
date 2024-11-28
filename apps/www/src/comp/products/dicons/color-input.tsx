/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { ColorChangeHandler } from "react-color";
import { SketchPicker } from "react-color";
import reactCSS from "reactcss";

import { DInput } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ColorInputPropTypes {
  value: string;
  name: string;
  recentColors: string[];
  onChange: ColorChangeHandler;
  disabled?: boolean;
}

export const ColorInput = ({
  value,
  name,
  recentColors,
  onChange,
  disabled = false,
}: ColorInputPropTypes) => {
  const styles = reactCSS({
    default: {
      color: {
        background: value,
      },
    },
  });

  return (
    <div>
      <Popover>
        <div className="flex gap-2">
          <DInput
            className="hidden"
            name={name}
            type="text"
            value={value}
            readOnly
          />
          <PopoverTrigger>
            <div
              color={value}
              className="border-ali h-10 w-10 rounded-full border-2"
              style={styles.color}
            />
          </PopoverTrigger>
        </div>
        <PopoverContent className="w-[252px]">
          <div>
            <SketchPicker
              onChange={onChange}
              color={value}
              disableAlpha={true}
              presetColors={recentColors}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
