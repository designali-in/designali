import { ColorBW } from "@/src/comp/common/colors/color-bw";
import ColorConverter from "@/src/comp/common/colors/color-convert";
import { ColorPalette } from "@/src/comp/common/colors/color-palette";
import PageTitle from "@/src/comp/mdx/page-title";
import { ScrollProgress } from "@/src/comp/uis/scroll-progress";

import { getColors } from "@/lib/colors";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const colors = getColors();

export const metadata = {
  title: "Colors - Designali",
  description: "A design agency with a touch of magic.",
};

export default function HomePage() {
  return (
    <main className="mx-auto my-20 mt-40 max-w-7xl px-6 xl:px-0">
      <ScrollProgress className="top-14" />
      <PageTitle
        title="Colors"
        description={` Tailwind CSS colors in HSL, RGB, and HEX formats.`}
      />

      <ColorConverter />
      <ColorBW />
      <Tabs className="w-full" defaultValue={colors[0]?.name}>
        {/* Tab Triggers */}
        <TabsList className="w-full items-center justify-center text-center">
          <ScrollArea className="whitespace-nowrap">
            <div className="space-x-2">
              {colors.map((colorPalette) => (
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
                        : word.toLowerCase(),
                    )
                    .join(" ")}
                </TabsTrigger>
              ))}
            </div>
            <ScrollBar className="hidden" orientation="horizontal" />
          </ScrollArea>
        </TabsList>

        {/* Tab Contents */}
        {colors.map((colorPalette) => (
          <TabsContent key={colorPalette.name} value={colorPalette.name}>
            <div className="">
              <ColorPalette colorPalette={colorPalette} />
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
}
