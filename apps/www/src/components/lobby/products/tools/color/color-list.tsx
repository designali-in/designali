import { FC } from "react";
 
import { ColorInfo } from "@/types/color";

import { ActiveColorBox as ColorBox } from "./colorbox";
import { InactiveColorBox } from "./disabled";

type Props = {
  colorPalette: ColorInfo[] | null;
};

const MaxPaletteSize = 5;

const ColorList: FC<Props> = ({ colorPalette }) => {
  const handleOnCopyToClipboard = (selectedColor: string): void => {
    navigator.clipboard.writeText(selectedColor ?? "");
    
  };

  const InactivePanel: FC = () => {
    const boxes = Array.from({ length: MaxPaletteSize }, (_, index) => (
      <InactiveColorBox key={index} />
    ));

    return (
      <div className="flex flex-row flex-wrap justify-around gap-2">
        {boxes}
      </div>
    );
  };

  const ActivePanel: FC = () => {
    const boxes = (colorPalette || [])
      .slice(0, MaxPaletteSize)
      .map((colorInfo, index) => (
        <ColorBox
          key={index}
          color={colorInfo.hex}
          handleOnCopyToClipboard={handleOnCopyToClipboard}
        />
      ));

    return (
      <div className="flex flex-row flex-wrap justify-around gap-2">
        {boxes}
      </div>
    );
  };

  return (
    <div className="pt-6">
      {colorPalette && colorPalette?.length > 0 ? (
        <ActivePanel />
      ) : (
        <InactivePanel />
      )}
    </div>
  );
};

export default ColorList;
