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
      <div className="fixed top-24 z-30 hidden h-full w-full shrink-0 overflow-y-auto border-r border-dotted border-slate-400 dark:border-slate-600 md:sticky md:block">
        <aside className="border-grid fixed hidden h-[calc(100vh-4rem)] w-full shrink-0 border-r border-dotted md:sticky md:block">
          <div className="no-scrollbar h-full overflow-auto  pr-4 ">
            <ComponentsSidebarNav items={componentsConfig.sidebarNav} />
          </div>
        </aside>
      </div>
      {children}
    </div>
  );
}
