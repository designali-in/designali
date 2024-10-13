import { CarouselSpacing } from "@/components/common/carousel";
import Projects from "@/components/common/projects";
import { InstagramFeed } from "@/src/components/common/insta";
import PageTitle from "@/src/components/mdx/page-title";

import { Work } from "./Work";

export const metadata = {
  title: "Works - Designali",
  description: "A design agency with a touch of magic.",
};

export default function Portfolio() {
  return (
    <main>
      <div className="mx-auto mt-40 max-w-3xl px-6 md:max-w-7xl xl:px-0">
        <p className="lg:text-md my-2 text-center text-xs font-light uppercase tracking-widest text-slate-600 dark:text-slate-400">
          Welcome to My Portfolio
        </p>
        <PageTitle
          title="Crafting Aesthetics, Shaping Brands"
          description={``}
        />
        <InstagramFeed />
        <div className="mb-10">
          <Projects />
        </div>
      </div>
      <CarouselSpacing />
      <div className="mx-auto mt-10 max-w-3xl px-6 md:max-w-7xl xl:px-0">
        <Work />
      </div>
    </main>
  );
}
