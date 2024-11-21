import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

import { cn, truncate } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface MdxPagerItem {
  title: string;
  slug: string;
}

interface MdxPagerProps extends React.HTMLAttributes<HTMLDivElement> {
  currentItem: MdxPagerItem;
  allItems: MdxPagerItem[];
}

export function MdxPager({
  currentItem,
  allItems,
  className,
  ...props
}: MdxPagerProps) {
  const pager = getPager(currentItem, allItems);

  if (!pager) {
    return null;
  }

  return (
    <div
      className={cn("flex items-center justify-between", className)}
      {...props}
    >
      {pager.prev ? (
        <Button variant="outline" size="lg">
          <Link
            aria-label="Previous post"
            href={pager.prev.slug}
            className="flex items-center gap-2"
          >
            {truncate(pager.prev.title, 20)}
            <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      ) : null}
      {pager.next ? (
        <Button variant="outline" size="lg">
          <Link
            aria-label="Next post"
            href={pager.next.slug}
            className="flex items-center gap-2"
          >
            {truncate(pager.next.title, 20)}
            <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      ) : null}
    </div>
  );
}

export function getPager(currentItem: MdxPagerItem, allItems: MdxPagerItem[]) {
  const flattenedLinks = allItems.flat();
  const activeIndex = flattenedLinks.findIndex(
    (link) => currentItem.slug === link.slug,
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
