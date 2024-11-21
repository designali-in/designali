/* eslint-disable @typescript-eslint/no-unnecessary-condition */
"use client";

import type { TableOfContents } from "@/lib/toc";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";

import { UpdatesToolbarDoc } from "../../common/shate-toolbar";

interface TocProps {
  toc: TableOfContents;
}

export function DashboardTableOfContents({ toc }: TocProps) {
  const itemIds = React.useMemo(
    () =>
      toc.items
        ? toc.items

            .flatMap((item) => [item.url, item.items?.map((item) => item.url)])
            .flat()
            .filter(Boolean)
            .map((id) => id?.split("#")[1])
        : [],
    [toc],
  );
  const activeHeading = useActiveItem(itemIds);
  const mounted = useMounted();

  if (!toc.items) {
    return null;
  }

  return mounted ? (
    <div className="space-y-2">
      <UpdatesToolbarDoc posts={""} />
      <p className="text-xs">On This Page</p>
      <Tree tree={toc} activeItem={activeHeading} />
    </div>
  ) : null;
}

function useActiveItem(itemIds: (string | undefined)[]) {
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` },
    );

    itemIds.forEach((id) => {
      if (!id) {
        return;
      }

      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds.forEach((id) => {
        if (!id) {
          return;
        }

        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}

interface TreeProps {
  tree: TableOfContents;
  level?: number;
  activeItem?: string | null;
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree.items?.length && level < 3 ? (
    <ul className={cn("m-0 list-none", { "pl-3": level !== 1 })}>
      {tree.items.map((item, index) => {
        return (
          <li key={index} className={cn("mt-0 pt-3")}>
            <a
              href={item.url}
              className={cn(
                "inline-block no-underline",
                item.url === `#${activeItem}`
                  ? "text-md font-semibold"
                  : "text-sm text-slate-600 dark:text-slate-400",
              )}
            >
              {item.title}
            </a>
            {item.items?.length ? (
              <Tree tree={item} level={level + 1} activeItem={activeItem} />
            ) : null}
          </li>
        );
      })}
    </ul>
  ) : null;
}
