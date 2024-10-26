import { Suspense } from "react";
import { DIconGenerator } from "@/comp/dicons/main";

export const metadata = {
  title: "DIcons - Designali",
  description: "A design agency with a touch of magic.",
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
