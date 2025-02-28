"use client";

import { DotPattern } from "@/components/ui/backgrounds/dot-pattern";

export function Quote() {
  return (
    <>
      <div className="">
        <div className="relative flex flex-col items-center border-y">
          <DotPattern width={5} height={5} /> 
           
          <div className="relative z-20 rounded-[40px] py-6 md:p-10 xl:py-20">
            <p className="md:text-md text-ali text-xs lg:text-lg xl:text-2xl">
              I believe
            </p>
            <div className="text-2xl tracking-tighter md:text-5xl lg:text-7xl xl:text-8xl">
              <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                <h1 className="font-semibold">
                  <span className="pointer-events-none z-10 whitespace-pre-wrap leading-none tracking-tighter ">
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
                  <span className="pointer-events-none z-10 whitespace-pre-wrap leading-none tracking-tighter  ">
                    ideas are quicker to
                  </span>
                </h1>
              </div>
              <h1 className="font-semibold">
                <span className="pointer-events-none z-10 whitespace-pre-wrap   leading-none tracking-tighter  ">
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
