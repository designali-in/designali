"use client";

import * as React from "react";
import Image from "next/image";
import { DIcons } from "dicons";

const CloserLook = () => {
  return (
    <section
      id="highlights"
      className="relative min-h-screen w-full overflow-hidden p-10"
    >
      <div className="just relative flex min-h-screen flex-col py-10">
        <div className="grid justify-between md:flex">
          <h1 className="text-md hover:underline sm:text-4xl">
            Take a closer look.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default CloserLook;
