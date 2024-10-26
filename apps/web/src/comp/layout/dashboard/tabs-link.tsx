"use client";

import type { LinkProps } from "next/link";
import type { ReactNode } from "react";
import React from "react";
import Link from "next/link";
import { cn } from "@designali/ui";
import { ScrollArea, ScrollBar } from "@designali/ui/scroll-area";

export interface TabsContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Partial<TabsContextProps> {}

export function TabsContainer({
  className,
  direction = "horizontal",
  position = "end",
  children,
}: TabsContainerProps) {
  return (
    <TabsContext.Provider value={{ direction, position }}>
      <ScrollArea className="whitespace-nowrap">
        <nav
          className={cn(
            "flex h-16 items-center justify-center px-2 md:h-12",
            {
              "items-center overflow-x-auto": direction === "horizontal",
            },
            className,
          )}
        >
          <ul
            className={cn("flex", {
              "flex-row": direction === "horizontal",
              "flex-col": direction === "vertical",
            })}
          >
            {children}
          </ul>
        </nav>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </TabsContext.Provider>
  );
}

export interface TabsLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  active?: boolean;
  disabled?: boolean;
}

export function TabsLink({
  children,
  active,
  className,
  disabled,
  ...props
}: TabsLinkProps) {
  const { direction, position } = useTabs();
  return (
    <li
      className={cn("flex shrink-0 list-none border-transparent", {
        "rounded-full bg-ali/25": active,
        "pointer-events-none": disabled,
        "": position === "end" && direction === "horizontal",
        "": position === "start" && direction === "vertical",
        // ... missing t, r
      })}
    >
      <Link
        className={cn(
          "text-xs text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white",
          {
            "font-bold text-black dark:text-white": active,
            "px-4 py-2": direction === "horizontal",
            "px-4 py-2.5": direction === "vertical",
          },
          className,
        )}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
}

// --------------

interface TabsContextProps {
  direction: "horizontal" | "vertical";
  position: "start" | "end";
}

const TabsContext = React.createContext<TabsContextProps | null>(null);

const useTabs = () => {
  const tabsContext = React.useContext(TabsContext);

  if (!tabsContext) {
    throw new Error("useTabs has to be used within <TabsContext.Provider>");
  }

  return tabsContext;
};
