// Dependencies: pnpm install dicons

import { TriangleAlert } from "dicons";

export default function AlertDemo() {
  return (
    <div className="rounded-lg border border-dotted border-border px-4 py-3">
      <p className="text-sm">
        <TriangleAlert
          className="-mt-0.5 me-3 inline-flex h-5 w-5 text-amber-500"
          strokeWidth={1}
          aria-hidden="true"
        />
        Some information is missing!
      </p>
    </div>
  );
}
