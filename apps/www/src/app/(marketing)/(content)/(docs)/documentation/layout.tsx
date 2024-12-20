import { DocumentationSidebarNav } from "@/comp/mdx/doc/sidebar-nav";

import { documentationConfig } from "@/config/docs";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DocumentationLayoutProps {
  children: React.ReactNode;
}

export default function DocumentationLayout({
  children,
}: DocumentationLayoutProps) {
  return (
    <div className="flex-1 px-6 md:grid md:grid-cols-[220px_1fr] md:gap-6  lg:gap-10">
      <aside className="fixed top-24 z-30 hidden h-full w-full shrink-0 overflow-y-auto border-r border-slate-400 dark:border-slate-600 md:sticky md:block">
        <ScrollArea className="h-full pr-6">
          <DocumentationSidebarNav items={documentationConfig.sidebarNav} />
        </ScrollArea>
      </aside>
      {children}
    </div>
  );
}
