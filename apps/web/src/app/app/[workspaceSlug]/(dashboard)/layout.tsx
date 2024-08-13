import type { ReactNode } from "react";
import { AppTabs } from "@/components/layout/dashboard/app-tabs";

// TODO: make the container min-h-screen and the footer below!
export default  function AppLayout({
  children,
}: {
  children: ReactNode;
  params: { workspaceSlug: string };
}) {
  
  return (
    <div>
      <AppTabs />
      <main className="px-4">{children}</main>
    </div>
  );
}
