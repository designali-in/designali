//@ts-nocheck
"use client";

import { Suspense } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { DIcons } from "../../../../../../../packages/icons/src/dicons";

interface AccessProps {
  onChangeIcon;
  settings;
  filteredDIcons;
}

const MainIcons = ({ onChangeIcon, settings, filteredDIcons }: AccessProps) => {
  return (
    <main className={"mb-10"}>
      <div>
        <div className="mt-6">
          <TabsContent value="1">
            <div className="flex w-full flex-wrap justify-center gap-2 md:justify-start">
              {filteredDIcons.map((icon) => {
                const Component = DIcons[icon];
                const isActive = icon === settings.icon; // Determine active state
                return (
                  <div key={icon}>
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger>
                          <div
                            onClick={() => onChangeIcon(icon)}
                            className={`flex h-20 w-20 cursor-pointer items-center justify-center rounded-md border transition hover:bg-secondary  ${
                              isActive
                                ? "border-ali border-2"
                                : "border-secondary"
                            }`}
                          >
                            <Suspense fallback={<Skeleton />}>
                              <Component
                                width={30}
                                height={30}
                                stroke={settings.strokeColor}
                                strokeWidth={settings.strokeWidth}
                              />
                            </Suspense>
                          </div>
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
            <h1 className="text-ali pb-6 font-semibold">Wonking on it 😐</h1>
            <div className="flex w-full flex-wrap justify-center gap-2 md:justify-start">
              {filteredDIcons.map((icon) => {
                const Component = DIcons[icon];
                const isActive = icon === settings.icon; // Determine active state
                return (
                  <div key={icon}>
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger>
                          <div
                            onClick={() => onChangeIcon(icon)}
                            className={`flex h-20 w-20 cursor-pointer items-center justify-center rounded-md border transition hover:bg-secondary  ${
                              isActive
                                ? "border-ali border-2"
                                : "border-secondary"
                            }`}
                          >
                            <Suspense fallback={<Skeleton />}>
                              <Component
                                width={30}
                                height={30}
                                fill={settings.iconFill}
                                stroke={settings.strokeColor}
                                strokeWidth={settings.strokeWidth}
                              />
                            </Suspense>
                          </div>
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
            <div className="flex w-full flex-wrap justify-center gap-2 md:justify-start">
              {filteredDIcons.map((icon) => {
                const Component = DIcons[icon];
                const isActive = icon === settings.icon; // Determine active state
                return (
                  <div key={icon}>
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger>
                          <div
                            onClick={() => onChangeIcon(icon)}
                            className={`flex h-20 w-20 cursor-pointer items-center justify-center rounded-md border transition hover:bg-secondary  ${
                              isActive
                                ? "border-ali border-2"
                                : "border-secondary"
                            }`}
                          >
                            <Suspense fallback={<Skeleton />}>
                              <Component
                                width={30}
                                height={30}
                                strokeLinecap="square"
                                strokeLinejoin={"miter"}
                                stroke={settings.strokeColor}
                                strokeWidth={settings.strokeWidth}
                              />
                            </Suspense>
                          </div>
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
            <h1 className="text-ali pb-6 font-semibold">Wonking on it 😐</h1>
            <div className="flex w-full flex-wrap justify-center gap-2 md:justify-start">
              {filteredDIcons.map((icon) => {
                const Component = DIcons[icon];
                const isActive = icon === settings.icon; // Determine active state
                return (
                  <div key={icon}>
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger>
                          <div
                            onClick={() => onChangeIcon(icon)}
                            className={`flex h-20 w-20 cursor-pointer items-center justify-center rounded-md border transition hover:bg-secondary  ${
                              isActive
                                ? "border-ali border-2"
                                : "border-secondary"
                            }`}
                          >
                            <Suspense fallback={<Skeleton />}>
                              <Component
                                width={30}
                                height={30}
                                strokeLinecap="square"
                                strokeLinejoin={"miter"}
                                stroke={settings.strokeColor}
                                strokeWidth={settings.strokeWidth}
                                fill={settings.iconFill}
                              />
                            </Suspense>
                          </div>
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

export default MainIcons;
