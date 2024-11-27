/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { Suspense } from "react";
import { TabsContent } from "@/registry/default/designali/ui/tabs";
import { DIcons } from "dicons";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AccessProps {
  onChangeIcon;
  settings;
  filteredDIcons;
}

export const MainIcons = ({
  onChangeIcon,
  settings,
  filteredDIcons,
}: AccessProps) => {
  return (
    <main className={"mb-10"}>
      <div>
        <div className="mt-6">
          <TabsContent value="1">
            <div className="flex w-full flex-wrap gap-2">
              {filteredDIcons.map((icon) => {
                const Component = DIcons[icon];
                return (
                  <div key={icon}>
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <RadioGroup className="relative">
                          <RadioGroupItem
                            className="absolute -z-10"
                            value={icon}
                            checked={icon === settings.icon}
                            onChange={() => onChangeIcon(icon)}
                          />
                        </RadioGroup>
                        <TooltipTrigger>
                          <Label className="">
                            <div
                              key={icon}
                              className="hover:border-ali flex h-20 w-20 cursor-pointer items-center justify-center rounded-md border transition hover:bg-slate-100 hover:dark:bg-slate-900"
                            >
                              <Suspense>
                                <Component
                                  width={30}
                                  height={30}
                                  stroke={settings.strokeColor}
                                  strokeWidth={settings.strokeWidth}
                                />
                              </Suspense>
                              <input
                                type="radio"
                                className="hidden"
                                readOnly
                                name="icon"
                                value={icon}
                                checked={icon === settings.icon}
                                onChange={() => onChangeIcon(icon)}
                              />
                            </div>
                          </Label>
                        </TooltipTrigger>
                        <TooltipContent className="-mt-2" side="bottom">
                          {icon}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="2">
            <div className="flex w-full flex-wrap   gap-2">
              {filteredDIcons.map((icon) => {
                const Component = DIcons[icon];
                return (
                  <div key={icon}>
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <RadioGroup className="relative">
                          <RadioGroupItem
                            className="absolute -z-10"
                            value={icon}
                            checked={icon === settings.icon}
                            onChange={() => onChangeIcon(icon)}
                          />
                        </RadioGroup>
                        <TooltipTrigger>
                          <Label className="">
                            <div
                              key={icon}
                              className="hover:border-ali flex h-20 w-20 cursor-pointer items-center justify-center rounded-md border transition hover:bg-slate-100 hover:dark:bg-slate-900"
                            >
                              <Suspense>
                                <Component
                                  width={30}
                                  height={30}
                                  stroke={settings.strokeColor}
                                  strokeWidth={settings.strokeWidth}
                                  fill={settings.iconFill}
                                />
                              </Suspense>
                              <input
                                type="radio"
                                className="hidden"
                                readOnly
                                name="icon"
                                value={icon}
                                checked={icon === settings.icon}
                                onChange={() => onChangeIcon(icon)}
                              />
                            </div>
                          </Label>
                        </TooltipTrigger>
                        <TooltipContent className="-mt-2" side="bottom">
                          {icon}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="3">
            <div className="flex w-full flex-wrap gap-2">
              {filteredDIcons.map((icon) => {
                const Component = DIcons[icon];
                return (
                  <div key={icon}>
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <RadioGroup className="relative">
                          <RadioGroupItem
                            className="absolute -z-10"
                            value={icon}
                            checked={icon === settings.icon}
                            onChange={() => onChangeIcon(icon)}
                          />
                        </RadioGroup>
                        <TooltipTrigger>
                          <Label className="">
                            <div
                              key={icon}
                              className="hover:border-ali flex h-20 w-20 cursor-pointer items-center justify-center rounded-md border transition hover:bg-slate-100 hover:dark:bg-slate-900"
                            >
                              <Suspense>
                                <Component
                                  width={30}
                                  height={30}
                                  stroke={settings.strokeColor}
                                  strokeLinecap={"square"}
                                  strokeWidth={settings.strokeWidth}
                                />
                              </Suspense>
                              <input
                                type="radio"
                                className="hidden"
                                readOnly
                                name="icon"
                                value={icon}
                                checked={icon === settings.icon}
                                onChange={() => onChangeIcon(icon)}
                              />
                            </div>
                          </Label>
                        </TooltipTrigger>
                        <TooltipContent className="-mt-2" side="bottom">
                          {icon}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="4">
            <div className="flex w-full flex-wrap gap-2">
              {filteredDIcons.map((icon) => {
                const Component = DIcons[icon];
                return (
                  <div key={icon}>
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <RadioGroup className="relative">
                          <RadioGroupItem
                            className="absolute -z-10"
                            value={icon}
                            checked={icon === settings.icon}
                            onChange={() => onChangeIcon(icon)}
                          />
                        </RadioGroup>
                        <TooltipTrigger>
                          <Label className="">
                            <div
                              key={icon}
                              className="hover:border-ali flex h-20 w-20 cursor-pointer items-center justify-center rounded-md border transition hover:bg-slate-100 hover:dark:bg-slate-900"
                            >
                              <Suspense>
                                <Component
                                  width={30}
                                  height={30}
                                  stroke={settings.strokeColor}
                                  strokeWidth={settings.strokeWidth}
                                  fill={settings.iconFill}
                                />
                              </Suspense>
                              <input
                                type="radio"
                                className="hidden"
                                readOnly
                                name="icon"
                                value={icon}
                                checked={icon === settings.icon}
                                onChange={() => onChangeIcon(icon)}
                              />
                            </div>
                          </Label>
                        </TooltipTrigger>
                        <TooltipContent className="-mt-2" side="bottom">
                          {icon}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </div>
      </div>
    </main>
  );
};
