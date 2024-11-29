/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import React, { lazy, Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/registry/default/designali/ui/button";
import { ScrollArea } from "@/registry/default/designali/ui/scroll-area";
import { Slider } from "@/registry/default/designali/ui/slider";
import { TabsContent } from "@/registry/default/designali/ui/tabs";
import { DiconsSidebarNav } from "@/src/comp/mdx/doc/sidebar-nav";
import GridPattern from "@/src/comp/uis/grid-pattern";
import { diconsConfig } from "@/src/config/icons";
import { DIcons } from "dicons";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/components/ui/toaster";

import { ColorInput } from "./color-input";
import { DIconsDrawer } from "./diconsdrawer";
import { DownloadPNG, DownloadSVG } from "./export-modal";
import {
  FillResultDIcon,
  FillSharpResultDIcon,
  ResultDIcon,
  SharpResultDIcon,
} from "./result-dicon";

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
  formRef;
  onFormChange;
  onRandomIconClick;
}

const SideIcon = ({
  settings,
  IconComponent,
  pngClipboardSupported,
  onCopyImageToClipboard,
  showExportModal,
  setShowExportModal,
  customSvgIsPng,
  recentColors,
  onChangeColorSetting,
  svgRef,
  formRef,
  onFormChange,
  onRandomIconClick,
}: SideIconProps) => {
  return (
    <main className={""}>
      <div className="-z-0 mx-auto grid max-w-sm md:h-full md:border-r">
        <div className="p-6">
          <div className="relative">
            <p className="text-ali mb-2 text-center text-lg font-semibold">
              <Suspense
                fallback={<Skeleton className="h-10 w-40 rounded-md" />}
              >
                {settings.icon}
              </Suspense>
            </p>
            <div className="relative aspect-square h-full w-full items-center justify-center border p-3">
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
                <TabsContent value="1">
                  <ResultDIcon
                    size={250}
                    settings={settings}
                    IconComponent={IconComponent}
                    ref={svgRef}
                  />
                </TabsContent>
                <TabsContent value="2">
                  <FillResultDIcon
                    size={250}
                    settings={settings}
                    IconComponent={IconComponent}
                    ref={svgRef}
                  />
                </TabsContent>
                <TabsContent value="3">
                  <SharpResultDIcon
                    size={250}
                    settings={settings}
                    IconComponent={IconComponent}
                    ref={svgRef}
                  />
                </TabsContent>
                <TabsContent value="4">
                  <FillSharpResultDIcon
                    size={250}
                    settings={settings}
                    IconComponent={IconComponent}
                    ref={svgRef}
                  />
                </TabsContent>
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={onRandomIconClick}
                title="Random icon"
              >
                <DIcons.Shuffle className="!h-4 !w-4" />
              </Button>
              <DIconsDrawer settings={settings} />
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button>
                    Download
                    <DIcons.Copy className="h-4 w-4" />
                  </Button>
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
              <Button variant="outline" size="icon">
                <DIcons.RotateCw className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className={""}>
            <div className="grid gap-2 px-6 md:px-0">
              <form
                className="grid gap-2"
                onChange={onFormChange}
                ref={formRef}
              >
                <div className="mt-10 w-full ">
                  <div className="grid gap-6">
                    <TabsContent value="1">
                      <div>
                        {!customSvgIsPng && (
                          <div className="flex items-center justify-between">
                            <span className="pr-5 text-xs">Outline Color</span>
                            <ColorInput
                              value={settings.strokeColor}
                              name={"strokeColor"}
                              onChange={(newColor) => {
                                onChangeColorSetting("strokeColor")(newColor);
                                onChangeColorSetting("iconFill")(newColor); // Update iconFill too
                              }}
                              recentColors={recentColors}
                            />
                          </div>
                        )}
                      </div>
                    </TabsContent>
                    <TabsContent className=" " value="2">
                      <div className="grid gap-3">
                        <div>
                          {!customSvgIsPng && (
                            <div className="flex items-center justify-between">
                              <span className="pr-5 text-xs">Fill Color</span>
                              <ColorInput
                                value={settings.strokeColor}
                                name={"strokeColor"}
                                onChange={(newColor) => {
                                  onChangeColorSetting("strokeColor")(newColor);
                                }}
                                recentColors={recentColors}
                              />
                            </div>
                          )}
                        </div>
                        <div>
                          {!customSvgIsPng && (
                            <div className="flex items-center justify-between">
                              <span className="pr-5 text-xs">
                                Outline Color
                              </span>
                              <ColorInput
                                value={settings.iconFill}
                                name={"iconFill"}
                                onChange={(newColor) => {
                                  onChangeColorSetting("iconFill")(newColor);
                                }}
                                recentColors={recentColors}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="3">
                      <div>
                        {!customSvgIsPng && (
                          <div className="flex items-center justify-between">
                            <span className="pr-5 text-xs"> Outline Color</span>
                            <ColorInput
                              value={settings.strokeColor}
                              name={"strokeColor"}
                              onChange={(newColor) => {
                                onChangeColorSetting("strokeColor")(newColor);
                                onChangeColorSetting("iconFill")(newColor); // Update iconFill too
                              }}
                              recentColors={recentColors}
                            />
                          </div>
                        )}
                      </div>
                    </TabsContent>
                    <TabsContent value="4">
                      <div className="grid gap-3">
                        <div>
                          {!customSvgIsPng && (
                            <div className="flex items-center justify-between">
                              <span className="pr-5 text-xs">Fill Color</span>
                              <ColorInput
                                value={settings.strokeColor}
                                name={"strokeColor"}
                                onChange={(newColor) => {
                                  onChangeColorSetting("strokeColor")(newColor);
                                }}
                                recentColors={recentColors}
                              />
                            </div>
                          )}
                        </div>
                        <div>
                          {!customSvgIsPng && (
                            <div className="flex items-center justify-between">
                              <span className="pr-5 text-xs">
                                Outline Color
                              </span>
                              <ColorInput
                                value={settings.iconFill}
                                name={"iconFill"}
                                onChange={(newColor) => {
                                  onChangeColorSetting("iconFill")(newColor);
                                }}
                                recentColors={recentColors}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </TabsContent>

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
                          />
                        </div>
                      </div>
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
            <ScrollArea className="h-[360px]">
              <DiconsSidebarNav items={diconsConfig.sidebarNav} />
            </ScrollArea>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SideIcon;
