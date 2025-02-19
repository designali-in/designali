"use client";

import React, { useEffect, useState } from "react";
import { FilterChips } from "@/comp/products/logos/filter-chips";
import { LogosList } from "@/comp/products/logos/logos-list";

const LogoPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  return (
    <div className="mt-6">
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
