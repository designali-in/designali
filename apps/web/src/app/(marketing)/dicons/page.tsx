import { Suspense } from "react";

import { IconGenerator } from "./_components/icon-generator";

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
          <IconGenerator />
        </Suspense>
      </div>
    </main>
  );
}
