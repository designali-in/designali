import { CarouselSpacing } from "@/comp/common/carousel";
import Projects from "@/comp/common/projects";
import { InstagramFeed } from "@/src/comp/common/insta";
import PageTitle from "@/src/comp/mdx/page-title";

import { Work } from "./Work";

export const metadata = {
  title: "Works - Designali",
  description: "A design agency with a touch of magic.",
};

export default function Portfolio() {
  return (
    <main className="mt-40 px-6 xl:px-0">
      <p className="lg:text-md my-2 text-center text-xs font-light uppercase tracking-widest text-slate-600 dark:text-slate-400">
        Welcome to My Portfolio
      </p>
      <PageTitle title="Crafting Aesthetics, Shaping Brands" description={``} />
      <InstagramFeed />
      <div className="mx-auto max-w-3xl md:max-w-7xl">
        <div className="mb-10">
          <Projects />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-3xl md:max-w-7xl">
        <Work />
      </div>
      <CarouselSpacing />
    </main>
  );
}
