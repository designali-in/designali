"use client";

import { Suspense } from "react";
import DIconsPage from "@/comp/products/dicons";

import { DIcons } from "../../../../../../../packages/icons/src";

const DIconsHome = () => {
  return (
    <div className="mt-14 border-t">
      <Suspense>
        <DIconsPage Categories={DIcons} />
      </Suspense>
    </div>
  );
};

export default DIconsHome;
