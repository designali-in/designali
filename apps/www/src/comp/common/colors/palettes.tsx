import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { colord } from "colord";
import { AnimatePresence, motion, Reorder } from "framer-motion";
import ReactGPicker from "react-gcolor-picker";

import { handleColorTextClass } from "@/lib/utils";
import { useClickOutside } from "@/hooks/use-click-outside";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Options from "./options";
import { columnChildVariant, columVariant } from "./variant";

export default function Palette({
  color,
  colors,
  lockedHexes,
  colorIndex,
  setLockedHexes,
}: {
  color: string;
  colors: string[];
  lockedHexes: string[];
  colorIndex: number;
  setLockedHexes: (value: string[]) => void;
}) {
  const [draggable, setDraggable] = useState(false);

  const [colorInstance, setColorInstance] = useState(`#${color}`);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleColorName = (colorHex: string) => {
    return colord(colorHex).toName({ closest: true });
  };

  const handleToggleHex = (hex: string) => {
    if (lockedHexes.includes(hex)) {
      // If the hex is already locked, unlock it
      setLockedHexes(lockedHexes.filter((h) => h !== hex));
    } else {
      // Otherwise, lock it
      setLockedHexes([...lockedHexes, hex]);
    }
  };

  const [showColorPicker, setShowColorPicker] = useState(false);
  const [newColorPalettes, setNewColorPalettes] = useState<string[]>([]);

  const handlesetColor = (color: string, index: number) => {
    console.log(color);

    if (!color) {
      setNewColorPalettes(["fff", "ddd"]);
    }

    const newColor = color.replace(/^#/, "");

    console.log(newColor);
    if (newColor) {
      const newColors = [...colors];

      newColors[index] = newColor;

      console.log(newColors);

      setNewColorPalettes(newColors);
    }

    setColorInstance(color);
  };

  const navigate = useRouter();

  // click outside color picker
  const onClickOutside = () => {
    console.log(newColorPalettes);

    // replace route if newcolorpalettes is selected
    if (newColorPalettes.length) {
      const newRoute = newColorPalettes.join("-");

      console.log(newRoute);
      navigate.replace(`/colors/${newRoute}`);
    }

    setShowColorPicker(false);
  };

  const clickRef = useClickOutside(onClickOutside);

  const colorName = handleColorName(colorInstance);
  const colorTextLumi = handleColorTextClass(colorInstance);

  return (
    <Reorder.Item
      value={color}
      key={color}
      initial={"start"}
      dragListener={draggable}
      onDragEnd={() => setDraggable(false)}
      variants={columVariant}
      whileHover={"show"}
      className="relative flex h-[120px] w-full flex-row-reverse items-center justify-center px-6 md:h-[550px]"
      style={{
        backgroundColor: `${colorInstance}`,
      }}
    >
      {isDesktop ? (
        <motion.div variants={columnChildVariant} className="">
          <Options
            toogleHex={handleToggleHex}
            lockedHexes={lockedHexes}
            color={colorInstance}
            setDraggable={setDraggable}
          />
        </motion.div>
      ) : (
        <Options
          toogleHex={handleToggleHex}
          lockedHexes={lockedHexes}
          color={colorInstance}
          setDraggable={setDraggable}
        />
      )}

      {showColorPicker ? (
        <div className=" absolute z-50 rounded-3xl p-2   " ref={clickRef}>
          <ReactGPicker
            value={colorInstance}
            onChange={(value) => handlesetColor(value, colorIndex)}
            showAlpha={false}
            gradient={false}
            format="hex"
          />
        </div>
      ) : (
        ""
      )}

      <div
        className={`static bottom-16 left-0 flex  lg:absolute
${colorTextLumi === "white" ? "text-white" : "text-black "}
mb-1 w-full flex-col lg:items-center`}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <h3
                className={` cursor-pointer  text-left text-xl font-semibold uppercase lg:text-[30px]
`}
                onClick={() => setShowColorPicker(true)}
              >
                {colorInstance.replace(/^#/, "")}

                <br />
              </h3>
            </TooltipTrigger>

            <TooltipContent>Select color</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <p className={`inset-0 mt-[9px] text-[11px] capitalize opacity-[0.5] `}>
          ~{colorName}
        </p>
      </div>
    </Reorder.Item>
  );
}
