/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { DBrands } from "../../icons/brands";

interface AccessibilityProps {
  onChangeIcon;
  settings;
  filteredBrands;
}

export const Brands = ({
  onChangeIcon,
  settings,
  filteredBrands,
}: AccessibilityProps) => {
  return (
    <div className="px-6">
      <div id="brands" className="">
        <h4 className="pb-3 text-center text-slate-600 dark:text-slate-400">
          {"Brands"}
        </h4>

        <div className="flex w-full flex-wrap justify-center gap-2">
          {filteredBrands.map((icon) => {
            const Component = DBrands[icon];
            return (
              <div>
                <TooltipProvider>
                  <Tooltip>
                    <RadioGroup className="relative" defaultValue="option-one">
                      <RadioGroupItem
                        className="absolute -z-10"
                        value={icon}
                        checked={icon === settings.icon}
                        onChange={() => onChangeIcon(icon)}
                      />
                    </RadioGroup>
                    <TooltipTrigger>
                      <Label className="" key={icon}>
                        <div className="hover:border-ali flex h-14 w-14 cursor-pointer items-center justify-center rounded-md border transition hover:bg-slate-100 hover:dark:bg-slate-900">
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
    </div>
  );
};
