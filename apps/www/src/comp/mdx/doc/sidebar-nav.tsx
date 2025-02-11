"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollspy } from "@/src/hooks/use-scrollspy";

import type { SidebarNavItem } from "./types";

import { cn } from "@/lib/utils";

export interface DocumentationSidebarNavProps {
  items: SidebarNavItem[];
}

export function DocumentationSidebarNav({
  items,
}: DocumentationSidebarNavProps) {
  const pathname = usePathname();

  return items.length ? (
    <div className="mb-10 w-full">
      {items.map((item, index) => (
        <div key={index} className={cn("pb-0")}>
          <h4 className="text-md mb-1 mt-10 rounded-xl px-2 py-1 font-medium">
            {item.title}
          </h4>
          {item.items ? (
            <DocumentationSidebarNavItems
              items={item.items}
              pathname={pathname}
            />
          ) : null}
        </div>
      ))}
    </div>
  ) : null;
}

interface DocumentationSidebarNavItemsProps {
  items: SidebarNavItem[];
  pathname: string | null;
}

export function DocumentationSidebarNavItems({
  items,
  pathname,
}: DocumentationSidebarNavItemsProps) {
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
                "text-md text-ali dark:text-ali bg-slate-100 font-bold dark:bg-slate-900":
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
            {item.label && (
              <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </span>
        ),
      )}
    </div>
  ) : null;
}

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
                "text-md text-ali dark:text-ali bg-slate-100 font-bold dark:bg-slate-900":
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
            {item.label && (
              <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </span>
        ),
      )}
    </div>
  ) : null;
}

export interface ComponentsSidebarNavProps {
  items: SidebarNavItem[];
}

export function ComponentsSidebarNav({ items }: ComponentsSidebarNavProps) {
  const pathname = usePathname();

  return items.length ? (
    <div className="z-20 mb-10 w-full">
      {items.map((item, index) => (
        <div key={index} className={cn("pb-0")}>
          <h4 className="text-md mb-1 mt-10 rounded-xl px-2 py-1 font-medium">
            {item.title}
          </h4>
          {item.items ? (
            <ComponentsSidebarNavItems items={item.items} pathname={pathname} />
          ) : null}
        </div>
      ))}
    </div>
  ) : null;
}

interface ComponentsSidebarNavItemsProps {
  items: SidebarNavItem[];
  pathname: string | null;
}

export function ComponentsSidebarNavItems({
  items,
  pathname,
}: ComponentsSidebarNavItemsProps) {
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
                "text-md text-ali dark:text-ali bg-slate-100 font-bold dark:bg-slate-900":
                  pathname === item.href,
              },
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
          </Link>
        ) : (
          <span
            key={index}
            className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60"
          >
            {item.title}
            {item.label}
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
  const activeId = useScrollspy(
    items.map((item) => item.href),
    { rootMargin: "0% 0% -80% 0%" },
  );

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
  pathname: string | null;
  items: SidebarNavItem[];
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
              "text-md text-ali dark:text-ali bg-slate-100 font-bold dark:bg-slate-900":
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

export interface DesignsSidebarNavProps {
  items: SidebarNavItem[];
}

export function DesignsSidebarNav({ items }: DesignsSidebarNavProps) {
  const pathname = usePathname();

  return items.length ? (
    <div className="mb-10 w-full">
      {items.map((item, index) => (
        <div key={index} className={cn("pb-0")}>
          <h4 className="text-md mb-1 mt-10 rounded-xl px-2 py-1 font-medium">
            {item.title}
          </h4>
          {item.items ? (
            <DesignsSidebarNavItems items={item.items} pathname={pathname} />
          ) : null}
        </div>
      ))}
    </div>
  ) : null;
}

interface DesignsSidebarNavItemsProps {
  items: SidebarNavItem[];
  pathname: string | null;
}

export function DesignsSidebarNavItems({
  items,
  pathname,
}: DesignsSidebarNavItemsProps) {
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
                "text-md text-ali dark:text-ali bg-slate-100 font-bold dark:bg-slate-900":
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
            {item.label}
          </span>
        ),
      )}
    </div>
  ) : null;
}
