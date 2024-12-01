"use client";

import type { ChangeEvent } from "react";
import React, { useMemo, useState } from "react";
import { cn } from "@/src/lib/utils";
import { DIcons } from "dicons";
import { usePlausible } from "next-plausible";

import { useLocalStorage } from "@/hooks/use-local-storage";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import GridPattern from "../uis/grid-pattern";

type Scale = 1 | 2 | 4 | 8 | 16 | 32 | 64;

function scaleSvg(svgContent: string, scale: Scale) {
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(svgContent, "image/svg+xml");
  const svgElement = svgDoc.documentElement;
  const width = parseInt(svgElement.getAttribute("width") ?? "300");
  const height = parseInt(svgElement.getAttribute("height") ?? "150");

  const scaledWidth = width * scale;
  const scaledHeight = height * scale;

  svgElement.setAttribute("width", scaledWidth.toString());
  svgElement.setAttribute("height", scaledHeight.toString());

  return new XMLSerializer().serializeToString(svgDoc);
}

function useSvgConverter(props: {
  canvas: HTMLCanvasElement | null;
  svgContent: string;
  scale: Scale;
  fileName?: string;
  imageMetadata: { width: number; height: number; name: string };
}) {
  const { width, height, scaledSvg } = useMemo(() => {
    const scaledSvg = scaleSvg(props.svgContent, props.scale);

    return {
      width: props.imageMetadata.width * props.scale,
      height: props.imageMetadata.height * props.scale,
      scaledSvg,
    };
  }, [props.svgContent, props.scale, props.imageMetadata]);

  const convertToPng = async () => {
    const ctx = props.canvas.getContext("2d");
    if (!ctx) throw new Error("Failed to get canvas context");

    // Trigger a "save image" of the resulting canvas content
    const saveImage = () => {
      if (props.canvas) {
        const dataURL = props.canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataURL;
        const svgFileName = props.imageMetadata.name ?? "svg_converted";

        // Remove the .svg extension
        link.download = `${svgFileName.replace(".svg", "")}-${props.scale}x.png`;
        link.click();
      }
    };

    const img = new Image();
    // Call saveImage after the image has been drawn
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      saveImage();
    };

    img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(scaledSvg)}`;
  };

  return {
    convertToPng,
    canvasProps: { width: width, height: height },
  };
}

export const useFileUploader = () => {
  const [svgContent, setSvgContent] = useState<string>("");

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

        // Extract width and height from SVG content
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(content, "image/svg+xml");
        const svgElement = svgDoc.documentElement;
        const width = parseInt(svgElement.getAttribute("width") ?? "300");
        const height = parseInt(svgElement.getAttribute("height") ?? "150");

        setSvgContent(content);
        setImageMetadata({ width, height, name: file.name });
      };
      reader.readAsText(file);
    }
  };

  const cancel = () => {
    setSvgContent("");
    setImageMetadata(null);
  };

  return { svgContent, imageMetadata, handleFileUpload, cancel };
};

interface SVGRendererProps {
  svgContent: string;
}

const SVGRenderer: React.FC<SVGRendererProps> = ({ svgContent }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = svgContent;
      const svgElement = containerRef.current.querySelector("svg");
      if (svgElement) {
        svgElement.setAttribute("width", "100%");
        svgElement.setAttribute("height", "auto");
      }
    }
  }, [svgContent]);

  return <div ref={containerRef} />;
};

function SaveAsPngButton({
  svgContent,
  scale,
  imageMetadata,
}: {
  svgContent: string;
  scale: Scale;
  imageMetadata: { width: number; height: number; name: string };
}) {
  const [canvasRef, setCanvasRef] = React.useState<HTMLCanvasElement | null>(
    null,
  );
  const { convertToPng, canvasProps } = useSvgConverter({
    canvas: canvasRef,
    svgContent,
    scale,
    imageMetadata,
  });

  const plausible = usePlausible();

  return (
    <div>
      <canvas ref={setCanvasRef} {...canvasProps} hidden />

      <Button
        variant="success"
        onClick={() => {
          plausible("convert-svg-to-png");
          void convertToPng();
        }}
      >
        Save as PNG
      </Button>
    </div>
  );
}

export function SVGTool() {
  const { svgContent, imageMetadata, handleFileUpload, cancel } =
    useFileUploader();

  const [scale, setScale] = useLocalStorage<Scale>("svgTool_scale", 1);

  if (!imageMetadata)
    return (
      <div className="flex flex-col gap-4 ">
        <div
          id="svg-to-png"
          className="mx-auto  mt-10 flex max-w-5xl flex-col items-center justify-center"
        >
          <label className="flex cursor-pointer flex-col items-center gap-2 rounded-lg border border-dashed p-24 transition-colors duration-300 hover:bg-muted">
            <DIcons.Image strokeWidth={1} className="h-16 w-16" />
            <input
              type="file"
              onChange={handleFileUpload}
              accept=".svg"
              className="hidden"
            />
            <p className="text-center text-xs text-slate-600 dark:text-slate-400">
              Make SVGs into PNGs. Also makes them bigger.
              <br /> Drag some images here, or click to select files.
            </p>
          </label>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 text-2xl">
      <div className="relative">
        <div className="relative mx-auto flex h-full w-full max-w-4xl justify-center border">
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
          <div className="z-10 h-[250px] w-[250px] md:h-[450px] md:w-[450px]">
            <SVGRenderer svgContent={svgContent} />
          </div>
        </div>
      </div>

      <p className="text-xs text-primary/50">{imageMetadata.name}</p>
      <p className="text-lg  ">
        Original size: {imageMetadata.width}px x {imageMetadata.height}px
      </p>
      <p className="text-2xl">
        Scaled size: {imageMetadata.width * scale}px x{" "}
        {imageMetadata.height * scale}px
      </p>
      <Separator className="mx-auto my-6 max-w-lg" />
      <div className="flex gap-2">
        {([1, 2, 4, 8, 16, 32, 64] as Scale[]).map((value) => (
          <Button
            key={value}
            variant="success"
            onClick={() => setScale(value)}
            className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
              scale === value
                ? "bg-violet-500 text-white"
                : "bg-slate-100 text-slate-900 hover:bg-muted/50 "
            }`}
          >
            {value}x
          </Button>
        ))}
      </div>
      <div className="flex gap-2">
        <SaveAsPngButton
          svgContent={svgContent}
          scale={scale}
          imageMetadata={imageMetadata}
        />
        <Button variant="destructive" onClick={cancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
