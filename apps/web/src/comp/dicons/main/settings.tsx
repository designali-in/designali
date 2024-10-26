/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@designali/ui/daccordion";
import { Input } from "@designali/ui/input";
import { Label } from "@designali/ui/label";
import { ScrollArea } from "@designali/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@designali/ui/select";
import { Slider } from "@designali/ui/slider";
import { Switch } from "@designali/ui/switch";

import { ColorInput } from "../../common/colors/color-input";
import { ResultIcon } from "../../common/colors/result-dicon";

interface DIconsSettings {
  settings;
  presets;
  onPresetChange;
  onFormChange;
  formRef;
  customSvgIsPng;
  onChangeColorSetting;
  recentColors;
  onChangeFillType;
  fillTypeOptions;
  backgroundPositionOptions;
  onChangeBackgroundPosition;
  onChangeAngle;
  pushNewSettings;
}

export const DIconsSettings = ({
  settings,
  presets,
  onPresetChange,
  onFormChange,
  formRef,
  customSvgIsPng,
  onChangeColorSetting,
  recentColors,
  onChangeFillType,
  fillTypeOptions,
  backgroundPositionOptions,
  onChangeBackgroundPosition,
  onChangeAngle,
  pushNewSettings,
}: DIconsSettings) => {
  return (
    <main className={""}>
      <div className={""}>
        <div className="grid gap-2">
          <Accordion className="w-full" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-3">Presets</AccordionTrigger>
              <AccordionContent className="p-2">
                <ScrollArea>
                  <div className="mt-4 flex h-[300px] flex-wrap justify-center gap-2">
                    {presets.map((preset, index) => {
                      return (
                        <div className="">
                          <Label key={index} className="">
                            <div className="flex h-12 w-12 items-center justify-center rounded-md border">
                              <Input
                                type="radio"
                                className="hidden"
                                name="preset"
                                value={index}
                                checked={
                                  settings.selectedPresetIndex === null
                                    ? false
                                    : index ===
                                      Number(settings.selectedPresetIndex)
                                }
                                onChange={() => onPresetChange(preset, index)}
                              />
                              <ResultIcon
                                size={48}
                                isPreview
                                settings={{
                                  ...settings,
                                  ...preset,
                                  backgroundRadius: 10,
                                }}
                                iconstrokeWidth={settings.iconstrokeWidth}
                              />
                            </div>
                          </Label>
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <form className="grid gap-2" onChange={onFormChange} ref={formRef}>
            <Accordion
              className="w-full"
              type="single"
              defaultValue="item-1"
              collapsible
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-3">Icon</AccordionTrigger>
                <AccordionContent className="p-2">
                  <div className="grid gap-2 p-4">
                    {!customSvgIsPng && (
                      <div className="flex items-center justify-between">
                        <span className="pr-5 text-xs">Color</span>
                        <ColorInput
                          value={settings.iconColor}
                          name="iconColor"
                          onChange={onChangeColorSetting("iconColor")}
                          recentColors={recentColors}
                        />
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="pr-5 text-xs">Background</span>
                      <div className="">
                        <div className="flex flex-1 justify-end gap-2">
                          <Slider
                            name="backgroundOpacity"
                            defaultValue={[settings.backgroundOpacity]}
                            min={0}
                            max={100}
                            className="w-[120px] px-2 md:w-[150px]"
                          />
                          <span className="flex w-[30px] justify-end">
                            {settings.backgroundOpacity}
                          </span>
                          %
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="pr-5 text-xs">Size</span>
                      <div className="">
                        <div className="flex flex-1 justify-end gap-2">
                          <Slider
                            name="iconSize"
                            defaultValue={[settings.iconSize]}
                            min={0}
                            max={300}
                            className="w-[120px] px-2 md:w-[150px]"
                          />
                          <span className="flex w-[30px] justify-end">
                            {settings.iconSize}
                          </span>
                          px
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="pr-5 text-xs">Stroke Size</span>
                      <div className="">
                        <div className="flex flex-1 justify-end gap-2">
                          <Slider
                            name="strokeWidth"
                            defaultValue={[settings.strokeWidth]}
                            min={0.1}
                            max={3}
                            step={0.1}
                            className="w-[120px] px-2 md:w-[150px]"
                          />
                          <span className="flex w-[30px] justify-end">
                            {settings.strokeWidth}
                          </span>
                          px
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="pr-5 text-xs">X Offset</span>
                      <div className={""}>
                        <div className="flex flex-1 justify-end gap-2">
                          <Slider
                            name="iconOffsetX"
                            defaultValue={[settings.iconOffsetX]}
                            min={-300}
                            max={300}
                            step={10}
                            className="w-[120px] px-2 md:w-[150px]"
                          />
                          <span className="flex w-[30px] justify-end">
                            {settings.iconOffsetX}
                          </span>
                          px
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="pr-5 text-xs">Y Offset</span>
                      <div className="flex flex-col">
                        <div className="flex flex-1 justify-end gap-2">
                          <Slider
                            name="iconOffsetY"
                            defaultValue={[settings.iconOffsetY]}
                            min={-300}
                            max={300}
                            step={10}
                            className="w-[120px] px-2 md:w-[150px]"
                          />
                          <span className="flex w-[30px] justify-end">
                            {settings.iconOffsetY}
                          </span>
                          px
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              className="w-full"
              type="single"
              defaultValue="item-1"
              collapsible
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-3">
                  Fill Styles
                </AccordionTrigger>
                <AccordionContent className="p-2">
                  <div className="grid gap-2 p-4">
                    <label className="flex items-center justify-between">
                      <span className="pr-5 text-xs">Fill Type</span>
                      <Select
                        name="backgroundFillType"
                        value={settings.backgroundFillType}
                        onValueChange={onChangeFillType}
                      >
                        <SelectTrigger className="h-10 w-auto bg-slate-100 dark:bg-slate-900">
                          <SelectValue placeholder="Scale" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {fillTypeOptions.map((option) => (
                              <div>
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </SelectItem>
                              </div>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </label>
                    <div>
                      <label className="flex items-center justify-between">
                        <span className="pr-5 text-xs">
                          {settings.backgroundFillType === "Solid"
                            ? "Color"
                            : "Primary color"}
                        </span>
                        <ColorInput
                          value={settings.backgroundStartColor}
                          name="backgroundStartColor"
                          onChange={onChangeColorSetting(
                            "backgroundStartColor",
                          )}
                          recentColors={recentColors}
                        />
                      </label>
                    </div>
                    {settings.backgroundFillType !== "Solid" && (
                      <label className="flex items-center justify-between">
                        <span className="pr-5 text-xs">Secondary color</span>
                        <ColorInput
                          value={settings.backgroundEndColor}
                          name="backgroundEndColor"
                          onChange={onChangeColorSetting("backgroundEndColor")}
                          recentColors={recentColors}
                        />
                      </label>
                    )}
                    {settings.backgroundFillType === "Radial" ? (
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="pr-5 text-xs">Position</span>
                          <Select
                            name="backgroundPosition"
                            value={settings.backgroundPosition}
                            onValueChange={onChangeBackgroundPosition}
                          >
                            <SelectTrigger className="h-10 w-auto bg-slate-100 dark:bg-slate-900">
                              <SelectValue placeholder="Scale" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                {backgroundPositionOptions.map((option) => (
                                  <div>
                                    <SelectItem
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </SelectItem>
                                  </div>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="pr-5 text-xs">Spread</span>
                          <div className="flex flex-1 justify-end gap-2">
                            <Slider
                              name="backgroundSpread"
                              defaultValue={[settings.backgroundSpread]}
                              min={0}
                              max={100}
                              className="w-[120px] px-2 md:w-[150px]"
                            />
                            <span className="flex w-[30px] justify-end">
                              {settings.backgroundSpread}
                            </span>
                            %
                          </div>
                        </div>
                      </div>
                    ) : settings.backgroundFillType === "Linear" ? (
                      <div className="flex items-center justify-between">
                        <span className="pr-5 text-xs">Angle</span>
                        <div className="flex flex-1 justify-end gap-2">
                          <Slider
                            name="backgroundRadius"
                            defaultValue={[settings.backgroundAngle]}
                            min={0}
                            max={360}
                            step={5}
                            onChange={onChangeAngle}
                            className="w-[120px] px-2 md:w-[150px]"
                          />
                          <span className="flex w-[30px] justify-end">
                            {settings.backgroundAngle}
                          </span>
                          º
                        </div>
                      </div>
                    ) : null}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion
              className="w-full"
              type="single"
              defaultValue="item-1"
              collapsible
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-3">Background</AccordionTrigger>
                <AccordionContent className="p-2">
                  <div className="grid gap-2 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs">Radial glare</p>
                      <Switch
                        name="backgroundRadialGlare"
                        checked={settings.backgroundRadialGlare}
                        onCheckedChange={(checked) =>
                          pushNewSettings({
                            backgroundRadialGlare: checked,
                          })
                        }
                        className="focus-visible:ring-offset-gray-3"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-xs">Noise texture</p>
                      <Switch
                        name="backgroundNoiseTexture"
                        checked={settings.backgroundNoiseTexture}
                        onCheckedChange={(checked) =>
                          pushNewSettings({
                            backgroundNoiseTexture: checked,
                          })
                        }
                        className="focus-visible:ring-offset-gray-3"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs">Noise opacity</p>
                      <div className="flex flex-1 justify-end gap-2">
                        <Slider
                          name="backgroundNoiseTextureOpacity"
                          defaultValue={[
                            settings.backgroundNoiseTextureOpacity,
                          ]}
                          min={0}
                          max={100}
                          className="w-[120px] px-2 md:w-[150px]"
                        />
                        <p className="flex w-[30px] justify-end">
                          {settings.backgroundNoiseTextureOpacity}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs">Radius</p>
                      <div className="flex flex-1 justify-end gap-2">
                        <Slider
                          name="backgroundRadius"
                          defaultValue={[settings.backgroundRadius]}
                          min={0}
                          max={256}
                          className="w-[120px] px-2 md:w-[150px]"
                        />
                        <p className="flex w-[30px] justify-end">
                          {settings.backgroundRadius}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs">Stroke size</p>
                      <div className="flex flex-1 justify-end gap-2">
                        <Slider
                          name="backgroundStrokeSize"
                          defaultValue={[settings.backgroundStrokeSize]}
                          min={0}
                          max={256}
                          className="w-[120px] px-2 md:w-[150px]"
                        />
                        <p className="flex w-[30px] justify-end">
                          {settings.backgroundStrokeSize}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs">Stroke color</p>
                      <ColorInput
                        value={settings.backgroundStrokeColor}
                        name="backgroundStrokeColor"
                        onChange={onChangeColorSetting("backgroundStrokeColor")}
                        recentColors={recentColors}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs">Stroke opacity</p>
                      <div className="flex flex-1 justify-end gap-2">
                        <Slider
                          name="backgroundStrokeOpacity"
                          defaultValue={[settings.backgroundStrokeOpacity]}
                          min={0}
                          max={100}
                          className="w-[120px] px-2 md:w-[150px]"
                        />
                        <p className="flex w-[30px] justify-end">
                          {settings.backgroundStrokeOpacity}
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </form>
        </div>
      </div>
    </main>
  );
};
