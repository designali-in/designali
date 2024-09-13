import { ScrollArea, ScrollBar } from "@designali/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@designali/ui/tabs";

import Icons from "./types/icons";

export function Icooons() {
  return (
    <Tabs defaultValue="1" className="items-center justify-center text-center">
      <TabsList className="sticky top-24 z-20 w-full items-center justify-center text-center lg:w-auto">
        <ScrollArea className="whitespace-nowrap">
          <div className="space-x-2">
            <TabsTrigger value="1" className="px-6">
              2DIcons
            </TabsTrigger>
            <TabsTrigger value="2" className="px-6">
              Coming Soon
            </TabsTrigger>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </TabsList>

      <TabsContent value="1">
        <Icons />
      </TabsContent>
      <TabsContent value="2">Coming Soon</TabsContent>
    </Tabs>
  );
}
