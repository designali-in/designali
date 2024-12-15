import { ThemeWrapper } from "@/comp/common/theme-wrapper";
import { ThemeCustomizer } from "@/src/comp/common/ui/theme-customizer";
import PageTitle from "@/src/comp/mdx/page-title";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import "public/registry/themes.css";

import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/registry/default/ui/button";
import { Skeleton } from "@/registry/default/ui/skeleton";
import { BlocksNav } from "@/src/comp/products/blocks/blocks-nav";

export default function BlocksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <main className="mx-auto my-20 mt-28 max-w-7xl px-6 xl:px-0">
        <PageTitle
          title={"Blocks"}
          description={` Designali an extensive collection of copy-and-paste components for quickly building app UIs. It's free, open-source, and ready to drop into your projects.`}
        />

        <Link
          className="mt-6 flex justify-center"
          href={"https://www.instagram.com/designali.in/"}
          target="_blank"
        >
          <Button variant="outline">Request a Block</Button>
        </Link>
        <ThemeWrapper>
          <ThemeCustomizer />
          <div
            id="blocks"
            className="border-grid mt-6 scroll-mt-24 border-b border-t"
          >
            <div className="container flex items-center py-4">
              <BlocksNav />
            </div>
          </div>
          {children}
        </ThemeWrapper>
      </main>
    </Suspense>
  );
}
