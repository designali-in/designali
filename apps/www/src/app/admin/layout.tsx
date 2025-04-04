import Link from "next/link";
import { redirect } from "next/navigation"; 

import { getCurrentUser } from "@/lib/session";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/src/components/ui/sidebar";
import { Header } from "@/src/components/layout/header";
import { AdminAppSidebar } from "@/src/components/dashboard/sidebar/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/src/components/ui/separator";
import { Heart } from "lucide-react";
interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default async function Users({ children }: ProtectedLayoutProps) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login"); // Redirect to login if no user is found
  }

  if (!user || user.role !== "ADMIN") {
    redirect("/dashboard"); // Redirect to dashboard if no user or if user is not an admin
  }
  
    return (
      <div className=""> 
       <Header />
       <SidebarProvider>
          <AdminAppSidebar user={user} />
          <SidebarInset style={{ marginTop: '18px' }} className="border rounded-lg shadow-md mb-2 mx-2">
            <header className="flex h-16 shrink-0 items-center gap-2">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="/admin">
                       Admin
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Designing</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header> 
            
            {children}
            <div className="mt-6">
            <div className="absolute bottom-3 left-0 right-0 flex flex-col justify-between text-center text-xs ">
              <div className="flex border-t pt-3 flex-row items-center justify-center gap-1 text-slate-600 dark:text-slate-400">
                <span> © </span>
                <span>{new Date().getFullYear()}</span>
                <span>Made with</span>
                <Heart className="text-ali mx-1 h-4 w-4 animate-pulse" />
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
          </SidebarInset>
        </SidebarProvider>
         
      </div>
    );
}
