"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  convertToCamelCase,
  encodeImage,
  getImageData,
  loadImage,
  svgBase64,
  unit8toPng,
} from "@/lib/helpers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@designali/ui/ddropdown-menu";
import { toast } from "@designali/ui/toaster";
import copy from "copy-to-clipboard";
import { DIcons } from "dicons";
import { renderToString } from "react-dom/server";

import { CopyButton } from "../ui/copy-button";
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
    a.download = "CS_" + svgName + ".png";
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
      a.download = "CS_" + svgName + ".svg";
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
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="rounded-2xl border p-6">
              <ShapeRenderer
                type={type}
                index={index}
                showNoise={noise}
                size={size}
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <p className="capitalize text-slate-600 dark:text-slate-400">
                {type} {""}
                {index}
              </p>
              <CopyButton value={`${type}`} />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div
                onClick={handleCopySvg}
                className="flex items-center justify-between gap-4 hover:text-slate-600 dark:hover:text-slate-400"
              >
                Copy SVG
                <DIcons.Copy className="h-4 w-4" />
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div
                onClick={dwnSVG}
                className="flex items-center justify-between gap-4 hover:text-slate-600 dark:hover:text-slate-400"
              >
                Download SVG
                <DIcons.Download className="h-4 w-4" />
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div
                onClick={svgToPng}
                className="flex items-center justify-between gap-4 hover:text-slate-600 dark:hover:text-slate-400"
              >
                Download PNG
                <DIcons.Copy className="h-4 w-4" />
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
