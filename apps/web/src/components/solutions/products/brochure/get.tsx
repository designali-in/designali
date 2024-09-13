import Image from "next/image";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import DotPattern from "@/src/components/ui/dot-pattern";
import Ripple from "@/src/components/ui/ripple";
import { ScrollArea } from "@designali/ui/scroll-area";

import { Icons } from "../../../icons";

const tiers = [
  {
    id: "1",
    features: [
      "12 Page Design ( Cover, Back and Inside )",
      "Print and Digital files",
      "Unlimited stock photos & vector",
    ],
  },
];

const features = [
  {
    name: "Integrations",
    className: "col-span-8 p-6 md:p-10",
    background: (
      <div>
        <h1 className="flex justify-center text-2xl font-thin tracking-wide md:text-3xl lg:text-5xl">
          What will you get?
        </h1>
      </div>
    ),
  },
  {
    name: "Integrations",
    className: " col-span-4 md:col-span-2 p-6 md:p-10",
    background: (
      <div className="grid items-center justify-center gap-4">
        <h1 className="text-center text-xl font-semibold text-green-500 md:text-xl lg:text-3xl xl:text-5xl">
          Open File
        </h1>
        <Ripple />
      </div>
    ),
  },
  {
    name: "Integrations",
    className: "col-span-4 md:col-span-2  p-6 md:p-10",
    background: (
      <div className="flex items-center justify-center">
        <h1 className="text-center text-xl font-semibold text-rose-500 md:text-3xl lg:text-5xl">
          4K
        </h1>
        <p className="text-center font-mono text-xs text-slate-600 dark:text-slate-400">
          resolution
        </p>
      </div>
    ),
  },
  {
    name: "Save your files",
    className: "col-span-4 md:col-span-2 p-6 md:p-10  ",
    background: (
      <div className="grid items-center justify-center">
        <div className="">
          <h1 className="text-md text-center text-indigo-500 md:text-xl">
            Color
            <br />
            Pallate
          </h1>
        </div>
      </div>
    ),
  },
  {
    name: "Save your files",
    className: "col-span-4 md:col-span-2 p-6 md:p-10 ",
    background: (
      <div className="grid items-center justify-center gap-4 text-center">
        <div className="">
          <h1 className="text-md text-yellow-500 md:text-xl">Format</h1>
          <div className="flex h-5 flex-wrap items-center justify-center gap-4 font-mono text-[10px]">
            <div>AI, PSD, PDF</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Save your files",
    className: "col-span-8 p-6 md:p-10 md:col-span-4 lg:col-span-4",
    background: (
      <div className="grid w-full items-center gap-4">
        <div className="grid gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="z-10 flex h-[552px] w-full flex-col items-center justify-between rounded-2xl border bg-white p-8 shadow-xl dark:bg-black dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] sm:p-10"
            >
              {" "}
              <ScrollArea className="h-[552px] w-full">
                <div>
                  <p className="pb-4 text-slate-400 dark:text-slate-600">
                    The project includes the creation and layout of the cover
                    and pages, considering the typographic families, format,
                    types of paper, color palette and usage of images, seeking
                    to bring dynamics to each page and result in a project that
                    arouses curiosity in the reader.
                  </p>
                  <ul role="list" className="space-y-3 text-sm">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <Icons.check
                          className="h-6 w-5 flex-none text-green-400"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollArea>
            </div>
          ))}
        </div>

        <DotPattern width={5} height={5} />
      </div>
    ),
  },

  {
    name: "Save your files",
    className: "col-span-8 p-6 md:p-10 md:col-span-4 lg:col-span-4",
    background: (
      <div className="grid items-center gap-4">
        <div className="grid">
          <div className="z-10 flex flex-col justify-between rounded-2xl border bg-white shadow-xl dark:bg-black dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
            <div>
              <div>
                <video
                  autoPlay
                  muted
                  loop
                  className="h-full w-full rounded-2xl"
                >
                  <source
                    width={450}
                    height={450}
                    src="/videos/designali.mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>

        <DotPattern width={5} height={5} />
      </div>
    ),
  },
];

export function BrochureGet() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
