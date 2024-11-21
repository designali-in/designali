/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import React from "react";
import { DIcons } from "dicons";
import { CSSTransition } from "react-transition-group";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/toaster";

import { DownloadPNG, DownloadSVG } from "../../common/colors/export-modal";
import { ResultIcon } from "../../common/colors/result-dicon";
import GridPattern from "../../uis/grid-pattern";

interface ToolProps {
  svgRef;
  settings;
  IconComponent;
  showExportModal;
  iconstrokeWidth;
  setShowExportModal;
  pngClipboardSupported;
  onCopyImageToClipboard;
}

export const MainToolIcons = ({
  svgRef,
  settings,
  IconComponent,
  showExportModal,
  pngClipboardSupported,
  onCopyImageToClipboard,
  iconstrokeWidth,
  setShowExportModal,
}: ToolProps) => {
  return (
    <main className={""}>
      <div className="relative mt-20 px-6">
        <p className="text-ali mb-2 text-center text-xl font-semibold">
          {settings.icon}
        </p>
        <div className="relative flex h-auto w-auto justify-center border p-4">
          <GridPattern
            width={11.5}
            height={11.5}
            x={-1}
            y={-1}
            strokeDasharray={"1 1"}
            className={cn("-z-10 bg-slate-100 dark:bg-slate-900")}
          />
          <DIcons.Plus
            strokeWidth={0.5}
            className="text-aired absolute -left-4 -top-4 h-8 w-8"
          />
          <DIcons.Plus
            strokeWidth={0.5}
            className="text-aired absolute -bottom-4 -left-4 h-8 w-8"
          />
          <DIcons.Plus
            strokeWidth={0.5}
            className="text-aired absolute -right-4 -top-4 h-8 w-8"
          />
          <DIcons.Plus
            strokeWidth={0.5}
            className="text-aired absolute -bottom-4 -right-4 h-8 w-8"
          />

          <CSSTransition
            in={IconComponent}
            nodeRef={svgRef}
            timeout={300}
            className=""
            unmountOnExit
          >
            <ResultIcon
              size={300}
              settings={settings}
              IconComponent={IconComponent}
              ref={svgRef}
              iconstrokeWidth={iconstrokeWidth}
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
    </main>
  );
};
