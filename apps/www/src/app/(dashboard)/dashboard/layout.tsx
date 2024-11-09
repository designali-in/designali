import { AppSidebar } from "@/comp/dashboard/sidebar/app-sidebar";

import { getCurrentUser } from "@/lib/session";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default async function Admin({ children }: ProtectedLayoutProps) {
  const user = await getCurrentUser();

  if (user || user.role !== "USER")
    return (
      <div className="relative mt-14">
        <SidebarProvider>
          <AppSidebar />
          <main>{children}</main>
        </SidebarProvider>
      </div>
    );
}
