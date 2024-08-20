import { Suspense } from "react";

import { IconGenerator } from "./_components/icon-generator";

export default function Home() {
  return (
    <div className="mt-14">
      <Suspense>
        <IconGenerator />
      </Suspense>
    </div>
  );
}
