"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { CardSkeleton } from "@/src/comp/uis/card-skeleton";

const DIconsPage = dynamic(() => import("@/comp/products/dicons"), {
  ssr: false,
});

const DIconsHome = () => {
  return (
    <div className="mt-14 border-b border-t">
      <Suspense fallback={<CardSkeleton />}>
        <DIconsPage />
      </Suspense>
    </div>
  );
};

export default DIconsHome;
