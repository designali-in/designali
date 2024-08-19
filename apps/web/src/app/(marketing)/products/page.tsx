import { FAQ } from "@/components/home/faq";
import PageTitle from "@/src/components/mdx/page-title";
import { Graaadients } from "@/src/components/services/products/cards";
import { cn } from "@designali/ui";

import { Avegra } from "../../fonts";

export default function Home() {
  return (
    <div>
      <div>
        <div className="mx-auto mt-40 max-w-3xl px-6 md:max-w-7xl">
          <p className="lg:text-md my-2 text-center text-xs font-light uppercase tracking-widest text-slate-600 dark:text-slate-400">
            TAKE A LOOK AT WHAT’S NEW RIGHT NOW.
          </p>
          <div className="grid items-center justify-center px-8 pb-1 text-center">
            <h3
              className={cn(
                Avegra.className,
                "z-20 inline-flex items-baseline bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600 bg-clip-text pb-1 text-center text-7xl text-transparent dark:bg-gradient-to-r dark:from-slate-600 dark:via-slate-200 dark:to-slate-600 dark:bg-clip-text md:text-8xl",
              )}
            >
              The latest.
            </h3>{" "}
            <hr className="mx-auto my-4 mb-16 h-1 w-6 rounded border-0 bg-ali"></hr>
          </div>
        </div>
        <div className="mx-auto mt-20 max-w-3xl px-6 md:max-w-7xl">
          <PageTitle
            title="Free"
            description={`The right price for you,  whoever you are`}
          />
          <Graaadients />
        </div>
        <FAQ />
      </div>
    </div>
  );
}
