"use client";

import React, { JSX } from "react";
import { DIcons } from "dicons";
import * as DIcon from "dicons";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";

const shapeIcons = {
  circle: <DIcons.CircleDot size={20} />,
  square: <DIcons.SquareDot size={20} />,
  triangle: <DIcons.TriangleAlert size={20} />,
  hexagon: <DIcons.Hexagon size={20} />,
  star: <DIcons.Star size={20} />,
  custom: <DIcons.FileImage size={20} />,
  ...Object.fromEntries(
    [...Object.keys(DIcons), ...Object.keys(DIcon)]
      .filter((key, index, arr) => arr.indexOf(key) === index) // Remove duplicates
      .filter(
        (key) =>
          typeof ((DIcons as any)[key] || (DIcon as any)[key]) === "function"
      ) // Ensure valid components
      .map((key) => [
        key,
        React.createElement((DIcons as any)[key] || (DIcon as any)[key], {
          size: 20,
        }),
      ])
  ),
};

interface DesignPanelProps {
  shape: string;
  density: number;
  backgroundColor: string;
  foregroundColor: string;
  scale: number;
  rotation: number;
  resetButton: () => void;
  onRandomize: () => void;
  onUpdateShape: (
    value:
      | "circle"
      | "square"
      | "triangle"
      | "hexagon"
      | "star"
      | "custom"
      | string
  ) => void;
  onUpdateDensity: (value: number) => void;
  onToggleDarkMode: (value: boolean) => void;
  onUpdateBackgroundColor: (value: string) => void;
  onUpdateForegroundColor: (value: string) => void;
  onUpdateScale: (value: number) => void;
  onUpdateRotation: (rotation: number) => void;
  onSvgUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDownload: () => void;
}

export function DesignPanel({
  shape,
  density,
  backgroundColor,
  foregroundColor,
  scale,
  rotation,
  resetButton,
  onRandomize,
  onUpdateShape,
  onUpdateDensity,
  onUpdateBackgroundColor,
  onUpdateForegroundColor,
  onUpdateScale,
  onUpdateRotation,
  onSvgUpload,
  onDownload,
}: DesignPanelProps) {
  const DshapeIcons = Object.keys(DIcon).reduce(
    (acc, iconName) => {
      const IconComponent = DIcon[iconName as keyof typeof DIcon];
      if (typeof IconComponent === "function") {
        acc[iconName] = React.createElement(
          IconComponent as React.ComponentType
        );
      }
      return acc;
    },
    {} as Record<string, JSX.Element>
  );
  return (
    <div className="h-[800px] w-80 overflow-y-auto rounded-l-lg border-r bg-background p-3 text-foreground">
      <div className="flex items-center justify-between">
        <h2 className="mb-3 text-lg font-semibold text-foreground">
          Pattern Generator
        </h2>

        <Button onClick={resetButton} variant="ghost" size="icon">
          <DIcons.RefreshCw />
        </Button>
      </div>
      <ScrollArea className="whitespace-nowrap">
        <Accordion
          type="multiple"
          defaultValue={["shape", "pattern"]}
          className="h-full"
        >
          <AccordionItem value="shape">
            <AccordionTrigger>Shape</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <Label className="text-foreground">Select Shape</Label>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(shapeIcons).map(([key, icon]) => (
                    <Button
                      key={key}
                      size="icon"
                      variant={shape === key ? "default" : "ghost"}
                      onClick={() => onUpdateShape(key)}
                    >
                      {icon}
                    </Button>
                  ))}
                </div>
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label className="text-foreground ">Select</Label>
                  <select
                    className="w-40 rounded-md border bg-background p-2 text-foreground"
                    onChange={(e) =>
                      onUpdateShape(
                        e.target.value as
                          | "circle"
                          | "square"
                          | "triangle"
                          | "hexagon"
                          | "star"
                          | "custom"
                      )
                    }
                    value={shape}
                  >
                    {Object.keys(DshapeIcons).map((icon) => (
                      <option key={icon} value={icon}>
                        {icon}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-4">
                  <Label className="text-foreground">Upload Custom SVG</Label>
                  <Input
                    type="file"
                    accept=".svg"
                    className="mt-2"
                    onChange={onSvgUpload}
                  />
                </div>
                <Button
                  onClick={onRandomize}
                  className="mt-3 w-full"
                  variant="outline"
                >
                  Randomize Pattern
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pattern">
            <AccordionTrigger>Pattern</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label className="text-foreground">Pattern Density</Label>
                  <Slider
                    value={[density]}
                    min={0.1}
                    max={1}
                    step={0.01}
                    onValueChange={([value]) => onUpdateDensity(value ?? 1)}
                  />
                  <div className="text-right text-xs text-muted-foreground">
                    {density.toFixed(1)}x
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-foreground">Scale</Label>
                  <Slider
                    value={[scale]}
                    min={0.1}
                    max={5}
                    step={0.1}
                    onValueChange={([value]) => onUpdateScale(value ?? 1)}
                  />
                  <div className="text-right text-xs text-muted-foreground">
                    {scale.toFixed(1)}x
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-foreground">Rotation</Label>
                  <Slider
                    value={[rotation]}
                    min={0}
                    max={360}
                    step={1}
                    onValueChange={([value]) => onUpdateRotation(value ?? 1)}
                  />
                  <div className="text-right text-xs text-muted-foreground">
                    {rotation.toFixed(1)}°
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="appearance">
            <AccordionTrigger>Appearance</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-foreground">Background Color</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => onUpdateBackgroundColor(e.target.value)}
                      className="h-8 w-8 rounded-full border-none p-0"
                    />
                    <Input
                      type="text"
                      value={backgroundColor}
                      onChange={(e) => onUpdateBackgroundColor(e.target.value)}
                      className="flex-grow"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-foreground">Foreground Color</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="color"
                      value={foregroundColor}
                      onChange={(e) => onUpdateForegroundColor(e.target.value)}
                      className="h-8 w-8 rounded-full border-none p-0"
                    />
                    <Input
                      type="text"
                      value={foregroundColor}
                      onChange={(e) => onUpdateForegroundColor(e.target.value)}
                      className="flex-grow"
                    />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="mt-3">
        <Button onClick={onDownload} className="w-full">
          Download Pattern
        </Button>
      </div>
    </div>
  );
}
