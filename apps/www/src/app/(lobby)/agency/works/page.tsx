import { CarouselSpacing } from "@/components/lobby/agency/carousel";
import Projects from "@/components/lobby/agency/projects";
import { InstagramFeed } from "@/components/common/insta";

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

      <InstagramFeed />
      <div className="container">
        <div className="relative mt-6 overflow-hidden border-x border-t">
          <Projects />
        </div>
        <div className="relative border-x border-b">
          <Work />
        </div>
      </div>
      <CarouselSpacing />
    </main>
  );
}
