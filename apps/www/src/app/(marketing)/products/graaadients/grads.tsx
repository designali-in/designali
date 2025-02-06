import { PhotoshopGradients } from "@/comp/products/gradients";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Halftone } from "./types/halftone";
import { Neon } from "./types/neon";
import { Noise } from "./types/noise";
import { OilPaint } from "./types/oil-paint";
import { Solarize } from "./types/solarize";

export function Grads() {
  return (
    <Tabs defaultValue="6" className="items-center justify-center text-center">
      <TabsList className="sticky top-24 z-20 mb-6 w-full items-center justify-center text-center  md:w-auto">
        <ScrollArea className="whitespace-nowrap">
          <div className="space-x-2">
            <TabsTrigger value="6" className="px-6">
              Oil Paint
            </TabsTrigger>
            <TabsTrigger value="5" className="px-6">
              Neon
            </TabsTrigger>
            <TabsTrigger value="1" className="px-6">
              Noise
            </TabsTrigger>
            <TabsTrigger value="2" className="px-6">
              Halftone
            </TabsTrigger>
            <TabsTrigger value="3" className="px-6">
              Solarize
            </TabsTrigger>
            <TabsTrigger value="4" className="px-6">
              Photoshop
            </TabsTrigger>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </TabsList>
      <TabsContent value="6">
        <OilPaint />
      </TabsContent>
      <TabsContent value="5">
        <Neon />
      </TabsContent>
      <TabsContent value="1">
        <Noise />
      </TabsContent>
      <TabsContent value="2">
        <Halftone />
      </TabsContent>
      <TabsContent value="3">
        <Solarize />
      </TabsContent>
      <TabsContent value="4">
        <PhotoshopGradients />
      </TabsContent>
    </Tabs>
  );
}
