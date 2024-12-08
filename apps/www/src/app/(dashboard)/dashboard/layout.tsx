"use client";

import React from "react";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default function Users({ children }: ProtectedLayoutProps) {
  const pathname = usePathname();
  return (
    <div className="">
      <main className=" ">
        <header className="flex h-16 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {pathname
                  .split("/")
                  .filter((segment) => segment) // Remove empty segments
                  .map((segment, index, array) => {
                    const href = `/${array.slice(0, index + 1).join("/")}`;
                    const isLast = index === array.length - 1;

                    return (
                      <React.Fragment key={href}>
                        {index > 0 && <BreadcrumbSeparator />}
                        <BreadcrumbItem>
                          {isLast ? (
                            <BreadcrumbPage>
                              {segment.charAt(0).toUpperCase() +
                                segment.slice(1)}
                            </BreadcrumbPage>
                          ) : (
                            <BreadcrumbLink href={href}>
                              {segment.charAt(0).toUpperCase() +
                                segment.slice(1)}
                            </BreadcrumbLink>
                          )}
                        </BreadcrumbItem>
                      </React.Fragment>
                    );
                  })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
