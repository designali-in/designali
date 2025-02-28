"use client";

import { Suspense } from "react";
import DIconsPage from "@/components/lobby/products/dicons";

import { DIcons } from "../../../../../../../packages/icons/src";

const DIconsHome = () => {
  return (
    <div className="mt-3 border-t">
      <Suspense>
        <DIconsPage Categories={DIcons} />
      </Suspense>
    </div>
  );
};

export default DIconsHome;
