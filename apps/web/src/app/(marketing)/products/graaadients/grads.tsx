import { ScrollArea, ScrollBar } from "@designali/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@designali/ui/tabs";

import { Grad1 } from "./types/mesh";
import Video from "./types/video";

export function Grads() {
  return (
    <Tabs defaultValue="1" className="items-center justify-center text-center">
      <TabsList className="sticky top-24 z-20 w-auto items-center justify-center text-center lg:w-auto">
        <ScrollArea className="whitespace-nowrap">
          <div className="space-x-2">
            <TabsTrigger value="1" className="px-6">
              Mesh Backgrounds
            </TabsTrigger>
            <TabsTrigger value="2" className="px-6">
              Video
            </TabsTrigger>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </TabsList>

      <TabsContent className="grid gap-y-2" value="1">
        <Grad1 />
      </TabsContent>
      <TabsContent value="2">
        <Video />
      </TabsContent>
    </Tabs>
  );
}
