import React from "react";
import { useParams, useRouter } from "next/navigation";
import { DIcons } from "dicons";

import { handleColorTextClass } from "@/lib/utils";
import useCopy from "@/hooks/use-copy";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "@/components/ui/use-toast";

export default function Options({
  color,
  setDraggable,
}: {
  color: string;
  toogleHex: (color: string) => void;
  lockedHexes: string[];
  setDraggable: (value: boolean) => void;
}) {
  const currentColor =
    handleColorTextClass(color) === "white" ? "white" : "black";

  const router = useRouter();

  const { copy } = useCopy();

  const { slug } = useParams<{ slug: string }>();

  const handleRemoveColor = (colorToRemove: string) => {
    const colors = slug.split("-");
    const updatedColors = colors.filter(
      (c) => c !== colorToRemove.replace(/^#/, ""),
    );

    console.log(updatedColors);

    const newRoute = updatedColors.join("-");

    router.replace(newRoute);
  };

  const handleHexCopy = (color: string) => {
    copy(color);
    toast({
      title: "Color copied to the clipboard!",
    });
  };
  return (
    <div
      className="flex flex-row items-center space-x-4 space-y-0 lg:flex-col lg:space-x-0  
       lg:space-y-4"
    >
      {slug.split("-").length > 2 && (
        <div onClick={() => handleRemoveColor(color)}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <DIcons.Trash2
                  strokeWidth={1}
                  color={currentColor}
                  className="h-4 w-4"
                />
              </TooltipTrigger>

              <TooltipContent>Remove</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )}

      <div onClick={() => handleHexCopy(color)} className="">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <DIcons.Copy
                strokeWidth={1}
                color={currentColor}
                className="h-4 w-4"
              />
            </TooltipTrigger>

            <TooltipContent>Copy Hex</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div
        onMouseEnter={() => setDraggable(true)}
        onMouseLeave={() => setDraggable(false)} // retain this for better animation
        onTouchStart={() => setDraggable(true)}
        className=""
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <DIcons.Hand
                strokeWidth={1}
                color={currentColor}
                className="h-4 w-4"
              />
            </TooltipTrigger>

            <TooltipContent>Drag</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
