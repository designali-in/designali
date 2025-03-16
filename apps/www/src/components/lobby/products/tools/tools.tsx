import WordCounter from "./wordcount";
import { RoundedTool } from "./rounded-tool";
import { SVGTool } from "./svg-tool";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ImageColorPallate from "./color";
import { ImageCompressor } from "./image-compressor";
import { QRCodeGenerator } from "./qr-code";

const ToolsPage = () => {
  return (
    <div className="mt-3">
      <Tabs defaultValue="tab-7">
        <ScrollArea className="whitespace-nowrap">
          <div className="flex justify-center space-x-6">
            <TabsList className="h-auto gap-2 rounded-none border-b border-border bg-transparent px-0 py-1 text-foreground">
              <TabsTrigger
                value="tab-7"
                className="relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
              >
                Image Compressor
                <span className="ml-1 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs font-normal leading-none text-[#000000] no-underline group-hover:no-underline">
                  New
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="tab-1"
                className="relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
              >
                QR Code Generator
                <span className="ml-1 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs font-normal leading-none text-[#000000] no-underline group-hover:no-underline">
                  New
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="tab-6"
                className="relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
              >
                Image Color
              </TabsTrigger>

              <TabsTrigger
                value="tab-2"
                className="relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
              >
                Round Corner
              </TabsTrigger>

              <TabsTrigger
                value="tab-4"
                className="relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
              >
                SVG to PNG
              </TabsTrigger>
              <TabsTrigger
                value="tab-5"
                className="relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
              >
                Word Counter
              </TabsTrigger>
            </TabsList>
          </div>
          <ScrollBar className="hidden" orientation="horizontal" />
        </ScrollArea>

        <TabsContent value="tab-6">
          <ImageColorPallate />
        </TabsContent>
        <TabsContent value="tab-1">
          <QRCodeGenerator />
        </TabsContent>
        <TabsContent value="tab-2">
          <RoundedTool />
        </TabsContent> 
        <TabsContent value="tab-4">
          <SVGTool />
        </TabsContent>
        <TabsContent value="tab-5">
          <WordCounter />
        </TabsContent>
        <TabsContent value="tab-7">
          <ImageCompressor />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ToolsPage;
