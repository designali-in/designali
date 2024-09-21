/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import React from "react";

import { Brands } from "./items";

interface AccessProps {
  onChangeIcon;
  settings;
  filteredBrands;
}

export const MainIcons = ({
  onChangeIcon,
  settings,
  filteredBrands,
}: AccessProps) => {
  return (
    <main id="categories">
      <div className="mb-10 grid gap-10">
        <Brands
          onChangeIcon={onChangeIcon}
          settings={settings}
          filteredBrands={filteredBrands}
        />
      </div>
    </main>
  );
};
