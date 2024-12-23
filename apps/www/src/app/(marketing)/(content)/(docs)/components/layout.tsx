import { ComponentsSidebarNav } from "@/comp/mdx/doc/sidebar-nav";

import { componentsConfig } from "@/config/docs";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata = {
  title: "Components - Designali",
  description: "A design agency with a touch of magic.",
};

interface DesignLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DesignLayoutProps) {
  return (
    <div className="flex-1 px-6 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:gap-10">
      <div className="fixed top-24 z-30 hidden h-full w-full shrink-0 overflow-y-auto border-r border-slate-400 dark:border-slate-600 md:sticky md:block">
        <ScrollArea className="h-screen pr-6">
          <ComponentsSidebarNav items={componentsConfig.sidebarNav} />
        </ScrollArea>
      </div>
      {children}
    </div>
  );
}
