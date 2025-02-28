// Dependencies: pnpm install dicons

import { AlertCircle } from "dicons";

export default function AlertDemo() {
  return (
    <div className="rounded-lg border border-dotted border-border px-4 py-3">
      <p className="text-sm">
        <AlertCircle
          className="-mt-0.5 me-3 inline-flex h-5 w-5 text-red-500"
          strokeWidth={1}
          aria-hidden="true"
        />
        An error occurred!
      </p>
    </div>
  );
}
