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
import ResultDIcon from "@/src/components/common/colors/result-dicon";
import { DiconsSidebarNav } from "@/src/components/mdx/doc/sidebar-nav";
import GridPattern from "@/src/components/ui/grid-pattern";
import { cn } from "@designali/ui";
import { Button } from "@designali/ui/button";
import { ScrollArea } from "@designali/ui/scroll-area";
import { Slider } from "@designali/ui/slider";
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
}

export const SideIcon = ({
  settings,
  customSvgIsPng,
  recentColors,
  formRef,
  onChangeColorSetting,
  onFormChange,
  onCopyImageToClipboard,
  pngClipboardSupported,
  setShowExportModal,
  showExportModal,
  IconComponent,
  svgRef,
}: SideIconProps) => {
  return (
    <main className={""}>
      <div className="-z-0 mx-auto grid max-w-sm md:h-screen md:border-r">
        <div className="p-6">
          <div className="relative">
            <p className="my-2 text-center text-xl font-semibold text-ali">
              {settings.icon}
            </p>
            <div className="relative mx-auto flex h-auto w-auto max-w-[202px] justify-center border">
              <GridPattern
                width={11.2}
                height={11.2}
                x={-1}
                y={-1}
                strokeDasharray={"1 1"}
                className={cn("-z-10")}
              />
              <DIcons.Plus
                strokeWidth={0.5}
                className="text-aired absolute -left-3 -top-3 h-5 w-5"
              />
              <DIcons.Plus
                strokeWidth={0.5}
                className="text-aired absolute -bottom-3 -left-3 h-5 w-5"
              />
              <DIcons.Plus
                strokeWidth={0.5}
                className="text-aired absolute -right-3 -top-3 h-5 w-5"
              />
              <DIcons.Plus
                strokeWidth={0.5}
                className="text-aired absolute -bottom-3 -right-3 h-5 w-5"
              />

              <CSSTransition
                in={history.length > 0}
                nodeRef={svgRef}
                timeout={200}
                className=""
                unmountOnExit
              >
                <ResultDIcon
                  size={200}
                  settings={settings}
                  IconComponent={IconComponent}
                  ref={svgRef}
                  strokeWidth={0}
                />
              </CSSTransition>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              <div className="grid gap-2">
                <DownloadPNG
                  open={showExportModal}
                  onOpenChange={setShowExportModal}
                  onStartExport={() => toast("PNG Image Downloaded")}
                  fileName={settings.fileName}
                  svgRef={svgRef}
                />
                <DownloadSVG
                  open={showExportModal}
                  onOpenChange={setShowExportModal}
                  onStartExport={() => toast("SVG Image Downloaded")}
                  fileName={settings.fileName}
                  svgRef={svgRef}
                />
              </div>
              <div className="grid gap-2">
                {pngClipboardSupported && (
                  <Button
                    variant="outline"
                    size="icon"
                    className=""
                    onSelect={onCopyImageToClipboard}
                  >
                    <DIcons.Copy strokeWidth={1} className="h-3 w-3" />
                  </Button>
                )}
                {pngClipboardSupported && (
                  <Button
                    variant="outline"
                    size="icon"
                    className=""
                    onSelect={onCopyImageToClipboard}
                  >
                    <DIcons.Copy strokeWidth={1} className="h-3 w-3" />
                  </Button>
                )}
              </div>
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
                            min={0.5}
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
                            max={196}
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
          <div>
            <Link href={"/dicons"}>
              <h1 className="text-md mb-2 mt-6">All Icons</h1>
            </Link>
            <Link href={"/dicons/categories"}>
              <h1 className="text-md mb-2">Categories</h1>
            </Link>
            <ScrollArea className="h-[430px]">
              <DiconsSidebarNav items={diconsConfig.sidebarNav} />
            </ScrollArea>
          </div>
        </div>
      </div>
    </main>
  );
};
