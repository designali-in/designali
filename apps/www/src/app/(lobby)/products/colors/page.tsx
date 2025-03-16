"use client";

import React from "react";
import { Avegra } from "@/lib/fonts/fonts";
import { ColorBW } from "@/components/lobby/products/colors/color-bw";
import ColorConverter from "@/components/lobby/products/colors/color-convert";
import { ColorPalette } from "@/components/lobby/products/colors/color-palette";
import { cn } from "@/lib/utils";
import { extend } from "colord";
import namesPlugin from "colord/plugins/names";

import { getColors } from "@/lib/colors";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ColorPaletteGenerator } from "@/src/components/lobby/products/colors/color-generator";

const dcolors = getColors();

extend([namesPlugin]);
export default function Page() {
  return (
    <div className="relative">
      <div className="mt-4 container-wrapper p-6 border-t rounded-t-3xl">
        <div className="mt-10">
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

        <div className="my-6">
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
        <ColorPaletteGenerator />
        <div className="container mt-10">
          <ColorConverter />
          <ColorBW />
        </div>
      </div>
    </div>
  );
}
