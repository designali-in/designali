/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import React from "react";

import { Accessibility } from "./items/accessibility";
import { Accounts } from "./items/accounts";
import { Animals } from "./items/animals";
import { Arrows } from "./items/arrows";
import { Building } from "./items/building";
import { Charts } from "./items/charts";

interface AccessProps {
  onChangeIcon;
  settings;
  filteredAccount;
  filteredAnimal;
  filteredAccess;
  filteredBuildings;
  filteredCharts;
  filteredArrows;
}

export const MainIcons = ({
  onChangeIcon,
  settings,
  filteredAccount,
  filteredBuildings,
  filteredAccess,
  filteredAnimal,
  filteredCharts,
  filteredArrows,
}: AccessProps) => {
  return (
    <main id="categories">
      <div className="mb-10 grid gap-10">
        <Accessibility
          onChangeIcon={onChangeIcon}
          settings={settings}
          filteredAccess={filteredAccess}
        />
        <Accounts
          onChangeIcon={onChangeIcon}
          settings={settings}
          filteredAccount={filteredAccount}
        />
        <Animals
          onChangeIcon={onChangeIcon}
          settings={settings}
          filteredAnimal={filteredAnimal}
        />
        <Arrows
          onChangeIcon={onChangeIcon}
          settings={settings}
          filteredArrows={filteredArrows}
        />
        <Building
          onChangeIcon={onChangeIcon}
          settings={settings}
          filteredBuildings={filteredBuildings}
        />
        <Charts
          onChangeIcon={onChangeIcon}
          settings={settings}
          filteredCharts={filteredCharts}
        />
      </div>
    </main>
  );
};
