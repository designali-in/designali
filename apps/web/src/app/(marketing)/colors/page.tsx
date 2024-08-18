import { getColors } from "@/lib/colors";
import { ColorBW } from "@/src/components/common/colors/color-bw";
import { ColorPalette } from "@/src/components/common/colors/color-palette";
import PageTitle from "@/src/components/mdx/page-title";
import { ScrollProgress } from "@/src/components/ui/scroll-progress";

const colors = getColors();

export default function HomePage() {
  return (
    <main className="mx-auto my-20 mt-40 max-w-7xl px-6">
      <ScrollProgress className="top-14" />
      <PageTitle title="Colors" description={``} />

      <div className="py-6 text-center">
        <h1 className="text-xl font-semibold">Tailwind Colors</h1>
        <p className="text-xs">
          Tailwind CSS colors in HSL, RGB, and HEX formats.
        </p>
      </div>
      <ColorBW />
      <div id="colors" className="grid scroll-mt-20 gap-4">
        {colors.map((colorPalette) => (
          <ColorPalette key={colorPalette.name} colorPalette={colorPalette} />
        ))}
      </div>
    </main>
  );
}
