"use client";

import DotPattern from "@/components/ui/dot-pattern";

export function Quote() {
  return (
    <>
      <div className="mx-auto mb-20 max-w-7xl px-6 xl:px-0">
        <div className="relative flex flex-col items-center border border-slate-200 dark:border-slate-800">
          <DotPattern width={11} height={11} />
          <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-ali text-white" />
          <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-ali text-white" />
          <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-ali text-white" />
          <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-ali text-white" />

          <div className="relative z-20 mx-auto max-w-7xl rounded-[40px] p-10 xl:py-20">
            <p className="md:text-md text-xs text-ali lg:text-lg xl:text-2xl">
              {" "}
              I believe{" "}
            </p>
            <div className="text-xl tracking-tighter md:text-5xl lg:text-7xl xl:text-8xl">
              <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                <h1 className="font-semibold">"Design should be</h1>
                <p className="font-thin">easy to</p>
              </div>
              <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                <p className="font-thin">understand</p>
                <h1 className="font-semibold">because</h1>
                <p className="font-thin">simple</p>
              </div>
              <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                <p className="font-thin">ideas</p>
                <h1 className="font-semibold">are quicker to</h1>
              </div>
              <h1 className="font-semibold">grasp..."</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
