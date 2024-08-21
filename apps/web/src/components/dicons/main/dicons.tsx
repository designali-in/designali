/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@designali/ui/button";
import { Input } from "@designali/ui/input";
import { Label } from "@designali/ui/label";
import { RadioGroup, RadioGroupItem } from "@designali/ui/radio-group";
import { ScrollArea } from "@designali/ui/scroll-area";
import { DIcons } from "dicons";

import { CopyButton } from "../../ui/copy-button";

const FEEDBACK_EMAIL = "contact@designali.in";

interface AccessProps {
  settings;
  iconsWrapperRef;
  searchTerm;
  onChangeSearchTerm;
  filteredDIcons;
  searchRef;
  onRandomIconClick;
  onChangeIcon;
}

export const MainIcons = ({
  iconsWrapperRef,
  onChangeIcon,
  settings,
  onRandomIconClick,
  filteredDIcons,
  onChangeSearchTerm,
  searchTerm,
  searchRef,
}: AccessProps) => {
  return (
    <main className={"md:flex"} id="categories">
      <div className="">
        <div className="h-auto">
          <div ref={iconsWrapperRef}>
            <nav className="z-20 w-full border-b px-6 md:sticky md:top-14 md:bg-slate-100/60 md:backdrop-blur-md md:backdrop-filter md:dark:bg-slate-900/60">
              <div className="grid items-center justify-center gap-3 text-center md:flex md:h-16 md:justify-start">
                <div className="flex w-full justify-between gap-3">
                  <div className="flex gap-3">
                    <Link href={"/dicons"}>
                      <h1 className="text-3xl font-semibold hover:text-ali">
                        DIcons
                      </h1>
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
                        <DIcons.Shuffle strokeWidth={1} className="h-4 w-4" />
                      </Button>
                    </div>
                    <Link href={"/tools/dicons"}>
                      <Button size="lg" className="h-10 w-full">
                        Edit {settings.icon}
                        <DIcons.Plus className="mx-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="flex items-center gap-1">
                    <h1 className="rounded-md border px-4 py-1">{`<${settings.icon} />`}</h1>
                    <CopyButton value={`<${settings.icon} />`} />
                  </div>
                </div>
              </div>
            </nav>
            <div className="px-6">
              {filteredDIcons.length === 0 ? (
                <div className="mt-20 grid gap-2 text-center">
                  <p>We couldn’t find an icon for that</p>
                  <Link
                    className=""
                    href={`mailto:${FEEDBACK_EMAIL}?subject=Request%20Icon`}
                  >
                    <Button>Request an Icon</Button>
                  </Link>
                </div>
              ) : (
                <div className="my-6">
                  <ScrollArea className="md:h-[900px]">
                    <div id="accessibility" className="">
                      <h4 className="pb-3 text-center text-slate-600 dark:text-slate-400 md:text-left">
                        {searchTerm ? "Results" : "All Icons"}
                      </h4>

                      <div className="flex w-full flex-wrap gap-2">
                        {filteredDIcons.map((icon) => {
                          const Component = DIcons[icon];
                          return (
                            <div>
                              <RadioGroup
                                className="relative"
                                defaultValue="option-one"
                              >
                                <RadioGroupItem
                                  className="absolute -z-10"
                                  value={icon}
                                  checked={icon === settings.icon}
                                  onChange={() => onChangeIcon(icon)}
                                />
                              </RadioGroup>
                              <Label className="" key={icon}>
                                <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-md border transition hover:border-ali hover:bg-slate-100 hover:dark:bg-slate-900">
                                  <Component
                                    width={24}
                                    height={24}
                                    stroke={settings.iconColor}
                                    strokeWidth={settings.strokeWidth}
                                  />
                                  <Input
                                    type="radio"
                                    className="hidden"
                                    name="icon"
                                    value={icon}
                                    checked={icon === settings.icon}
                                    onChange={() => onChangeIcon(icon)}
                                  />
                                </div>
                              </Label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </ScrollArea>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
