"use client";

import type { Canvas } from "fabric";
import type { Accept } from "react-dropzone";
import React from "react";
import { Separator } from "@/registry/default/ui/separator";
import { DIcons } from "dicons";
import { HexColorPicker } from "react-colorful";
import { useDropzone } from "react-dropzone";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ToolbarProps {
  setBackgroundImage: (imageUrl: string) => Promise<Canvas | null>;
  addText: () => void;
  addChillGuy: () => void;
  flipImage: (direction: "horizontal" | "vertical") => void;
  deleteSelectedObject: () => void;
  downloadCanvas: () => void;
  changeBackgroundColor: (color: string) => void;
  currentBackgroundColor: string;
}

export function Toolbar({
  setBackgroundImage,
  addText,
  addChillGuy,
  flipImage,
  deleteSelectedObject,
  downloadCanvas,
  changeBackgroundColor,
  currentBackgroundColor,
}: ToolbarProps) {
  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const dataUrl = URL.createObjectURL(acceptedFiles[0]);
        setBackgroundImage(dataUrl).catch((error) => {
          console.error("Error setting background image:", error);
        });
      }
    },
    [setBackgroundImage],
  );

  const accept: Accept = {
    "image/*": [".jpg", ".jpeg", ".png", , ".svg"],
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    maxFiles: 1,
  });

  return (
    <div className=" ">
      <div className="no-scrollbar w-full overflow-x-auto rounded-full border bg-popover sm:overflow-visible">
        <div className="flex items-center space-x-2 p-2 text-2xl md:justify-center">
          <Button
            {...getRootProps()}
            variant="outline"
            size={"icon"}
            className=" shrink-0 rounded-full"
          >
            <input {...getInputProps()} />
            <DIcons.Upload className="size-4" />
          </Button>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size={"icon"}
                className=" shrink-0 rounded-full "
                style={{ backgroundColor: currentBackgroundColor }}
              ></Button>
            </PopoverTrigger>
            <PopoverContent
              className="mt-3 w-fit rounded-lg bg-transparent p-0"
              align="start"
            >
              <HexColorPicker
                color={currentBackgroundColor}
                onChange={(color: string) => {
                  return changeBackgroundColor(color);
                }}
              />
            </PopoverContent>
          </Popover>

          <Button
            onClick={addChillGuy}
            variant="outline"
            size={"icon"}
            className=" shrink-0 rounded-full"
          >
            <DIcons.Image className="size-4" />
          </Button>
          <Button
            onClick={() => flipImage("horizontal")}
            variant="outline"
            size={"icon"}
            className=" shrink-0 rounded-full"
          >
            <DIcons.FlipHorizontal className="size-4" />
          </Button>

          <Button
            onClick={addText}
            variant="outline"
            size={"icon"}
            className=" shrink-0 rounded-full"
          >
            <DIcons.Text className="size-4" />
          </Button>

          <Button
            onClick={deleteSelectedObject}
            variant="outline"
            size={"icon"}
            className=" shrink-0 rounded-full"
          >
            <DIcons.Trash className="size-4 text-red-600" />
          </Button>

          <Button
            onClick={downloadCanvas}
            variant="outline"
            size={"icon"}
            className=" shrink-0 rounded-full"
          >
            <DIcons.Download className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
