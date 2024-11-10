"use client";

import type { ChangeEvent } from "react";
import React, { useEffect, useState } from "react";
import { Button } from "@/registry/default/designali/ui/button";
import { cn } from "@/src/lib/utils";
import { DIcons } from "dicons";
import { usePlausible } from "next-plausible";

import { useLocalStorage } from "@/hooks/use-local-storage";

import { GridPattern } from "../uis/grid-pattern";

export const SquareTool: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [backgroundColor, setBackgroundColor] = useLocalStorage<
    "black" | "white"
  >("squareTool_backgroundColor", "white");

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [canvasDataUrl, setCanvasDataUrl] = useState<string | null>(null);
  const [imageMetadata, setImageMetadata] = useState<{
    width: number;
    height: number;
    name: string;
  } | null>(null);
  const plausible = usePlausible();

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      setImageMetadata({ width: 0, height: 0, name: file.name });
    }
  };

  const handleBackgroundColorChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const color = event.target.value as "black" | "white";
    setBackgroundColor(color);
  };

  const handleSaveImage = () => {
    if (canvasDataUrl && imageMetadata) {
      const link = document.createElement("a");
      link.href = canvasDataUrl;
      const originalFileName = imageMetadata.name;
      const fileNameWithoutExtension =
        originalFileName.substring(0, originalFileName.lastIndexOf(".")) ||
        originalFileName;
      link.download = `${fileNameWithoutExtension}-squared.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  useEffect(() => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          const maxDim = Math.max(img.width, img.height);
          setImageMetadata((prevState) => ({
            ...prevState,
            width: img.width,
            height: img.height,
          }));

          const canvas = document.createElement("canvas");
          canvas.width = maxDim;
          canvas.height = maxDim;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            const x = (maxDim - img.width) / 2;
            const y = (maxDim - img.height) / 2;
            ctx.drawImage(img, x, y);
            const dataUrl = canvas.toDataURL("image/png");
            setCanvasDataUrl(dataUrl);

            // Create a smaller canvas for the preview
            const previewCanvas = document.createElement("canvas");
            const previewSize = 200; // Set desired preview size
            previewCanvas.width = previewSize;
            previewCanvas.height = previewSize;
            const previewCtx = previewCanvas.getContext("2d");
            if (previewCtx) {
              previewCtx.drawImage(
                canvas,
                0,
                0,
                canvas.width,
                canvas.height,
                0,
                0,
                previewSize,
                previewSize,
              );
              const previewDataUrl = previewCanvas.toDataURL("image/png");
              setPreviewUrl(previewDataUrl);
            }
          }
        };
        if (typeof reader.result === "string") {
          img.src = reader.result;
        }
      };
      reader.readAsDataURL(imageFile);
    } else {
      setPreviewUrl(null);
      setCanvasDataUrl(null);
      setImageMetadata(null);
    }
  }, [imageFile, backgroundColor]);

  if (!imageMetadata) {
    return (
      <div className="mt-10 flex flex-col   gap-4">
        <div className="flex justify-center">
          <label className="flex cursor-pointer flex-col items-center gap-2 rounded-lg border border-dashed p-24 transition-colors duration-300 hover:bg-muted">
            <DIcons.Image strokeWidth={1} className="h-16 w-16" />
            <input
              type="file"
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
            <p className="text-center text-xs text-slate-600 dark:text-slate-400">
              Create square images with custom backgrounds. Fast and free.
              <br /> Drag some images here, or click to select files.
            </p>
          </label>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 text-2xl">
      <div className="relative">
        <div className="relative  flex aspect-square justify-center border">
          <GridPattern
            width={9}
            height={9}
            x={-1}
            y={-1}
            strokeDasharray={"1 1"}
            className={cn("-z-10")}
          />
          <DIcons.Plus
            strokeWidth={1}
            className="text-ali absolute -left-3 -top-3 h-6"
          />
          <DIcons.Plus
            strokeWidth={1}
            className="text-ali absolute -bottom-3 -left-3 h-6"
          />
          <DIcons.Plus
            strokeWidth={1}
            className="text-ali absolute -right-3 -top-3 h-6"
          />
          <DIcons.Plus
            strokeWidth={1}
            className="text-ali absolute -bottom-3 -right-3 h-6"
          />
          {previewUrl && (
            <img src={previewUrl} alt="Preview" className=" p-4" />
          )}
        </div>
      </div>
      <p className="text-xs text-primary/50">{imageMetadata.name}</p>
      <p className="text-lg  ">
        Original size: {imageMetadata.width}px x {imageMetadata.height}px
      </p>

      <p className="text-2xl">
        Square size: {Math.max(imageMetadata.width, imageMetadata.height)}px x{" "}
        {Math.max(imageMetadata.width, imageMetadata.height)}px
      </p>

      <div className="flex gap-2">
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="white"
            checked={backgroundColor === "white"}
            onChange={handleBackgroundColorChange}
            className="form-radio text-blue-600"
          />
          <span className="ml-2">White Background</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="black"
            checked={backgroundColor === "black"}
            onChange={handleBackgroundColorChange}
            className="form-radio text-blue-600"
          />
          <span className="ml-2">Black Background</span>
        </label>
      </div>

      <div className="flex gap-2">
        <Button
          variant="success"
          onClick={() => {
            plausible("create-square-image");
            handleSaveImage();
          }}
        >
          Save Image
        </Button>
        <Button
          variant="destructive"
          onClick={() => {
            setImageFile(null);
            setPreviewUrl(null);
            setCanvasDataUrl(null);
            setImageMetadata(null);
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};
