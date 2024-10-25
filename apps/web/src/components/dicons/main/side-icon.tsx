/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import React from "react";
import Link from "next/link";
import { diconsConfig } from "@/config/icons";
import { ColorInput } from "@/src/components/common/colors/color-input";
import {
  DownloadPNG,
  DownloadSVG,
} from "@/src/components/common/colors/export-modal";
import { ResultDIcon } from "@/src/components/common/colors/result-dicon";
import { DiconsSidebarNav } from "@/src/components/mdx/doc/sidebar-nav";
import GridPattern from "@/src/components/uis/grid-pattern";
import { cn } from "@designali/ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@designali/ui/ddropdown-menu";
import { ScrollArea } from "@designali/ui/scroll-area";
import { Slider } from "@designali/ui/slider";
import { Switch } from "@designali/ui/switch";
import { toast } from "@designali/ui/toaster";
import { DIcons } from "dicons";
import { CSSTransition } from "react-transition-group";

interface SideIconProps {
  settings;
  svgRef;
  IconComponent;
  showExportModal;
  setShowExportModal;
  pngClipboardSupported;
  onCopyImageToClipboard;
  onChangeColorSetting;
  customSvgIsPng;
  recentColors;
  formRef;
  onFormChange;
  iconFill;
}

export const SideIcon = ({
  settings,
  customSvgIsPng,
  iconFill,
  recentColors,
  formRef,
  onChangeColorSetting,
  onCopyImageToClipboard,
  pngClipboardSupported,
  onFormChange,
  setShowExportModal,
  showExportModal,
  IconComponent,
  svgRef,
}: SideIconProps) => {
  return (
    <main className={""}>
      <div className="-z-0 mx-auto grid max-w-sm md:h-full md:border-r">
        <div className="p-6">
          <div className="relative">
            <p className="mb-2 text-center text-lg font-semibold text-ali">
              {settings.icon}
            </p>
            <div className="relative mx-auto flex h-auto w-auto max-w-[255px] justify-center border">
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
                className="absolute -left-3 -top-3 h-6 text-ali"
              />
              <DIcons.Plus
                strokeWidth={1}
                className="absolute -bottom-3 -left-3 h-6 text-ali"
              />
              <DIcons.Plus
                strokeWidth={1}
                className="absolute -right-3 -top-3 h-6 text-ali"
              />
              <DIcons.Plus
                strokeWidth={1}
                className="absolute -bottom-3 -right-3 h-6 text-ali"
              />

              <CSSTransition
                in={IconComponent}
                nodeRef={svgRef}
                timeout={250}
                className=""
                unmountOnExit
              >
                <ResultDIcon
                  size={250}
                  settings={settings}
                  IconComponent={IconComponent}
                  ref={svgRef}
                  strokeWidth={0}
                  iconFill={iconFill}
                />
              </CSSTransition>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="flex items-center gap-1 hover:text-slate-600 dark:hover:text-slate-400">
                    Download
                    <DIcons.Download className="h-4 w-4" />
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
                      fileName={settings.fileName}
                      svgRef={svgRef}
                    />
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <DownloadSVG
                      open={showExportModal}
                      onOpenChange={setShowExportModal}
                      onStartExport={() => toast("SVG Image Downloaded")}
                      fileName={settings.fileName}
                      svgRef={svgRef}
                    />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className={""}>
            <div className="grid gap-2 px-6 md:px-0">
              <form
                className="grid gap-2"
                onChange={onFormChange}
                ref={formRef}
              >
                <div className="mt-10 w-full">
                  <div className="grid gap-6">
                    {!customSvgIsPng && (
                      <div className="flex items-center justify-between">
                        <span className="pr-5 text-xs">Color</span>
                        <ColorInput
                          value={settings.iconColor}
                          name="iconColor"
                          onChange={onChangeColorSetting("iconColor")}
                          recentColors={recentColors}
                        />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="pr-5 text-xs">Fill Color</span>
                        <Switch name={"iconFill"} id={"iconFill"} />
                      </div>

                      {iconFill ? (
                        <div>
                          {!customSvgIsPng && (
                            <div
                              id="iconFill"
                              className="mt-3 flex items-center justify-between"
                            >
                              <span className="pr-5 text-xs">BG Color</span>
                              <ColorInput
                                value={settings.iconFill}
                                name="iconFill"
                                onChange={onChangeColorSetting("iconFill")}
                                recentColors={recentColors}
                              />
                            </div>
                          )}
                        </div>
                      ) : null}
                    </div>
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
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="hidden md:block">
            <Link href={"/products/dicons"}>
              <h1 className="text-md mb-2 mt-6">All Icons</h1>
            </Link>
            <Link href={"/products/dicons/categories"}>
              <h1 className="text-md mb-2">Categories</h1>
            </Link>
            <ScrollArea className="h-[360px]">
              <DiconsSidebarNav items={diconsConfig.sidebarNav} />
            </ScrollArea>
          </div>
        </div>
      </div>
    </main>
  );
};
