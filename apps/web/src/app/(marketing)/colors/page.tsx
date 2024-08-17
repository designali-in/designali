import { getColors } from "@/lib/colors";
import { ColorPalette } from "@/src/components/common/colors/color-palette";
import PageTitle from "@/src/components/mdx/page-title";
import { AuroraBackground } from "@/src/components/ui/aurora-bg";
import { ScrollProgress } from "@/src/components/ui/scroll-progress";

const colors = getColors();

export default function HomePage() {
  return (
    <main>
      <ScrollProgress className="top-14" />
      <AuroraBackground classID="">
        <div className="mt-20 md:mb-20 md:mt-40">
          <PageTitle title="Colors" description={``} />
        </div>
      </AuroraBackground>
      <div className="mx-auto mb-20 max-w-7xl px-6 md:my-10">
        <div className="py-6 text-center">
          <h1 className="text-xl font-semibold">Tailwind Colors</h1>
          <p className="text-xs">
            Tailwind CSS colors in HSL, RGB, and HEX formats.
          </p>
        </div>
        <div id="colors" className="grid scroll-mt-20 gap-4">
          {colors.map((colorPalette) => (
            <ColorPalette key={colorPalette.name} colorPalette={colorPalette} />
          ))}
        </div>
      </div>
    </main>
  );
}
