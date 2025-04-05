import { CarouselSpacing } from "@/components/lobby/agency/carousel";
import Projects from "@/components/lobby/agency/projects";
import { InstagramFeed } from "@/components/common/insta";

import { Work } from "./Work";
import { cn } from "@/src/lib/utils";
import { Avegra } from "@/src/lib/fonts/fonts";

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
      <h3
        className={cn(
          Avegra.className,
          "z-20 mx-auto mb-10 max-w-2xl justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text py-3 text-center text-4xl text-transparent dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-200 dark:to-slate-100 dark:bg-clip-text md:text-7xl"
        )}
      >
        Welcome to My <span className="text-ali"> Creative</span> Playground!
      </h3>
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
