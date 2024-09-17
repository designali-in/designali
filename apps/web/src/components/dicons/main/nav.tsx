/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@designali/ui";
import { Button } from "@designali/ui/button";
import { Input } from "@designali/ui/input";
import { Label } from "@designali/ui/label";
import { DIcons } from "dicons";

import { CopyButton } from "../../ui/copy-button";

interface NavProps {
  settings;
  searchTerm;
  searchRef;
  onChangeSearchTerm;
  filteredDIcons;
}

export const Navigation = ({
  settings,
  searchTerm,
  filteredDIcons,
  onChangeSearchTerm,
  searchRef,
}: NavProps) => {
  return (
    <main>
      <nav className="z-20 mx-auto w-auto border-b px-6 md:sticky md:top-14 md:bg-slate-100/60 md:backdrop-blur-md md:backdrop-filter md:hover:bg-slate-50 md:dark:bg-slate-900/60 md:hover:dark:bg-slate-950">
        <div className="grid w-full justify-center gap-3 md:flex md:justify-between">
          <div className="grid w-full items-center justify-center gap-3 text-center md:flex md:h-16 md:justify-start md:pb-0">
            <Link href={"/products/dicons"}>
              <h1 className="text-3xl font-semibold hover:text-ali">DIcons</h1>
            </Link>
            <div className="flex gap-3">
              <div className="relative">
                <Input
                  type="text"
                  value={searchTerm}
                  ref={searchRef}
                  onChange={onChangeSearchTerm}
                  placeholder={`Search ${filteredDIcons.length} icons...`}
                  aria-label="Search Icon"
                  className="h-10 w-full rounded-full pl-12"
                  id="search"
                />
                <Label htmlFor="search">
                  <DIcons.Search
                    strokeWidth={1}
                    className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2"
                  />
                </Label>
              </div>

              <Link href={"/tools/dicons"}>
                <Button size="lgicon" className="h-10 w-10">
                  <DIcons.Scissors className="mx-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 pb-6 md:pb-0">
            <h1 className="text-nowrap rounded-md border px-4 py-1 font-mono text-ali">{`<${settings.icon} />`}</h1>
            <CopyButton value={`<${settings.icon} />`} />
          </div>
        </div>
      </nav>
    </main>
  );
};

interface IconNavProps {
  searchTerm;
  onRandomIconClick;
  onSelectCustomIcon;
  onChangeSearchTerm;
  filteredDIcons;
  searchRef;
}

export const IconNavigation = ({
  searchTerm,
  onRandomIconClick,
  onSelectCustomIcon,
  onChangeSearchTerm,
  filteredDIcons,
  searchRef,
}: IconNavProps) => {
  return (
    <main>
      <div className="p-6">
        <div className="flex justify-center gap-2">
          <div className="relative mb-4">
            <Input
              type="text"
              value={searchTerm}
              ref={searchRef}
              onChange={onChangeSearchTerm}
              placeholder={`Search ${filteredDIcons.length} icons...`}
              aria-label="Search Icon"
              className="h-10 w-full rounded-full pl-12"
              id="search"
            />
            <Label htmlFor="search">
              <DIcons.Search
                strokeWidth={1}
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2"
              />
            </Label>
          </div>

          <Button
            variant="outline"
            size="lgicon"
            className="h-10 w-10"
            onClick={onRandomIconClick}
            title="Random icon"
          >
            <DIcons.Shuffle strokeWidth={1} className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lgicon" className="h-10 w-10">
            <Input
              type="file"
              className="absolute w-0 opacity-0"
              onChange={onSelectCustomIcon}
              accept=".svg, .png"
            />
            <DIcons.FolderRoot strokeWidth={1} className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </main>
  );
};

interface ToolNavProps {
  undo;
  redoHistory;
  undoHistory;
  redo;
  onFileNameBlured;
  onFileNameKeydown;
  settings;
  setShowExportModal;
}

export const ToolNavigation = ({
  undo,
  redoHistory,
  redo,
  onFileNameBlured,
  onFileNameKeydown,
  settings,
  undoHistory,
  setShowExportModal,
}: ToolNavProps) => {
  return (
    <main>
      <div className="fixed top-14 z-10 flex h-28 w-full items-center justify-center gap-2 border-b border-t bg-slate-100/60 backdrop-blur-md backdrop-filter dark:bg-slate-900/60 md:h-14">
        <div className={cn("grid items-center justify-center gap-2 md:flex")}>
          <div>
            <Link href={"/products/dicons"}>
              <h1 className="text-center text-2xl font-semibold hover:text-ali">
                DIcons
              </h1>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              className={""}
              disabled={undoHistory.length <= 1}
              title={`cmd+z`}
              onClick={undo}
            >
              <DIcons.Undo className="mr-1 h-4 w-4" />
              <p className={""}>Undo</p>
            </Button>

            <Button
              variant="outline"
              className={""}
              disabled={redoHistory.length === 0}
              title={`shift+cmd+z`}
              onClick={redo}
            >
              <DIcons.Redo className="mr-1 h-4 w-4" />
              <p className={""}>Redo</p>
            </Button>
            <div
              className={"hidden px-3 md:block md:px-10"}
              contentEditable
              onBlur={onFileNameBlured}
              onKeyDown={onFileNameKeydown}
            >
              {settings.fileName}
            </div>
            <div className="flex justify-center">
              <div className="flex items-center gap-2">
                <Button
                  variant="default"
                  size="md"
                  className={""}
                  onClick={() => setShowExportModal(true)}
                >
                  <DIcons.Download className="mr-1 h-4 w-4" />
                  <span className="hidden lg:block">Export</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
