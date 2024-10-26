/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { ColorChangeHandler } from "react-color";
import { DInput } from "@designali/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@designali/ui/popover";
import { SketchPicker } from "react-color";
import reactCSS from "reactcss";

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
            name={name}
            type="text"
            value={value}
            disabled={disabled}
            className=""
          />
          <PopoverTrigger>
            <div
              color={value}
              className="h-10 w-10 rounded-full border-2 border-ali"
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
