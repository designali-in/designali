/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/registry/default/designali/ui/button";
import { ScrollArea } from "@/registry/default/designali/ui/scroll-area";
import { Slider } from "@/registry/default/designali/ui/slider";
import { Switch } from "@/registry/default/designali/ui/switch";
import GridPattern from "@/src/comp/uis/grid-pattern";
import { DIcons } from "dicons";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/toaster";

import { ColorInput } from "./color-input";
import { DownloadPNG, DownloadSVG } from "./export-modal";
import { ResultDIcon } from "./result-dicon";

interface SideIconProps {
  settings;
  svgRef;
  IconComponent;
  pngClipboardSupported;
  onCopyImageToClipboard;
  showExportModal;
  setShowExportModal;
  customSvgIsPng;
  recentColors;
  onChangeColorSetting;
  iconFill;
  formRef;
  onFormChange;
}

export const SideIcon = ({
  settings,
  IconComponent,
  pngClipboardSupported,
  onCopyImageToClipboard,
  showExportModal,
  setShowExportModal,
  customSvgIsPng,
  recentColors,
  onChangeColorSetting,
  iconFill,
  svgRef,
  formRef,
  onFormChange,
}: SideIconProps) => {
  const handleSwitchChange = (checked: boolean, settingName: string) => {
    const newValue =
      settingName === iconFill
        ? checked
          ? "currentColor"
          : "none"
        : checked
          ? "sharp"
          : "round";
    onFormChange({ [settingName]: newValue });
  };

  const handleReset = () => {
    settings(() => ({
      iconFill: "currentColor", // Default color or initial value
    }));
  };

  return (
    <main className={""}>
      <div className="-z-0 mx-auto grid max-w-sm md:h-full md:border-r">
        <div className="p-6">
          <div className="relative">
            <p className="text-ali mb-2 text-center text-lg font-semibold">
              {settings.icon}
            </p>
            <div className="relative mx-auto grid aspect-square h-full w-full justify-center border">
              <GridPattern
                width={12}
                height={12}
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
              <div className="flex h-full w-full items-center justify-center">
                <ResultDIcon
                  size={250}
                  settings={settings}
                  IconComponent={IconComponent}
                  ref={svgRef}
                />
              </div>
              <div className="mt-4 flex justify-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <div className="flex items-center gap-1 hover:text-slate-600 dark:hover:text-slate-400">
                      Download
                      <DIcons.Copy className="h-4 w-4" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {pngClipboardSupported && (
                      <DropdownMenuItem
                        className="flex justify-between"
                        onSelect={onCopyImageToClipboard}
                      >
                        Copy Image <DIcons.Copy className="h-4 w-4" />
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem>
                      <DownloadPNG
                        open={showExportModal}
                        onOpenChange={setShowExportModal}
                        onStartExport={() => toast("PNG Image Downloaded")}
                        fileName={settings.icon}
                        svgRef={svgRef}
                      />
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <DownloadSVG
                        open={showExportModal}
                        onOpenChange={setShowExportModal}
                        onStartExport={() => toast("SVG Image Downloaded")}
                        fileName={settings.icon}
                        svgRef={svgRef}
                      />
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <div className={"mt-6"}>
            <div className="grid gap-2 px-6 md:px-0">
              <form
                className="grid gap-2"
                onChange={onFormChange}
                ref={formRef}
              >
                <div className="mt-10 w-full ">
                  <div className="grid gap-6">
                    {!customSvgIsPng && (
                      <div className="flex items-center justify-between">
                        <span className="pr-5 text-xs">Color</span>
                        <ColorInput
                          value={settings.strokeColor}
                          name="strokeColor"
                          onChange={onChangeColorSetting("strokeColor")}
                          recentColors={recentColors}
                        />
                      </div>
                    )}
                    <div></div>
                    <div className="grid items-center gap-2">
                      <div className="flex items-center justify-between">
                        <span className="pr-5 text-xs">Stroke Width</span>
                        <div className="flex items-center gap-1">
                          <span className="flex w-[30px] justify-end font-semibold">
                            {settings.strokeWidth}
                          </span>
                          <span className="text-xs"> px</span>
                        </div>
                      </div>
                      <div className="">
                        <div className="flex flex-1 justify-end gap-2">
                          <Slider
                            name="strokeWidth"
                            defaultValue={[settings.strokeWidth]}
                            min={0.1}
                            max={3}
                            step={0.1}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid items-center gap-2">
                      <div className="flex items-center justify-between">
                        <span className="pr-5 text-xs">Size</span>
                        <div className="flex items-center gap-1">
                          <span className="flex w-[30px] justify-end font-semibold">
                            {settings.iconSize}
                          </span>
                          <span className="text-xs"> px</span>
                        </div>
                      </div>
                      <div className="">
                        <div className="flex flex-1 justify-end gap-2">
                          <Slider
                            name="iconSize"
                            defaultValue={[settings.iconSize]}
                            min={16}
                            max={240}
                            step={1}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="pr-5 text-xs">Reset</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handleReset}
                      >
                        <DIcons.Repeat />
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="hidden  md:block">
            <Link href={"/products/dicons"}>
              <h1 className="text-md mb-2 mt-6">All Icons</h1>
            </Link>
            <Link href={"/products/dicons/categories"}>
              <h1 className="text-md mb-2">Categories</h1>
            </Link>
            <ScrollArea className="h-[360px]"></ScrollArea>
          </div>
        </div>
      </div>
    </main>
  );
};
