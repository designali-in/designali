import { MainNav } from "@/comp/mdx/doc/main-nav";
import { DocsSearch } from "@/comp/mdx/doc/search";
import { ComponentsSidebarNav } from "@/comp/mdx/doc/sidebar-nav";

import { componentsConfig } from "@/config/docs";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="mt-14 flex flex-col">
      <div className="sticky z-40 w-full overflow-clip border-b border-t border-dotted border-slate-400 bg-slate-100/60 backdrop-blur-md backdrop-filter hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900/60 hover:dark:bg-slate-950">
        <div className="flex h-14 items-center space-x-4 px-6 sm:justify-between sm:space-x-0 md:px-8">
          <MainNav items={componentsConfig.mainNav}>
            <ComponentsSidebarNav items={componentsConfig.sidebarNav} />
          </MainNav>
          <div className="flex flex-1 items-center space-x-4 sm:justify-end">
            <div className="flex-1 sm:grow-0">
              <DocsSearch />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
