import type { Components } from "contentlayer/generated";
import Link from "next/link";

import { componentsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
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
