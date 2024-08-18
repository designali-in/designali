import type { ColorChangeHandler } from "react-color";
import { Input } from "@designali/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@designali/ui/popover";
import { SketchPicker } from "react-color";

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
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Input
            name={name}
            type="text"
            value={value}
            disabled={disabled}
            className="w-[120px]"
          ></Input>
        </PopoverTrigger>
        <PopoverContent>
          <div className="">
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
