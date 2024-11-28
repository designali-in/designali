"use client";

import { Suspense } from "react";
import DIconsPage from "@/comp/products/dicons";

const DIconsHome = () => {
  return (
    <div className="mt-14 border-b border-t">
      <Suspense>
        <DIconsPage />
      </Suspense>
    </div>
  );
};

export default DIconsHome;
