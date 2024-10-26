import { HighlighterItem, HighlightGroup } from "@/src/comp/uis/highlighter";
import { Particles } from "@/src/comp/uis/particles";

export interface DExperience {
  post: string;
}

export const DService: DExperience[] = [
  {
    post: "Design & Development*",
  },
  {
    post: "Easy-to-use no-code content management with training",
  },
  {
    post: "Deployment assistance",
  },
  {
    post: "User experience consultation",
  },
  {
    post: "Performance optimisation",
  },
  {
    post: "SEO, social media, and analytics setup",
  },
  {
    post: "Browser compatibility",
  },
  {
    post: "Security practices implementation",
  },
  {
    post: "Full responsiveness almost all devices.",
  },
];

export function Include() {
  return (
    <div id="include" className="my-20">
      <div className="flex justify-center">
        <h1 className="inline-flex items-baseline bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text py-6 text-xl font-semibold text-transparent dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-200 dark:to-slate-400 dark:bg-clip-text sm:text-3xl">
          All the projects include:
        </h1>
      </div>
      <p className="mx-auto max-w-3xl pb-10 text-center text-xs text-slate-600 dark:text-slate-400">
        We kick off every project by really tuning in to what you want. Next, we
        split your project into super detailed, easy-to-handle tasks. This way,
        we make sure every little thing gets the attention and effort it needs.
      </p>
      <div className="grid gap-3 md:grid-cols-3">
        {DService.map((Experience) => (
          <HighlightGroup className="group">
            <div
              key={Experience.post}
              className="group/item h-full md:col-span-6 lg:col-span-4"
              data-aos="fade-down"
            >
              <HighlighterItem className="h-full rounded-3xl">
                <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100/50 dark:border-slate-800 dark:bg-black">
                  <Particles
                    className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                    quantity={50}
                    color={"#ffffff"}
                    vy={-0.2}
                  />

                  <div className="grid items-center justify-between">
                    <div className="grid items-center justify-between gap-5 p-6">
                      <h3 className="inline-flex items-baseline bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text pb-1 text-transparent dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-200 dark:to-slate-400 dark:bg-clip-text">
                        <span className="text-md md:text-xl">
                          {Experience.post}
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
          </HighlightGroup>
        ))}
      </div>
    </div>
  );
}
