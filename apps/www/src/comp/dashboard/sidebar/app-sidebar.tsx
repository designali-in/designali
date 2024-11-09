"use client";

import type { User } from "next-auth";
import * as React from "react";
import Link from "next/link";
import { Logo } from "@/comp/logo";
import CommandMenu from "@/comp/marketing/layout/header/search";
import { ThemeToggle } from "@/comp/marketing/layout/header/themetoggle";
import { cn } from "@/src/lib/utils";
import { Settings2, SquareTerminal } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Urls",
          url: "/dashboard/urls",
        },
        {
          title: "Downloads",
          url: "/dashboard/#",
        },
      ],
    },

    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings2,
      isActive: true,
      items: [
        {
          title: "General",
          url: "/dashboard/settings",
        },
        {
          title: "Team",
          url: "/dashboard/teams",
        },
        {
          title: "Billing",
          url: "/dashboard/billing",
        },
        {
          title: "Appearance",
          url: "/dashboard/settings/appearance",
        },
        {
          title: "Notifications",
          url: "/dashboard/settings/notifications",
        },
      ],
    },
  ],
};

// {{user} : UserAccountNavProps}

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email">;
}

export function AppSidebar({
  user,
  ...props
}: React.ComponentProps<typeof Sidebar> & UserAccountNavProps) {
  return (
    <Sidebar collapsible="icon" variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="h-12" size="lg" asChild>
              <Link
                aria-label="Logo"
                href="/"
                className="flex items-center justify-center px-2 lg:flex"
              >
                <div className="  flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Logo className="ml-2 h-6" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Designali</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
        <div className={cn("grid flex-wrap gap-1 md:flex")}>
          <ThemeToggle />
          <CommandMenu />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
