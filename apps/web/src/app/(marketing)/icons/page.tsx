import { Suspense } from "react";

import { IconGenerator } from "./_components/icon-generator";

export default function HomePage() {
  return (
    <main className="">
      <Suspense>
        <IconGenerator />
      </Suspense>
    </main>
  );
}
