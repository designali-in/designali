import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Modals from "./_creatives/3d";
import Campaigns from "./_creatives/campaigns";
import SMCreative from "./_creatives/creative";
import SMFestive from "./_creatives/festive";
import Logos from "./_creatives/logos";
import Music from "./_creatives/music";
import Others from "./_creatives/others";
import Packaging from "./_creatives/packaging";
import Reels from "./_creatives/reels";
import UIUX from "./_creatives/uiux";
import Videos from "./_creatives/videos";

export function Work() {
  return (
    <Tabs
      defaultValue="1"
      className="mb-40 items-center justify-center text-center"
    >
      <TabsList className="sticky top-24 z-20 w-full items-center justify-center text-center shadow-xl lg:w-auto">
        <ScrollArea className="whitespace-nowrap">
          <div className="space-x-2">
            <TabsTrigger value="1" className="px-6">
              SM Creative
            </TabsTrigger>
            <TabsTrigger value="2" className="px-6">
              SM Festive
            </TabsTrigger>
            <TabsTrigger value="3" className="px-6">
              Campaigns
            </TabsTrigger>
            <TabsTrigger value="4" className="px-6">
              3D
            </TabsTrigger>
            <TabsTrigger value="5" className="px-6">
              Packaging
            </TabsTrigger>
            <TabsTrigger value="6" className="px-6">
              UI/UX
            </TabsTrigger>
            <TabsTrigger value="7" className="px-6">
              Logos
            </TabsTrigger>
            <TabsTrigger value="8" className="px-6">
              Music
            </TabsTrigger>
            <TabsTrigger value="9" className="px-6">
              Videos
            </TabsTrigger>
            <TabsTrigger value="10" className="px-6">
              Reels
            </TabsTrigger>
            <TabsTrigger value="11" className="px-6">
              Other
            </TabsTrigger>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </TabsList>
      <div className="mt-6">
        <TabsContent value="1">
          <SMCreative />
        </TabsContent>
        <TabsContent value="2">
          <SMFestive />
        </TabsContent>
        <TabsContent value="3">
          <Campaigns />
        </TabsContent>
        <TabsContent value="4">
          <Modals />
        </TabsContent>
        <TabsContent value="5">
          <Packaging />
        </TabsContent>
        <TabsContent value="6">
          <UIUX />
        </TabsContent>
        <TabsContent value="7">
          <Logos />
        </TabsContent>
        <TabsContent value="8">
          <Music />
        </TabsContent>
        <TabsContent value="9">
          <Videos />
        </TabsContent>
        <TabsContent value="10">
          <Reels />
        </TabsContent>
        <TabsContent value="11">
          <Others />
        </TabsContent>
      </div>
    </Tabs>
  );
}
