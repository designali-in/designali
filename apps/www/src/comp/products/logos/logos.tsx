"use client";

import React, { useEffect, useState } from "react";

import { FilterChips } from "./filter-chips";
import { LogosList } from "./logos-list";

const LogoPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  return (
    <div className="mt-3">
      <FilterChips
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />
      <LogosList
        category={selectedFilter === "all" ? undefined : selectedFilter}
        onCategoryChange={setSelectedFilter}
      />
    </div>
  );
};

export default LogoPage;
