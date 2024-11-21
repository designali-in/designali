"use client";

import React, { useState } from "react";
import { Icons } from "@/comp/icons";
import { DIcons } from "dicons";
import { saveSvgAsPng } from "save-svg-as-png";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ExportFormat = "PNG" | "SVG";

interface ExportOption {
  fileName: string;
  format: ExportFormat;
  size: number;
}

type SvgRefType = React.RefObject<HTMLElement & SVGSVGElement>;

const exportToPng = async (
  svgRef: SvgRefType,
  fileName: string,
  size: number,
) => {
  if (!svgRef.current) {
    return;
  }
  return saveSvgAsPng(svgRef.current, `${fileName}.png`, {
    encoderOptions: 1,
    scale: size / 512,
  });
};

const exportToSvg = async (svgRef: SvgRefType, fileName: string) => {
  if (!svgRef.current) {
    return;
  }
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    `data:text/plain;charset=utf-8,${encodeURIComponent(svgRef.current.outerHTML)}`,
  );
  element.setAttribute("download", `${fileName}.svg`);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
  return;
};

const Exporters = {
  PNG: exportToPng,
  SVG: exportToSvg,
};

interface ExportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onStartExport: () => void;
  fileName: string;
  svgRef: SvgRefType;
}

export function ExportModal({
  open,
  onOpenChange,
  onStartExport,
  fileName,
  svgRef,
}: ExportModalProps) {
  const [exportOptions, setExportOptions] = useState<ExportOption[]>([
    {
      fileName,
      format: "PNG",
      size: 512,
    },
  ]);

  const onExport = async () => {
    onOpenChange(false);
    onStartExport();
    // Fixes @2x png export instead of the same size as png
    const realPixelRatio = window.devicePixelRatio;
    window.devicePixelRatio = 1;
    const exportPromises = exportOptions.map((option) => {
      return Exporters[option.format](svgRef, option.fileName, option.size);
    });
    await Promise.all(exportPromises);
    window.devicePixelRatio = realPixelRatio;
  };

  const onAddExportOption = () => {
    const newSize = exportOptions[0].size * (exportOptions.length + 1);
    setExportOptions([
      ...exportOptions,
      {
        format: "PNG",
        size: newSize,
        fileName: `${fileName}@${newSize}px`,
      },
    ]);
  };

  const removeExportOption = (removeIndex: number) => {
    const newOptions = exportOptions.reduce(
      (acc: ExportOption[], item, index) => {
        if (removeIndex !== index) {
          acc.push(item);
        }

        return acc;
      },
      [],
    );
    setExportOptions(newOptions);
  };

  const updateExportOptions = (
    updateIndex: number,
    key: keyof ExportOption,
    value: string | number,
  ) => {
    const exportOption = exportOptions[updateIndex];
    const newExportOption = {
      ...exportOption,
      [key]: value,
      fileName:
        updateIndex != 0 && key === "size"
          ? `${fileName}@${value}px`
          : exportOption.fileName,
    };
    if (newExportOption.format === "SVG") {
      newExportOption.fileName = fileName;
    }
    const newExportOptions = exportOptions.reduce(
      (acc: ExportOption[], value, index) => {
        acc.push(updateIndex === index ? newExportOption : value);
        return acc;
      },
      [],
    );
    setExportOptions(newExportOptions);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="px-6">
          <DialogTitle>Export Icons</DialogTitle>
          <ScrollArea className="h-40 md:h-60">
            {exportOptions.map((option, index) => (
              <div
                className="grid items-center justify-between gap-2 space-y-3 md:flex"
                key={index}
              >
                <div className="text-sm">
                  {option.fileName}.{option.format.toLowerCase()}
                </div>
                <div className="flex gap-2">
                  <div className="">
                    <div className="flex items-center gap-2">
                      <Input
                        type={option.format === "SVG" ? "text" : "number"}
                        min={0}
                        value={option.format === "SVG" ? "-" : option.size}
                        onChange={(e) =>
                          updateExportOptions(
                            index,
                            "size",
                            parseInt(e.target.value),
                          )
                        }
                        disabled={option.format === "SVG"}
                        className="h-10 w-[116px]"
                      />
                      <p>px</p>
                    </div>
                  </div>
                  <div className="">
                    <Select
                      value={option.format}
                      onValueChange={(value) =>
                        updateExportOptions(index, "format", value)
                      }
                    >
                      <SelectTrigger className="h-10 rounded-md">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PNG">PNG</SelectItem>
                        <SelectItem value="SVG">SVG</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-10 w-10"
                    disabled={exportOptions.length <= 1}
                    onClick={() => removeExportOption(index)}
                  >
                    <Icons.trash strokeWidth={1} className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            ))}
          </ScrollArea>
          <Button variant="outline" size="lg" onClick={onAddExportOption}>
            <DIcons.Plus className="mr-1 h-4 w-4" /> Add new export
          </Button>
          <Button variant="default" size="lg" onClick={onExport}>
            Export Icon
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export function DownloadPNG({
  onOpenChange,
  onStartExport,
  fileName,
  svgRef,
}: ExportModalProps) {
  const [exportOptions] = useState<ExportOption[]>([
    {
      fileName,
      format: "PNG",
      size: 512,
    },
  ]);

  const onExport = async () => {
    onOpenChange(false);
    onStartExport();
    // Fixes @2x png export instead of the same size as png
    const realPixelRatio = window.devicePixelRatio;
    window.devicePixelRatio = 1;
    const exportPromises = exportOptions.map((option) => {
      return Exporters[option.format](svgRef, option.fileName, option.size);
    });
    await Promise.all(exportPromises);
    window.devicePixelRatio = realPixelRatio;
  };

  return (
    <div className="flex items-center gap-2" onClick={onExport}>
      <span>Download PNG</span>
      <DIcons.Download className="h-4 w-4" />
    </div>
  );
}

export function DownloadSVG({
  onOpenChange,
  onStartExport,
  fileName,
  svgRef,
}: ExportModalProps) {
  const [exportOptions] = useState<ExportOption[]>([
    {
      fileName,
      format: "SVG",
      size: 512,
    },
  ]);

  const onExport = async () => {
    onOpenChange(false);
    onStartExport();
    // Fixes @2x png export instead of the same size as png
    const realPixelRatio = window.devicePixelRatio;
    window.devicePixelRatio = 1;
    const exportPromises = exportOptions.map((option) => {
      return Exporters[option.format](svgRef, option.fileName, option.size);
    });
    await Promise.all(exportPromises);
    window.devicePixelRatio = realPixelRatio;
  };

  return (
    <div className="flex items-center gap-2" onClick={onExport}>
      <span>Download SVG</span>
      <DIcons.Download className="h-4 w-4" />
    </div>
  );
}

ExportModal.displayName = "ExportModal";

DownloadPNG.displayName = "DownloadPNG";
