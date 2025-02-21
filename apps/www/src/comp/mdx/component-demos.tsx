import Link from "next/link";
import { Button } from "@/registry/default/ui/button";
import { Avegra } from "@/src/app/fonts";
import { cn } from "@/src/lib/utils";

import { ComponentPreview } from "./layers/component-preview-home";

export function CardsDemo() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 xl:px-0">
      <h3
        className={cn(
          Avegra.className,
          "z-20  justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text py-3 text-center text-4xl text-transparent dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-200 dark:to-slate-100 dark:bg-clip-text md:text-7xl",
        )}
      >
        Open Source. <span className="text-ali"> Open Code.</span>
      </h3>
      <p className="mx-auto max-w-3xl text-center text-sm">
        Beautifully designed components that you can copy and paste into your
        apps. Accessible. Customizable. Open Source.
      </p>
      <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        <ComponentPreview name="dot-pattern-01" />
        <ComponentPreview name="macbook-pro-1" />
        <ComponentPreview name="grid-pattern-01" />
        <ComponentPreview name="accordion-01" />
        <ComponentPreview name="tooltip-07" />
        <ComponentPreview name="slider-18" />
        <ComponentPreview name="ripple-01" />
        <ComponentPreview name="mac-1" />
        <ComponentPreview name="retro-grid-01" />
      </div>
      <Link href={"/components"} className="flex justify-center">
        <Button>View all Components</Button>
      </Link>
    </div>
  );
}
