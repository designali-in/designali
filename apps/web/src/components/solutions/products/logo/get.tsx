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
      "3 Logo Design with Concepts",
      "Font include",
      "Color pallate",
      "Logo Mockups",
      "Resize for required all dimentions",
      "Graphic Elements (patterns and style graphics)",
      "App Icongraphy & Favicon",
      "Logo guideline",
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
            Logo
            <br />
            Guideline
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
            <div>AI, PSD, PDF, JPG, PNG, SVG</div>
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
              className="z-10 flex h-[450px] w-full flex-col items-center justify-between rounded-2xl border bg-white p-8 shadow-xl dark:bg-black dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] sm:p-10"
            >
              {" "}
              <ScrollArea className="h-[450px] w-full">
                <div>
                  <p className="pb-4 text-slate-400 dark:text-slate-600">
                    Logo design is the art of turning your business identity
                    into a visual masterpiece. It's not just a symbol; it's your
                    brand's personality etched in a single mark.
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
                <Image
                  src="https://utfs.io/f/8671e2d6-802d-48b3-943a-a18cb5169f48-lyh2sl.jpg"
                  alt="Your Image"
                  height={400}
                  width={400}
                  className="h-[450px] w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <DotPattern width={5} height={5} />
      </div>
    ),
  },
];

export function LogoGet() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
