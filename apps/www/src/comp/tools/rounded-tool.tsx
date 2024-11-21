"use client";

import type { ChangeEvent } from "react";
import React, { useMemo, useState } from "react";
import { Button } from "@/registry/default/designali/ui/button";
import { Separator } from "@/registry/default/designali/ui/separator";
import { cn } from "@/src/lib/utils";
import { DIcons } from "dicons";
import { usePlausible } from "next-plausible";

import { useLocalStorage } from "@/hooks/use-local-storage";
import { Slider } from "@/components/ui/slider";

import GridPattern from "../uis/grid-pattern";

type Radius = 2 | 4 | 8 | 16 | 32 | 64;

type BackgroundOption = "white" | "black" | "transparent";

function useImageConverter(props: {
  canvas: HTMLCanvasElement | null;
  imageContent: string;
  radius: Radius;
  background: BackgroundOption;
  fileName?: string;
  imageMetadata: { width: number; height: number; name: string };
}) {
  const { width, height } = useMemo(() => {
    return {
      width: props.imageMetadata.width,
      height: props.imageMetadata.height,
    };
  }, [props.imageMetadata]);

  const convertToPng = async () => {
    const ctx = props.canvas.getContext("2d");
    if (!ctx) throw new Error("Failed to get canvas context");

    const saveImage = () => {
      if (props.canvas) {
        const dataURL = props.canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataURL;
        const imageFileName = props.imageMetadata.name ?? "image_converted";
        link.download = `${imageFileName.replace(/\..+$/, "")}.png`;
        link.click();
      }
    };

    const img = new Image();
    img.onload = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = props.background;
      ctx.fillRect(0, 0, width, height);
      ctx.beginPath();
      ctx.moveTo(props.radius, 0);
      ctx.lineTo(width - props.radius, 0);
      ctx.quadraticCurveTo(width, 0, width, props.radius);
      ctx.lineTo(width, height - props.radius);
      ctx.quadraticCurveTo(width, height, width - props.radius, height);
      ctx.lineTo(props.radius, height);
      ctx.quadraticCurveTo(0, height, 0, height - props.radius);
      ctx.lineTo(0, props.radius);
      ctx.quadraticCurveTo(0, 0, props.radius, 0);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(img, 0, 0, width, height);
      saveImage();
    };

    img.src = props.imageContent;
  };

  return {
    convertToPng,
    canvasProps: { width: width, height: height },
  };
}

export const useFileUploader = () => {
  const [imageContent, setImageContent] = useState<string>("");

  const [imageMetadata, setImageMetadata] = useState<{
    width: number;
    height: number;
    name: string;
  } | null>(null);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result as string;
        const img = new Image();
        img.onload = () => {
          setImageMetadata({
            width: img.width,
            height: img.height,
            name: file.name,
          });
          setImageContent(content);
        };
        img.src = content;
      };
      reader.readAsDataURL(file);
    }
  };

  const cancel = () => {
    setImageContent("");
    setImageMetadata(null);
  };

  return { imageContent, imageMetadata, handleFileUpload, cancel };
};

interface ImageRendererProps {
  imageContent: string;
  radius: Radius;
  background: BackgroundOption;
}

const ImageRenderer: React.FC<ImageRendererProps> = ({
  imageContent,
  radius,
  background,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (containerRef.current) {
      const imgElement = containerRef.current.querySelector("img");
      if (imgElement) {
        imgElement.style.borderRadius = `${radius}px`;
      }
    }
  }, [imageContent, radius]);

  return (
    <div ref={containerRef} className="relative mx-auto h-full max-w-xl">
      <GridPattern
        width={9}
        height={9}
        x={-1}
        y={-1}
        strokeDasharray={"1 1"}
        className={cn("-z-10")}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: background, borderRadius: 0 }}
      />
      <img
        src={imageContent}
        alt="Preview"
        className="relative rounded-lg border"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

function SaveAsPngButton({
  imageContent,
  radius,
  background,
  imageMetadata,
}: {
  imageContent: string;
  radius: Radius;
  background: BackgroundOption;
  imageMetadata: { width: number; height: number; name: string };
}) {
  const [canvasRef, setCanvasRef] = React.useState<HTMLCanvasElement | null>(
    null,
  );
  const { convertToPng, canvasProps } = useImageConverter({
    canvas: canvasRef,
    imageContent,
    radius,
    background,
    imageMetadata,
  });

  const plausible = usePlausible();

  return (
    <div>
      <canvas ref={setCanvasRef} {...canvasProps} hidden />
      <button
        onClick={() => {
          plausible("convert-image-to-png");
          void convertToPng();
        }}
        className="rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white shadow-md transition-colors duration-200 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
      >
        Save as PNG
      </button>
    </div>
  );
}

export function RoundedTool() {
  const { imageContent, imageMetadata, handleFileUpload, cancel } =
    useFileUploader();

  const [radius, setRadius] = useLocalStorage<Radius>("roundedTool_radius", 2);
  const [background, setBackground] = useLocalStorage<BackgroundOption>(
    "roundedTool_background",
    "transparent",
  );

  if (!imageMetadata)
    return (
      <div className="mt-10 flex flex-col   gap-4">
        <div className="flex justify-center">
          <label className="flex cursor-pointer flex-col items-center gap-2 rounded-lg border border-dashed p-24 transition-colors duration-300 hover:bg-muted">
            <DIcons.Image strokeWidth={1} className="h-16 w-16" />
            <input
              type="file"
              onChange={handleFileUpload}
              accept="image/*"
              className="hidden"
            />
            <p className="text-center text-xs text-slate-600 dark:text-slate-400">
              Round the corners of any image.
              <br /> Drag some images here, or click to select files.
            </p>
          </label>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 text-2xl">
      <div className="relative">
        <div className="relative mx-auto flex h-auto w-auto max-w-3xl justify-center border">
          <GridPattern
            width={9}
            height={9}
            x={-1}
            y={-1}
            strokeDasharray={"1 1"}
            className={cn("")}
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
          <div className="z-10">
            <ImageRenderer
              imageContent={imageContent}
              radius={radius}
              background={background}
            />
          </div>
        </div>
      </div>
      <p className="text-xs text-primary/50">{imageMetadata.name}</p>
      <p className="text-lg  ">
        Original size: {imageMetadata.width}px x {imageMetadata.height}px
      </p>
      <Separator className="mx-auto my-6 max-w-lg" />
      <div className="flex gap-2">
        <p>Radius</p>
        <Slider
          defaultValue={[64]}
          max={256}
          min={0}
          step={10}
          onValueChange={(value) => {
            setRadius(value[0] as Radius);
          }}
          name="radius"
          value={[radius]}
          className="w-[200px]"
        />
        {radius}px
      </div>

      <div className="flex gap-2">
        {(["white", "black", "transparent"] as BackgroundOption[]).map(
          (option) => (
            <Button
              key={option}
              onClick={() => setBackground(option)}
              className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
                background === option
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </Button>
          ),
        )}
      </div>
      <div className="flex gap-2">
        <SaveAsPngButton
          imageContent={imageContent}
          radius={radius}
          background={background}
          imageMetadata={imageMetadata}
        />
        <button
          onClick={cancel}
          className="rounded-md bg-red-700 px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-red-800"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
