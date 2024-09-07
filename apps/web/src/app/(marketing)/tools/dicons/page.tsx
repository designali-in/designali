import { Suspense } from "react";

import { IconGenerator } from "./_components/icon-generator";

export const metadata = {
  title: "DIcons Editor - Designali",
  description: "A design agency with a touch of magic.",
};

export default function HomePage() {
  return (
    <main className="">
      <Suspense>
        <IconGenerator />
      </Suspense>
      <div className="absolute inset-0 -z-50 overflow-hidden">
        <svg
          aria-hidden="true"
          className="fixed left-[max(50%,25rem)] top-28 h-[64rem] w-[128rem] -translate-x-1/2 stroke-slate-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] dark:stroke-slate-800"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={100}
              height={100}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>

          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
    </main>
  );
}
