import { Suspense } from "react";
import { DIconCategories } from "@/components/dicons/catego";

export const metadata = {
  title: "DIcons Categories - Designali",
  description: "A design agency with a touch of magic.",
};

export default function Home() {
  return (
    <div className="mt-14 border-b border-t">
      <Suspense>
        <DIconCategories />
      </Suspense>
    </div>
  );
}
