import Link from "next/link";
import { AppSidebar } from "@/comp/dashboard/sidebar/app-sidebar";
import { DIcons } from "dicons";

import { getCurrentUser } from "@/lib/session";
import { SidebarProvider } from "@/components/ui/sidebar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default async function Users({ children }: ProtectedLayoutProps) {
  const user = await getCurrentUser();

  if (user || user.role !== "USER")
    return (
      <div className="">
        <SidebarProvider>
          <AppSidebar user={user} />
          <main className="relative m-3 w-full rounded-xl border bg-white shadow-sm dark:bg-black md:ml-0 ">
            {children}
            <div className=" mt-6">
              <div className="absolute bottom-3 left-0 right-0 flex flex-col justify-between text-center text-xs ">
                <div className="flex flex-row items-center justify-center gap-1 text-slate-600 dark:text-slate-400">
                  <span> © </span>
                  <span>{new Date().getFullYear()}</span>
                  <span>Made with</span>
                  <DIcons.Heart className="text-ali mx-1 h-4 w-4 animate-pulse" />
                  <span> by </span>
                  <span className="hover:text-ali dark:hover:text-ali cursor-pointer text-black dark:text-white">
                    <Link
                      aria-label="Logo"
                      className="font-bold"
                      href="https://www.instagram.com/aliimam.in/"
                      target="_blank"
                    >
                      Ali Imam {""}
                    </Link>
                  </span>
                  -
                  <span className="hover:text-ali dark:hover:text-ali cursor-pointer text-slate-600 dark:text-slate-400">
                    <Link aria-label="Logo" className="" href="/">
                      Designali
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </main>
        </SidebarProvider>
      </div>
    );
}
