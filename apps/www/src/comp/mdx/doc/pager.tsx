"use client";

import type { Components } from "contentlayer/generated";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DIcons } from "dicons";

import { componentsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { buttonVariants } from "@/components/ui/button";

interface DocsPagerProps {
  doc: Components;
}

export function DocsPager({ doc }: DocsPagerProps) {
  const pager = getPagerForDoc(doc);

  if (!pager) {
    return null;
  }

  return (
    <div className="mb-10 flex flex-row items-center justify-between">
      {pager.prev && (
        <Link
          href={pager.prev.href}
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          {pager.prev.title}
        </Link>
      )}
      {pager.next && (
        <Link
          href={pager.next.href}
          className={cn(buttonVariants({ variant: "outline" }), "ml-auto")}
        >
          {pager.next.title}
        </Link>
      )}
    </div>
  );
}

export function DocsPager2({ doc }: DocsPagerProps) {
  const pathname = usePathname();
  const pager = getPagerForDoc(doc);

  if (!pager) {
    return null;
  }

  return (
    <div className="mb-6 flex items-center justify-between">
      <Breadcrumb>
        <BreadcrumbList>
          {pathname
            .split("/")
            .filter((segment) => segment) // Remove empty segments
            .map((segment, index, array) => {
              const href = `/${array.slice(0, index + 1).join("/")}`;
              const isLast = index === array.length - 1;

              return (
                <React.Fragment key={href}>
                  {index > 0 && <BreadcrumbSeparator />}
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>
                        {segment.charAt(0).toUpperCase() + segment.slice(1)}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={href}>
                        {segment.charAt(0).toUpperCase() + segment.slice(1)}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              );
            })}
        </BreadcrumbList>
      </Breadcrumb>

      <div className=" flex items-center gap-2">
        {pager.next && (
          <Link
            href={pager.next.href}
            className={cn(buttonVariants({ variant: "ghost" }), "ml-auto")}
          >
            {pager.next.title}
            <DIcons.ArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
}

export function getPagerForDoc(doc: Components) {
  const flattenedLinks = [null, ...flatten(componentsConfig.sidebarNav), null];
  const activeIndex = flattenedLinks.findIndex(
    (link) => doc.slug === link?.href,
  );
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null;
  return {
    prev,
    next,
  };
}

export function flatten(links: { items?: { items?: any }[] }[]) {
  return links.reduce((flat, link) => {
    return flat.concat(link.items ? flatten(link.items) : link);
  }, []);
}
