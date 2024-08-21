import { Suspense } from "react";
import { DIconGenerator } from "@/components/dicons/main";

export const metadata = {
  title: "DIcons - Designali",
  description:
    "This section includes end-to-end guides for developing Next.js 13 apps.",
};

export default function Home() {
  return (
    <main className="">
      <div className="mt-14 border-b border-t">
        <Suspense>
          <DIconGenerator />
        </Suspense>
      </div>
    </main>
  );
}
