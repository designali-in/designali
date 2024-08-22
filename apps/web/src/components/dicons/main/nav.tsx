/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import React from "react";
import Link from "next/link";
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
  onRandomIconClick;
}

export const Navigation = ({
  settings,
  searchTerm,
  onRandomIconClick,
  filteredDIcons,
  onChangeSearchTerm,
  searchRef,
}: NavProps) => {
  return (
    <main>
      <nav className="z-20 w-full border-b px-6 md:sticky md:top-14 md:bg-slate-100/60 md:backdrop-blur-md md:backdrop-filter md:hover:bg-slate-50 md:dark:bg-slate-900/60 md:hover:dark:bg-slate-950">
        <div className="grid w-full justify-between gap-3 md:flex">
          <div className="grid items-center justify-center gap-3 text-center md:flex md:h-16 md:justify-start md:pb-0">
            <Link href={"/dicons"}>
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

              <Button
                variant="outline"
                size="lgicon"
                className="h-10 w-10"
                onClick={onRandomIconClick}
                title="Random icon"
              >
                <DIcons.Sun strokeWidth={1} className="h-4 w-4" />
              </Button>
              <Link href={"/tools/dicons"}>
                <Button size="lg" className="h-10 w-full">
                  <span className="hidden lg:block">Edit {settings.icon}</span>
                  <DIcons.Plus className="mx-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 pb-6 md:pb-0">
            <h1 className="rounded-md border px-4 py-1 font-mono text-ali">{`<${settings.icon} />`}</h1>
            <CopyButton value={`<${settings.icon} />`} />
          </div>
        </div>
      </nav>
    </main>
  );
};
