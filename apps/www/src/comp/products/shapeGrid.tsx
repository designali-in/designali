/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import React, { useEffect, useRef, useState } from "react";
import copy from "copy-to-clipboard";
import { DIcons } from "dicons";
import { renderToString } from "react-dom/server";

import {
  convertToCamelCase,
  encodeImage,
  getImageData,
  loadImage,
  svgBase64,
  unit8toPng,
} from "@/lib/helpers";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/toaster";

import { CopyButton } from "../uis/copy-button";
import ShapeRenderer from "./shape-renderer";

export default function ShapeGrid({ type, size, noise, index }) {
  const [infoText, setInfoText] = useState("");

  const [isCopy, setIsCopy] = useState(false);

  const [svgName, setSvgName] = useState(null);
  const [svg, setSvg] = useState(null);

  const imgRef = useRef(null);
  const canvasRef = useRef(null);
  const [imageSrc, setImageSrc] = useState("");

  const handleCopySvg = () => {
    try {
      copy(svg);
      // This code block will be executed after copy(viewCode) completes
      setIsCopy(true);
      setInfoText("SVG Copied!");
      setTimeout(() => {
        setIsCopy(false);
      }, 1400);
      toast("Image copied to clipboard");
    } catch (error) {
      // Handle any errors that may occur during the copy(viewCode) operation
      console.error("Copy failed:", error);
    }
  };

  useEffect(() => {
    setSVGandName();
  }, []);

  useEffect(() => {
    setSVGandName();
  }, [noise]);

  const setSVGandName = () => {
    const str = renderToString(
      <ShapeRenderer type={type} index={index} showNoise={noise} size={400} />,
    );
    setSvg(str);

    const name = `${type}_${type === "number" ? index : index + 1}`;
    setSvgName(convertToCamelCase(name));
  };

  const svgToPng = async () => {
    const imgSource = svgBase64(svg);
    const svgImg = await loadImage(imgSource, imgRef);
    const { imageData, canvas, context } = getImageData(svgImg, canvasRef);

    const imageEncoded = await encodeImage(canvas, context, imageData);
    const dataUrl = unit8toPng(imageEncoded);
    setImageSrc(dataUrl);
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = "D_" + svgName + ".png";
    document.body.appendChild(a);

    a.click();
    // Remove the anchor element from the document
    document.body.removeChild(a);
  };

  const dwnSVG = async () => {
    try {
      const svgData = svg; // Assuming svg is your SVG content
      const blob = new Blob([svgData], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "D_" + svgName + ".svg";
      document.body.appendChild(a);

      a.click();

      // Cleanup: Remove the anchor element and revoke the URL
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading SVG:", error);
    }
  };
  return (
    <div>
      <div className="flex justify-center gap-2">
        <Popover>
          <PopoverTrigger>
            <div className="rounded-2xl border p-6">
              <ShapeRenderer
                type={type}
                index={index}
                showNoise={noise}
                size={size}
              />
            </div>
          </PopoverTrigger>
          <PopoverContent className="-mt-3 grid w-52 gap-2 p-2 text-slate-600 dark:text-slate-400">
            <div className="flex items-center justify-between gap-2 rounded-md p-2 px-4 hover:bg-slate-200 hover:dark:bg-slate-800">
              <p className="capitalize">
                {type} {""}
                {index}
              </p>
              <CopyButton
                className="h-4 w-4 capitalize"
                value={`<${type} />`}
              />
            </div>
            <div
              onClick={handleCopySvg}
              className="flex items-center justify-between gap-2 rounded-md p-2 px-4 hover:bg-slate-200 hover:dark:bg-slate-800"
            >
              <div>Copy SVG</div>
              <DIcons.Copy className="h-4 w-4" />
            </div>
            <div
              onClick={dwnSVG}
              className="flex items-center justify-between gap-2 rounded-md p-2 px-4 hover:bg-slate-200 hover:dark:bg-slate-800"
            >
              <div>Download SVG</div>
              <DIcons.Download className="h-4 w-4" />
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
