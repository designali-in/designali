"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@designali/ui";

import type { SidebarNavItem } from "./types";

export interface GuidesSidebarNavProps {
  items: SidebarNavItem[];
}

export function GuidesSidebarNav({ items }: GuidesSidebarNavProps) {
  const pathname = usePathname();

  return items.length ? (
    <div className="mb-10 w-full">
      {items.map((item, index) => (
        <div key={index} className={cn("pb-0")}>
          <h4 className="text-md mb-1 mt-10 rounded-xl px-2 py-1 font-medium">
            {item.title}
          </h4>
          {item.items ? (
            <GuidesSidebarNavItems items={item.items} pathname={pathname} />
          ) : null}
        </div>
      ))}
    </div>
  ) : null;
}

interface GuidesSidebarNavItemsProps {
  items: SidebarNavItem[];
  pathname: string | null;
}

export function GuidesSidebarNavItems({
  items,
  pathname,
}: GuidesSidebarNavItemsProps) {
  return items.length ? (
    <div className="grid grid-flow-row auto-rows-max space-y-1 text-sm">
      {items.map((item, index) =>
        !item.disabled && item.href ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "flex w-full items-center rounded-xl p-2 px-4 text-slate-600 hover:bg-slate-100 dark:text-slate-400 hover:dark:bg-slate-900",
              {
                "text-md bg-slate-100 font-bold text-ali dark:bg-slate-900 dark:text-ali":
                  pathname === item.href,
              },
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
          </Link>
        ) : (
          <span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">
            {item.title}
          </span>
        ),
      )}
    </div>
  ) : null;
}

export interface DocsSidebarNavProps {
  items: SidebarNavItem[];
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname();

  return items.length ? (
    <div className="mb-10 w-full">
      {items.map((item, index) => (
        <div key={index} className={cn("pb-0")}>
          <h4 className="text-md mb-1 mt-10 rounded-xl px-2 py-1 font-medium">
            {item.title}
          </h4>
          {item.items ? (
            <DocsSidebarNavItems items={item.items} pathname={pathname} />
          ) : null}
        </div>
      ))}
    </div>
  ) : null;
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[];
  pathname: string | null;
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  return items.length ? (
    <div className="grid grid-flow-row auto-rows-max space-y-1 text-sm">
      {items.map((item, index) =>
        !item.disabled && item.href ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "flex w-full items-center rounded-xl p-2 px-4 text-slate-600 hover:bg-slate-100 dark:text-slate-400 hover:dark:bg-slate-900",
              {
                "text-md bg-slate-100 font-bold text-ali dark:bg-slate-900 dark:text-ali":
                  pathname === item.href,
              },
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
          </Link>
        ) : (
          <span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">
            {item.title}
          </span>
        ),
      )}
    </div>
  ) : null;
}

export interface DocsSidebarNavProps {
  items: SidebarNavItem[];
}

export function DiconsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname();

  return items.length ? (
    <div className="mb-10 w-full">
      {items.map((item, index) => (
        <div key={index} className={cn("pb-0")}>
          {item.items ? (
            <DiconsSidebarNavItems items={item.items} pathname={pathname} />
          ) : null}
        </div>
      ))}
    </div>
  ) : null;
}

interface DiconsSidebarNavItemsProps {
  items: SidebarNavItem[];
  pathname: string | null;
}

export function DiconsSidebarNavItems({
  items,
  pathname,
}: DiconsSidebarNavItemsProps) {
  return items.length ? (
    <div className="grid grid-flow-row auto-rows-max space-y-1 text-sm">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(
            "flex w-full items-center rounded-xl p-1 px-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 hover:dark:bg-slate-900",
            {
              "text-md bg-slate-100 font-bold text-ali dark:bg-slate-900 dark:text-ali":
                pathname === item.href,
            },
          )}
          target={item.external ? "_blank" : ""}
          rel={item.external ? "noreferrer" : ""}
        >
          {item.title}
        </Link>
      ))}
    </div>
  ) : null;
}
