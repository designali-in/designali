"use client";

import { Number } from "dshapes";

export default function Home() {
  return (
    <div>
      <div>
        <div className="mx-auto mt-40 max-w-3xl px-6 md:max-w-7xl">
          <p className="lg:text-md my-2 text-center text-xs font-light uppercase tracking-widest text-slate-600 dark:text-slate-400">
            TAKE A LOOK AT WHAT’S NEW RIGHT NOW.
          </p>
          <div className="grid items-center justify-center px-8 pb-1 text-center">
            <hr className="mx-auto my-4 mb-16 h-1 w-6 rounded border-0 bg-ali"></hr>
          </div>
        </div>
        <div className="flex justify-center py-20">
          <Number index={2} />
        </div>
      </div>
    </div>
  );
}
