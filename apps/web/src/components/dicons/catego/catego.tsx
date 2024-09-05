/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import React from "react";

import {
  Accessibility,
  Accounts,
  Animals,
  Arrows,
  Brands,
  Building,
  Charts,
  Coding,
  Communication,
  Connectivity,
  Cursor,
  Design,
} from "./items";

interface AccessProps {
  onChangeIcon;
  settings;
  filteredAccount;
  filteredAnimal;
  filteredAccess;
  filteredBuildings;
  filteredBrands;
  filteredCharts;
  filteredArrows;
  filteredCommunication;
  filteredCursor;
  filteredDesign;
  filteredConnectivity;
  filteredCoding;
}

export const MainIcons = ({
  onChangeIcon,
  settings,
  filteredAccount,
  filteredBuildings,
  filteredBrands,
  filteredAccess,
  filteredAnimal,
  filteredCharts,
  filteredArrows,
  filteredCommunication,
  filteredConnectivity,
  filteredCursor,
  filteredDesign,
  filteredCoding,
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
        <Brands
          onChangeIcon={onChangeIcon}
          settings={settings}
          filteredBrands={filteredBrands}
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
        <Communication
          onChangeIcon={onChangeIcon}
          settings={settings}
          filteredCommunication={filteredCommunication}
        />
        <Connectivity
          onChangeIcon={onChangeIcon}
          settings={settings}
          filteredConnectivity={filteredConnectivity}
        />
        <Cursor
          onChangeIcon={onChangeIcon}
          settings={settings}
          filteredCursor={filteredCursor}
        />
        <Design
          onChangeIcon={onChangeIcon}
          settings={settings}
          filteredDesign={filteredDesign}
        />
        <Coding
          onChangeIcon={onChangeIcon}
          settings={settings}
          filteredCoding={filteredCoding}
        />
      </div>
    </main>
  );
};
