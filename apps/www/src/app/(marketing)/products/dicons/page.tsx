import { Suspense } from "react";
import DIconsPage from "@/comp/products/dicons";
import { CardSkeleton } from "@/src/comp/uis/card-skeleton";

export const metadata = {
  title: "DIcons - Designali",
  description: "A design agency with a touch of magic.",
};

export default function Home() {
  return (
    <main className="">
      <div className="mt-14 border-b border-t">
        <Suspense fallback={<CardSkeleton />}>
          <DIconsPage />
        </Suspense>
      </div>
    </main>
  );
}
