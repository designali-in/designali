 
import { Copy, Download, Link } from "lucide-react";

export function ComponentCardSkeleton() {
  return (
    <div className="animate-pulse p-[1px]">
      <div className="relative mb-3 aspect-[4/3]">
        <div className="absolute inset-0">
          <div className="shadow-base relative h-full w-full overflow-hidden rounded-lg">
            <div className="h-full w-full rounded-lg bg-muted" />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="shadow-base h-8 w-8 rounded-full bg-muted" />
        <div className="flex min-w-0 flex-grow items-center justify-between">
          <div className="mr-3 min-w-0 flex-1">
            <div className="h-4 w-3/4 rounded bg-muted" />
          </div>
          <div className="h-3 w-12 rounded bg-muted" />
        </div>
      </div>
    </div>
  );
}

export function CategoryCardSkeleton() {
  return (
    <div className="animate-pulse p-[1px]">
      <div className="relative mb-4 aspect-[4/3]">
        <div className="absolute inset-0">
          <div className="shadow-base relative h-full w-full overflow-hidden rounded-lg">
            <div className="h-full w-full rounded-lg bg-muted" />
          </div>
        </div>
      </div>
      <div className="h-4 w-2/4 rounded bg-muted" />
    </div>
  );
}

export function DesignEngineerCardSkeleton() {
  return (
    <div className="block animate-pulse p-[1px]">
      <div className="shadow-base relative overflow-hidden rounded-lg bg-background p-6">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/10" />

        <div className="relative flex flex-col gap-6 lg:flex-row">
          {/* Author Info Section */}
          <div className="relative z-10 w-full lg:w-1/2">
            <div className="flex items-start gap-4">
              <div className="shadow-base h-12 w-12 shrink-0 rounded-full bg-muted" />
              <div className="flex flex-1 flex-col">
                <div className="flex flex-col">
                  <div className="h-6 w-1/2 rounded bg-muted" />
                  <div className="mt-3 space-y-1.5">
                    <div className="h-4 w-3/4 rounded bg-muted" />
                    <div className="h-4 w-1/2 rounded bg-muted" />
                  </div>
                </div>
                <div className="mt-4 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded bg-muted" />
                    <div className="h-4 w-24 rounded bg-muted" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded bg-muted" />
                    <div className="h-4 w-28 rounded bg-muted" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Components Cards Section - Empty Space */}
          <div className="relative min-h-[156px] w-full lg:min-h-[150px] lg:w-1/2" />
        </div>
      </div>
    </div>
  );
}

export function ProCardSkeleton() {
  return (
    <div className="group flex animate-pulse flex-col p-[1px]">
      <div className="relative mb-3 aspect-[16/10]">
        <div className="absolute inset-0">
          <div className="shadow-base relative h-full w-full overflow-hidden rounded-lg">
            <div className="h-full w-full rounded-lg bg-muted" />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="shadow-base h-8 w-8 rounded-full bg-muted" />
        <div className="flex min-w-0 flex-grow items-center justify-between">
          <div className="mr-3 flex-1">
            <div className="h-4 w-3/4 rounded bg-muted" />
          </div>
          <div className="h-4 w-12 rounded bg-muted" />
        </div>
      </div>
    </div>
  );
}

export function TemplateCardSkeleton() {
  return (
    <div className="animate-pulse p-[1px]">
      <div className="relative mb-3 aspect-[16/10]">
        <div className="absolute inset-0">
          <div className="shadow-base relative h-full w-full overflow-hidden rounded-lg">
            <div className="h-full w-full rounded-lg bg-muted" />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="shadow-base h-8 w-8 rounded-full bg-muted" />
        <div className="flex min-w-0 flex-grow items-center justify-between">
          <div className="min-w-0 flex-1">
            <div className="h-4 w-3/4 rounded bg-muted" />
            <div className="mt-1 h-3 w-1/2 rounded bg-muted" />
          </div>
          <div className="ml-3 h-4 w-12 rounded bg-muted" />
        </div>
      </div>
    </div>
  );
}

export function LogoCardSkeleton() {
  const shapes = [
    "rounded-full",
    "rounded-md",
    "rounded-sm",
    "rounded-lg",
    "rounded-xl",
  ];
  const randomShape = shapes[Math.floor(Math.random() * shapes.length)];

  return (
    <div className="group flex min-h-[190px] flex-col items-center justify-center rounded-md border border-neutral-200 p-4 transition-colors duration-100 dark:border-neutral-800">
      <div className={`mb-4 mt-2 h-10 w-10 bg-muted ${randomShape}`} />
      <div className="mb-3 flex flex-col items-center justify-center space-y-1">
        <div className="h-[22px] w-24 rounded bg-muted" />
        <div className="flex items-center justify-center space-x-1">
          <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-0.5 font-mono text-xs font-medium text-neutral-600 transition-colors duration-100 hover:bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-800/50 dark:text-neutral-400 dark:hover:bg-neutral-700/50">
            Category
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-1">
        <button
          disabled
          className="flex items-center space-x-2 rounded-md p-2 opacity-50 duration-100"
        >
          <Copy className="h-4 w-4 stroke-[1.8] text-muted-foreground" />
        </button>
        <button
          disabled
          className="flex items-center space-x-2 rounded-md p-2 opacity-50 duration-100"
        >
          <Download className="h-4 w-4 stroke-[1.8] text-muted-foreground" />
        </button>
        <button
          disabled
          className="flex items-center space-x-2 rounded-md p-2 opacity-50 duration-100"
        >
          <Link className="h-4 w-4 stroke-[1.8] text-muted-foreground" />
        </button>
      </div>
    </div>
  );
}
