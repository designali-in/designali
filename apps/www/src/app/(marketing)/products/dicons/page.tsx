import { Suspense } from "react";
import DIconsPage from "@/comp/products/dicons";

export const metadata = {
  title: "DIcons - Designali",
  description: "A design agency with a touch of magic.",
};

export default function Home() {
  return (
    <main className="">
      <div className="mt-14 border-b border-t">
        <Suspense>
          <DIconsPage />
        </Suspense>
      </div>
    </main>
  );
}
