import { DesignsSidebarNav } from "@/comp/mdx/doc/sidebar-nav";
import { ScrollArea } from "@designali/ui/scroll-area";

import { designsConfig } from "@/config/docs";

interface DesignsLayoutProps {
  children: React.ReactNode;
}

export default function DesignsLayout({ children }: DesignsLayoutProps) {
  return (
    <div className="flex-1 px-6 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[260px_1fr] lg:gap-10">
      <aside className="fixed top-24 z-30 hidden h-full w-full shrink-0 overflow-y-auto border-r border-slate-400 dark:border-slate-600 md:sticky md:block">
        <ScrollArea className="h-full pr-6">
          <DesignsSidebarNav items={designsConfig.sidebarNav} />
        </ScrollArea>
      </aside>
      {children}
    </div>
  );
}
