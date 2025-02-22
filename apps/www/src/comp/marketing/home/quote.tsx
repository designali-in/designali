"use client";

import DotPattern from "@/src/comp/uis/dot-pattern";

export function Quote() {
  return (
    <>
      <div className="mx-auto mb-10 max-w-7xl px-6 md:mb-20 xl:px-0">
        <div className="border-ali relative flex flex-col items-center border">
          <DotPattern width={5} height={5} />

          <div className="bg-ali absolute -left-1.5 -top-1.5 h-3 w-3 text-white" />
          <div className="bg-ali absolute -bottom-1.5 -left-1.5 h-3 w-3 text-white" />
          <div className="bg-ali absolute -right-1.5 -top-1.5 h-3 w-3 text-white" />
          <div className="bg-ali absolute -bottom-1.5 -right-1.5 h-3 w-3 text-white" />

          <div className="relative z-20 mx-auto max-w-7xl rounded-[40px] py-6 md:p-10 xl:py-20">
            <p className="md:text-md text-ali text-xs lg:text-lg xl:text-2xl">
              I believe
            </p>
            <div className="text-2xl tracking-tighter md:text-5xl lg:text-7xl xl:text-8xl">
              <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                <h1 className="font-semibold">
                  <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-l from-[#458fff] via-[#b7ff00] to-[#ff0000] bg-clip-text leading-none tracking-tighter text-transparent drop-shadow-[0_0_20px_#f5f5f4] dark:drop-shadow-[0_0_20px_#1c1917]">
                    "Design should be easy
                  </span>
                </h1>
                <p className="font-thin">to</p>
              </div>
              <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                <p className="font-thin">understand because simple</p>
              </div>
              <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                <h1 className="font-semibold">
                  <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-l from-[#45ff64] via-[#ff00d9] to-[#006eff] bg-clip-text leading-none tracking-tighter text-transparent drop-shadow-[0_0_20px_#f5f5f4] dark:drop-shadow-[0_0_20px_#1c1917]">
                    ideas are quicker to
                  </span>
                </h1>
              </div>
              <h1 className="font-semibold">
                <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-l from-[#ffcd4e] via-[#ff6a00] to-[#ff0000] bg-clip-text leading-none tracking-tighter text-transparent drop-shadow-[0_0_20px_#f5f5f4] dark:drop-shadow-[0_0_20px_#1c1917]">
                  grasp..."
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
