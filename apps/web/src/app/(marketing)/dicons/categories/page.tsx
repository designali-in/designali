import { Suspense } from "react";
import { DIconCategories } from "@/components/dicons/catego";

export const metadata = {
  title: "DIcons Categories - Designali",
  description:
    "This section includes end-to-end guides for developing Next.js 13 apps.",
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
