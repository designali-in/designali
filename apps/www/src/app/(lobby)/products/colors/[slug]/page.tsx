"use client";

import React, { KeyboardEvent, MouseEvent, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ExportDialog } from "@/components/lobby/products/colors/export-dialog";
import Palette from "@/components/lobby/products/colors/palettes";
import { Avegra } from "@/lib/fonts/fonts";
import { ColorBW } from "@/components/lobby/products/colors/color-bw";
import ColorConverter from "@/components/lobby/products/colors/color-convert";
import { ColorPalette } from "@/components/lobby/products/colors/color-palette";
import { cn } from "@/lib/utils";
import { extend } from "colord";
import namesPlugin from "colord/plugins/names";
import { DIcons } from "dicons";
import { Reorder, useAnimate } from "framer-motion";
import randomColor from "randomcolor";
import { usePDF } from "react-to-pdf";

import { getColors } from "@/lib/colors";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const dcolors = getColors();

extend([namesPlugin]);
export default function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const generatedColors = params.slug;

  // TODO - fix type and namin of state
  const [lockedHexes, setLockedHexes] = useState<string[]>([]);

  const colors: undefined | string[] | any =
    generatedColors && generatedColors.split("-");

  const [colorPalettes, setColorPalattes] = useState(colors);

  console.log(colorPalettes);

  const navigate = useRouter();

  const handleGenerateNewPalette = (
    e: KeyboardEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>,
    eventType: string
  ) => {
    if (
      eventType === "keydown" &&
      (e as KeyboardEvent<HTMLDivElement>).key !== " " &&
      (e as KeyboardEvent<HTMLDivElement>).key !== "Spacebar"
    ) {
      return; // If it's a keydown event and key is not space, return without doing anything
    }

    //get five differnt color
    const randomColors = Array.from({ length: 5 }, () =>
      randomColor({
        hue: "random",
        luminosity: "random",
      })
    );

    const allColors = [...lockedHexes, ...randomColors];

    console.log(allColors, "all colors");

    if (allColors.length >= 5) {
      const routeParam = allColors
        .slice(0, 5)
        .map((color) => color.replace("#", ""))
        .join("-");
      if (eventType === "keydown" || eventType === "click") {
        navigate.replace(`/products/colors/${routeParam}`);
      }
    }
  };

  const { toPDF, targetRef } = usePDF({
    method: "save",
    filename: "palettes.pdf",
    page: { orientation: "landscape", format: "a5" },
  });

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const dynamicAxis = isDesktop ? "x" : "y";

  return (
    <div className="relative">
      <div className="my-20">
        <div className="">
          <p className="px-6 text-center text-lg font-light uppercase tracking-widest lg:text-xl">
            Generator
          </p>

          <h1
            className={cn(
              Avegra.className,
              "text-center text-7xl tracking-tighter sm:text-9xl"
            )}
          >
            Color <span className="text-ali">Palette</span>
          </h1>
          <p className="mx-auto max-w-lg px-6 text-center text-sm font-light lg:-mt-4 lg:text-lg">
            You can generate a new color palette by clicking the generate
            button.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products/colors">Colors</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Generate</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="container mt-10">
          <Tabs className="w-full" defaultValue={dcolors[0]?.name}>
            {/* Tab Triggers */}
            <TabsList className="w-full items-center justify-center text-center">
              <ScrollArea className="whitespace-nowrap">
                <div className="space-x-2">
                  {dcolors.map((colorPalette) => (
                    <TabsTrigger
                      key={colorPalette.name}
                      value={colorPalette.name}
                      className="px-6"
                    >
                      {colorPalette.name
                        .split(" ")
                        .map((word, index) =>
                          index === 0
                            ? word.charAt(0).toUpperCase() +
                              word.slice(1).toLowerCase()
                            : word.toLowerCase()
                        )
                        .join(" ")}
                    </TabsTrigger>
                  ))}
                </div>
                <ScrollBar className="hidden" orientation="horizontal" />
              </ScrollArea>
            </TabsList>

            {/* Tab Contents */}
            {dcolors.map((colorPalette) => (
              <TabsContent
                className="mt-3"
                key={colorPalette.name}
                value={colorPalette.name}
              >
                <div className="">
                  <ColorPalette colorPalette={colorPalette} />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="my-6 flex w-full items-center justify-center gap-2 p-2">
          <div className="">
            <Button onClick={(e) => handleGenerateNewPalette(e, "click")}>
              <DIcons.AiBeautify className="mr-2 h-6 w-6" />
              Generate
            </Button>
          </div>
          <div className="flex items-center">
            <ExportDialog targetRef={targetRef} handleExportPdf={toPDF} />
          </div>
        </div>
        <div>
          <Reorder.Group
            ref={targetRef}
            className="mt-10 flex h-full w-full flex-col lg:flex-row"
            axis={dynamicAxis}
            values={colorPalettes}
            onReorder={setColorPalattes}
          >
            {colorPalettes.map((color: string, index: number) => (
              <Palette
                color={color}
                setLockedHexes={setLockedHexes}
                lockedHexes={lockedHexes}
                key={color}
                colorIndex={index}
                colors={colors}
              />
            ))}
          </Reorder.Group>
        </div>
        <div className="container mt-10">
          <ColorConverter />
          <ColorBW />
        </div>
      </div>
    </div>
  );
}
