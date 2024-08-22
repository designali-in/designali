/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import React from "react";
import { Input } from "@designali/ui/input";
import { Label } from "@designali/ui/label";
import { RadioGroup, RadioGroupItem } from "@designali/ui/radio-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@designali/ui/tooltip";
import { DIcons } from "dicons";

interface AccessProps {
  onChangeIcon;
  settings;
  filteredDIcons;
  searchTerm;
}

export const MainIcons = ({
  onChangeIcon,
  settings,
  filteredDIcons,
  searchTerm,
}: AccessProps) => {
  return (
    <main className={""}>
      <div id="accessibility" className="">
        <h4 className="pb-3 text-center text-slate-600 dark:text-slate-400 md:text-left">
          {searchTerm ? "Results" : "All Icons"}
        </h4>

        <div className="flex w-full flex-wrap gap-2">
          {filteredDIcons.map((icon) => {
            const Component = DIcons[icon];
            return (
              <div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
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
      </div>
    </main>
  );
};
