// Dependencies: pnpm install dicons

import { DIcons } from "dicons";

export default function BannerDemo() {
  return (
    <div className="dark bg-muted px-4 py-3 text-foreground">
      <div className="flex flex-col justify-between gap-2 md:flex-row">
        <div className="flex grow gap-3">
          <DIcons.Blocks
            className="mt-0.5 h-4 w-4 shrink-0 opacity-60"
            strokeWidth={1}
            aria-hidden="true"
          />
          <div className="flex grow flex-col justify-between gap-2 md:flex-row md:items-center">
            <p className="text-sm">
              We’ve just added something amazing to elevate your Designali
              experience!
            </p>
            <a href="#" className="group whitespace-nowrap text-sm font-medium">
              Learn more
              <DIcons.ArrowRight
                className="-mt-0.5 ms-1 inline-flex h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5"
                strokeWidth={1}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
