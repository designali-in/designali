import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Paaatterns } from "./types/paaatterns";

export function Patrns() {
  return (
    <Tabs defaultValue="1" className="items-center justify-center text-center">
      <TabsList className="sticky top-24 z-20 mb-6 w-full items-center justify-center text-center  md:w-auto">
        <ScrollArea className="whitespace-nowrap">
          <div className="space-x-2">
            <TabsTrigger value="1" className="px-6">
              Paaatterns
            </TabsTrigger>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </TabsList>
      <TabsContent value="1">
        <Paaatterns />
      </TabsContent>
    </Tabs>
  );
}
