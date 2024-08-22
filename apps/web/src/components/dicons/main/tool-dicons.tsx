/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import React from "react";
import { cn } from "@designali/ui";
import { Button } from "@designali/ui/button";
import { toast } from "@designali/ui/toaster";
import { DIcons } from "dicons";
import { CSSTransition } from "react-transition-group";

import { DownloadPNG, DownloadSVG } from "../../common/colors/export-modal";
import ResultIcon from "../../common/colors/result-icon";
import GridPattern from "../../ui/grid-pattern";

interface ToolProps {
  svgRef;
  settings;
  IconComponent;
  showExportModal;
  setShowExportModal;
  pngClipboardSupported;
  onCopyImageToClipboard;
}

export const MainToolIcons = ({
  svgRef,
  settings,
  IconComponent,
  showExportModal,
  setShowExportModal,
  pngClipboardSupported,
  onCopyImageToClipboard,
}: ToolProps) => {
  return (
    <main className={""}>
      <div className="relative mt-20">
        <p className="my-4 text-center">{settings.icon}</p>
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
            in={history.length > 0}
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
            />
          </CSSTransition>
        </div>
        <div className="mt-4 flex justify-center gap-2">
          <DownloadPNG
            open={showExportModal}
            onOpenChange={setShowExportModal}
            onStartExport={() => toast("Download started")}
            fileName={settings.fileName}
            svgRef={svgRef}
          />
          <DownloadSVG
            open={showExportModal}
            onOpenChange={setShowExportModal}
            onStartExport={() => toast("Download started")}
            fileName={settings.fileName}
            svgRef={svgRef}
          />

          {pngClipboardSupported && (
            <Button
              variant="outline"
              size="icon"
              className=""
              onSelect={onCopyImageToClipboard}
            >
              <DIcons.Plus className="h-3 w-3" />
            </Button>
          )}
        </div>
      </div>
    </main>
  );
};
