import { FAQ } from "@/comp/marketing/home/faq";
import { Graaadients } from "@/src/comp/products/cards";

import { cn } from "@/lib/utils";

import { Avegra } from "../../fonts";

export const metadata = {
  title: "Products - Designali",
  description: "A design agency with a touch of magic.",
};

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
                "z-20 inline-flex items-baseline bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text pb-1 text-center text-7xl text-transparent dark:bg-gradient-to-r dark:from-slate-200 dark:via-slate-400 dark:to-slate-200 dark:bg-clip-text md:text-8xl",
              )}
            >
              The latest.
            </h3>{" "}
            <hr className="bg-ali mx-auto my-4 mb-16 h-1 w-6 rounded border-0"></hr>
          </div>
        </div>
        <div className="mx-auto max-w-3xl px-6 md:max-w-7xl xl:px-0">
          <Graaadients />
          <FAQ />
        </div>
      </div>
    </div>
  );
}
