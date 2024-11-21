import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Halftone } from "./types/halftone";
import { Noise } from "./types/noise";

export function Grads() {
  return (
    <Tabs defaultValue="1" className="items-center justify-center text-center">
      <TabsList className="sticky top-24 z-20 w-auto items-center justify-center bg-white text-center dark:bg-black lg:w-auto">
        <ScrollArea className="whitespace-nowrap">
          <div className="space-x-2">
            <TabsTrigger value="1" className="px-6">
              Noise
            </TabsTrigger>
            <TabsTrigger value="2" className="px-6">
              Halftone
            </TabsTrigger>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </TabsList>

      <TabsContent value="1">
        <Noise />
      </TabsContent>
      <TabsContent value="2">
        <Halftone />
      </TabsContent>
    </Tabs>
  );
}
