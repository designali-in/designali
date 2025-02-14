"use client";

import type React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";

interface DesignPanelProps {
  shape: string;
  density: number;
  backgroundColor: string;
  foregroundColor: string;
  scale: number;
  rotation: number;
  onUpdateShape: (
    value: "circle" | "square" | "triangle" | "hexagon" | "star" | "custom",
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
  onUpdateShape,
  onUpdateDensity,
  onUpdateBackgroundColor,
  onUpdateForegroundColor,
  onUpdateScale,
  onUpdateRotation,
  onSvgUpload,
  onDownload,
}: DesignPanelProps) {
  return (
    <div className="h-[600px] w-80 overflow-y-auto rounded-l-lg border-r bg-background p-6 text-foreground">
      <h2 className="mb-3 text-lg font-semibold text-foreground">
        Pattern Generator
      </h2>
      <ScrollArea className="whitespace-nowrap">
        <Accordion
          type="multiple"
          defaultValue={["shape", "pattern", "appearance"]}
          className="h-full"
        >
          <AccordionItem value="shape">
            <AccordionTrigger>Shape</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <Label className="text-foreground">Select Shape</Label>
                <div className="flex flex-wrap gap-2">
                  {["circle", "square", "triangle", "hexagon", "star"].map(
                    (s) => (
                      <Button
                        key={s}
                        variant={shape === s ? "default" : "outline"}
                        onClick={() =>
                          onUpdateShape(
                            s as
                              | "circle"
                              | "square"
                              | "triangle"
                              | "hexagon"
                              | "star",
                          )
                        }
                      >
                        {s}
                      </Button>
                    ),
                  )}
                </div>
                <div className="mt-4">
                  <Label className="text-foreground">Upload Custom SVG</Label>
                  <Input type="file" accept=".svg" onChange={onSvgUpload} />
                </div>
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
                    onValueChange={([value]) => onUpdateDensity(value)}
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
                    onValueChange={([value]) => onUpdateScale(value)}
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
                    onValueChange={([value]) => onUpdateRotation(value)}
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
      <div className="mt-6">
        <Button onClick={onDownload} className="w-full">
          Download Pattern
        </Button>
      </div>
    </div>
  );
}
