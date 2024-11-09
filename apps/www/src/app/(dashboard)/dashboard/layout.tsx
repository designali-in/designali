import Link from "next/link";
import { AppSidebar } from "@/comp/dashboard/sidebar/app-sidebar";
import { DIcons } from "dicons";

import { getCurrentUser } from "@/lib/session";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default async function Admin({ children }: ProtectedLayoutProps) {
  const user = await getCurrentUser();

  if (user || user.role !== "USER")
    return (
      <div className="">
        <SidebarProvider>
          <AppSidebar user={user} />
          <main className="relative m-3 w-full rounded-xl border bg-white shadow-sm dark:bg-black md:ml-0 ">
            <header className="flex h-16 items-center gap-2">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="/dashboard">
                        Dashboard
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Designali</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
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
