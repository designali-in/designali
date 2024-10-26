"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { adminConfig, pagesConfig } from "@/config/pages";

import { TabsContainer, TabsLink } from "./tabs-link";

export function AppTabs() {
  const selectedSegment = useSelectedLayoutSegment();

  return (
    <div className="fixed top-14 z-40 w-full border-b border-t bg-slate-100/60 backdrop-blur-md backdrop-filter hover:bg-slate-50 dark:bg-slate-900/60 hover:dark:bg-slate-950">
      <TabsContainer>
        {pagesConfig.map(({ title, segment, href }) => {
          const active = segment === selectedSegment;
          return (
            <TabsLink
              key={title}
              active={active}
              href={`/app/dashboard/${href}`}
              prefetch={false}
            >
              {title}
            </TabsLink>
          );
        })}
      </TabsContainer>
    </div>
  );
}

export function AdminTabs() {
  const selectedSegment = useSelectedLayoutSegment();

  return (
    <div className="fixed top-14 w-full border-b border-t bg-slate-100/60 backdrop-blur-md backdrop-filter hover:bg-slate-50 dark:bg-slate-900/60 hover:dark:bg-slate-950">
      <TabsContainer>
        {adminConfig.map(({ title, segment, href }) => {
          const active = segment === selectedSegment;
          return (
            <TabsLink
              key={title}
              active={active}
              href={`/admin/${href}`}
              prefetch={false}
            >
              {title}
            </TabsLink>
          );
        })}
      </TabsContainer>
    </div>
  );
}
