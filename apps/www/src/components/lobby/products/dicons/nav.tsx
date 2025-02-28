// @ts-nocheck
"use client";

import React from "react";
import Link from "next/link";
import { DIcons } from "dicons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface NavProps {
  settings;
  searchTerm;
  searchRef;
  onChangeSearchTerm;
  filteredDIcons;
}

const NavigationIcon = ({
  settings,
  searchTerm,
  filteredDIcons,
  onChangeSearchTerm,
  searchRef,
}: NavProps) => {
  return (
    <main>
      <nav className="z-20 mt-10 w-auto border-b md:sticky md:top-14 md:mt-0 md:bg-slate-100/60 md:px-6 md:backdrop-blur-md md:backdrop-filter md:hover:bg-slate-50 md:dark:bg-slate-900/60 md:hover:dark:bg-slate-950">
        <div className=" grid w-full justify-center gap-3 md:flex md:justify-between">
          <div className="grid w-full items-center justify-center gap-3 text-center md:flex md:h-16 md:justify-start md:pb-0">
            <Link href={"/products/dicons"}>
              <h1 className="hover:text-ali text-3xl font-semibold">DIcons</h1>
            </Link>
            <TabsList className=" w-auto   items-center justify-center text-center">
              <ScrollArea className="whitespace-nowrap">
                <div className="space-x-1">
                  <TabsTrigger value="1" className="px-3">
                    Outline
                  </TabsTrigger>
                  <TabsTrigger value="3" className="px-3">
                    Square
                  </TabsTrigger>
                  <TabsTrigger value="2" className="px-3">
                    Fill (round)
                  </TabsTrigger>
                  <TabsTrigger value="4" className="px-3">
                    Fill (square)
                  </TabsTrigger>
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </TabsList>
            <div>
              <div className="flex justify-center gap-3">
                <div className="relative">
                  <Input
                    type="text"
                    value={searchTerm}
                    ref={searchRef}
                    onChange={onChangeSearchTerm}
                    placeholder={`Search ${filteredDIcons.length} icons...`}
                    aria-label="Search Icon"
                    className="h-12 w-full rounded-full pl-12"
                    id="search"
                  />
                  <Label htmlFor="search">
                    <DIcons.Search
                      strokeWidth={1}
                      className="absolute left-6 top-1/2 h-5 w-5 -translate-y-1/2"
                    />
                  </Label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 pb-6 md:pb-0">
            <h1 className="text-ali text-nowrap rounded-md border px-4 py-1 font-mono">{`<${settings.icon} />`}</h1>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default NavigationIcon;
