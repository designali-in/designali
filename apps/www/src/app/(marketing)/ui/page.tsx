import Link from "next/link";
import { Button } from "@/registry/default/designali/ui/button";

import "public/registry/themes.css";

export const metadata = {
  title: "UI - Designali",
  description: "A design agency with a touch of magic.",
};

export default function HomePage() {
  return (
    <main>
      <div className="mx-auto mt-10 grid max-w-xl grid-cols-2 gap-3">
        <Link href="/ui/buttons">
          <Button
            className="flex h-full w-full justify-between gap-8 py-3 text-left"
            icon="ArrowRight"
            variant="outline"
          >
            <div className="space-y-1">
              <h3>Buttons</h3>
              <p className="whitespace-break-spaces font-normal text-muted-foreground">
                50+ ui components
              </p>
            </div>
          </Button>
        </Link>
        <Link href="/ui/inputs">
          <Button
            className="flex h-full w-full justify-between gap-8 py-3 text-left"
            icon="ArrowRight"
            variant="outline"
          >
            <div className="space-y-1">
              <h3>Inputs</h3>
              <p className="whitespace-break-spaces font-normal text-muted-foreground">
                50+ ui components
              </p>
            </div>
          </Button>
        </Link>
        <Link href="/ui/mockups">
          <Button
            className="flex h-full w-full justify-between gap-8 py-3 text-left"
            icon="ArrowRight"
            variant="outline"
          >
            <div className="space-y-1">
              <h3>Mockups</h3>
              <p className="whitespace-break-spaces font-normal text-muted-foreground">
                5+ ui apple mockups
              </p>
            </div>
          </Button>
        </Link>
      </div>
    </main>
  );
}
