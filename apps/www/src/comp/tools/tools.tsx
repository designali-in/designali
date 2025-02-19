import AIConverter from "@/comp/tools/aiconverter";
import WordCounter from "@/comp/tools/wordcount";
import { RoundedTool } from "@/src/comp/tools/rounded-tool";
import { SquareTool } from "@/src/comp/tools/square-tool";
import { SVGTool } from "@/src/comp/tools/svg-tool";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ToolsPage = () => {
  return (
    <div className="mt-3">
      <Tabs defaultValue="tab-1">
        <ScrollArea className="whitespace-nowrap">
          <div className="flex justify-center space-x-6">
            <TabsList className="h-auto gap-2 rounded-none border-b border-border bg-transparent px-0 py-1 text-foreground">
              <TabsTrigger
                value="tab-1"
                className="relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
              >
                Image Converter
              </TabsTrigger>
              <TabsTrigger
                value="tab-2"
                className="relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
              >
                Round Corner
              </TabsTrigger>
              <TabsTrigger
                value="tab-3"
                className="relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
              >
                Square Image
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
        </ScrollArea>
        <TabsContent value="tab-1">
          <AIConverter />
        </TabsContent>
        <TabsContent value="tab-2">
          <RoundedTool />
        </TabsContent>
        <TabsContent value="tab-3">
          <SquareTool />
        </TabsContent>
        <TabsContent value="tab-4">
          <SVGTool />
        </TabsContent>
        <TabsContent value="tab-5">
          <WordCounter />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ToolsPage;
