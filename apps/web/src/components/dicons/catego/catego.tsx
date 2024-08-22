/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import React from "react";

import { Accessibility } from "./items/accessibility";
import { Accounts } from "./items/accounts";
import { Animals } from "./items/animals";
import { Building } from "./items/building";

interface AccessProps {
  onChangeIcon;
  settings;
  filteredAccount;
  filteredAnimal;
  filteredAccess;
  filteredBuildings;
}

export const MainIcons = ({
  onChangeIcon,
  settings,
  filteredAccount,
  filteredBuildings,
  filteredAccess,
  filteredAnimal,
}: AccessProps) => {
  return (
    <main id="categories">
      <div className="grid gap-10">
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
        <Building
          onChangeIcon={onChangeIcon}
          settings={settings}
          filteredBuildings={filteredBuildings}
        />
      </div>
    </main>
  );
};
