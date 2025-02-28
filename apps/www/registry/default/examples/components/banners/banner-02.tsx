// Dependencies: pnpm install dicons

import { DIcons } from "dicons";

export default function BannerDemo() {
  return (
    <div className="dark bg-muted px-4 py-3 text-foreground">
      <p className="text-center text-sm">
        <DIcons.Designali
          className="-mt-0.5 me-3 inline-flex h-4 w-4 opacity-60"
          aria-hidden="true"
        />
        Enhance your design workflow with real-time updates and in-depth
        analytics. 🚀
        <span className="text-muted-foreground">·</span>{" "}
        <a href="#" className="ml-2 font-medium underline hover:no-underline">
          Upgrade
        </a>
      </p>
    </div>
  );
}
