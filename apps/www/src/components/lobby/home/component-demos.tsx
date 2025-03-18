import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avegra } from "@/lib/fonts/fonts";
import { cn } from "@/src/lib/utils";

import { ComponentPreview } from "@/components/mdx/layers/component-preview";

export function CardsDemo() {
  return (
    <div className="p-6 mt-10">
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
      </div>
      <Link href={"/docs"} className="flex justify-center">
        <Button>View all Components</Button>
      </Link>
    </div>
  );
}
