import * as React from "react";
import { BlockDisplay } from "@/comp/products/blocks/block-display";

import { getAllBlockIds } from "@/lib/blocks";

export default async function BlocksPage() {
  const blocks = (await getAllBlockIds()).filter(
    (name) => !name.startsWith("chart-"),
  );
  return (
    <main className="mx-auto mt-10 grid max-w-7xl gap-3 px-0 xl:px-0">
      <div className="gap-3 md:flex md:flex-row-reverse md:items-start">
        <div className="grid flex-1 gap-24 lg:gap-48">
          {blocks.map((name, index) => (
            <BlockDisplay key={`${name}-${index}`} name={name} />
          ))}
        </div>
      </div>
    </main>
  );
}
