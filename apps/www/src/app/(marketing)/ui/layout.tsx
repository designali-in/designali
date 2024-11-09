"use client";

import { usePathname } from "next/navigation";
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
} from "@designali/ui/breadcrumb";

import "public/registry/themes.css";

import { Suspense } from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").pop();
  return (
    <Suspense>
      <main className="mx-auto my-20 mt-40 max-w-7xl px-6 xl:px-0">
        <PageTitle
          title={lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)}
          description={` Designali an extensive collection of copy-and-paste components for quickly building app UIs. It's free, open-source, and ready to drop into your projects.`}
        />
        <div className="mt-4 flex justify-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/ui">Ui</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  {lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <ThemeWrapper>
          <ThemeCustomizer />
          {children}
        </ThemeWrapper>
      </main>
    </Suspense>
  );
}
