"use client";

import React from "react";
import Logos from "@/comp/common/logos";

const Bento = () => {
  return (
    <div className="relative">
      <div className="mx-auto mt-14 max-w-5xl px-6">
        <h1 className="my-6 text-center text-xs font-semibold uppercase tracking-[.3em] text-primary/60">
          Worked with Brands Like
        </h1>
        <Logos />
      </div>
    </div>
  );
};

export default Bento;
