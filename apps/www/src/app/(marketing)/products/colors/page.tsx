import { getColors } from "@/lib/colors";
import { ColorBW } from "@/src/comp/common/colors/color-bw";
import ColorConverter from "@/src/comp/common/colors/color-convert";
import { ColorPalette } from "@/src/comp/common/colors/color-palette";
import PageTitle from "@/src/comp/mdx/page-title";
import { ScrollProgress } from "@/src/comp/uis/scroll-progress";

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
      <div id="colors" className="grid scroll-mt-20 gap-4">
        {colors.map((colorPalette) => (
          <ColorPalette key={colorPalette.name} colorPalette={colorPalette} />
        ))}
      </div>
    </main>
  );
}
