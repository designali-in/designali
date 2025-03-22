 

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
 
import { Halftone } from "./types/1"; 

export function D3D() {
  return (
    <Tabs
      defaultValue="1"
      className="mb-6 px-6 items-center justify-center text-center"
    >
      <TabsList className="sticky top-24 z-20 w-full items-center justify-center text-center shadow-xl lg:w-auto">
        <ScrollArea className="whitespace-nowrap">
          <div className="space-x-2">
            <TabsTrigger value="1" className="px-6">
              Gradient 
            </TabsTrigger>
            <TabsTrigger value="2" className="px-6">
              Neon
            </TabsTrigger>
             
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </TabsList>
      <div className="mt-6">
        <TabsContent value="1">
         <Halftone/>
        </TabsContent>
        <TabsContent value="2">
         
        </TabsContent>
        
      </div>
    </Tabs>
  );
}
