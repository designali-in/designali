/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import React from "react";

import { Accessibility } from "./items/accessibility";
import { Accounts } from "./items/accounts";
import { Animals } from "./items/animals";

interface AccessProps {
  onChangeIcon;
  settings;
  filteredAccount;
  filteredAnimal;
  filteredAccess;
}

export const MainIcons = ({
  onChangeIcon,
  settings,
  filteredAccount,
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
      </div>
    </main>
  );
};
