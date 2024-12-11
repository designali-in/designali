"use client";

import type { User } from "next-auth";
import * as React from "react";
import Link from "next/link";
import { Logo } from "@/comp/logo";
import CommandMenu from "@/comp/marketing/layout/header/search";
import { ThemeToggle } from "@/comp/marketing/layout/header/themetoggle";
import { cn } from "@/src/lib/utils";
import { DIcons } from "dicons";

import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: DIcons.SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Community",
          url: "/dashboard/community",
        },
        {
          title: "Poll",
          url: "/dashboard/poll",
        },

        {
          title: "Urls",
          url: "/dashboard/urls",
        },
        {
          title: "Downloads",
          url: "/dashboard/downloads",
        },
      ],
    },
    {
      title: "Agency",
      url: "/dashboard/agency",
      icon: DIcons.SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Projects",
          url: "/dashboard/agency/projects",
        },
        {
          title: "Designs",
          url: "/dashboard/agency/designs",
        },
      ],
    },
    {
      title: "Tools",
      url: "/dashboard/tools",
      icon: DIcons.Settings2,
      isActive: false,
      items: [
        {
          title: "Image Converter",
          url: "/dashboard/tools/image-converter",
        },
        {
          title: "SVG to PNG",
          url: "/dashboard/tools/svg-to-png",
        },
        {
          title: "Round Corner",
          url: "/dashboard/tools/round-corner",
        },
        {
          title: "Square Image",
          url: "/dashboard/tools/square-image",
        },
        {
          title: "Word Counter",
          url: "/dashboard/tools/word-counter",
        },
      ],
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: DIcons.Settings,
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
    {
      title: "Designs",
      url: "/designs",
      icon: DIcons.Shapes,
      isActive: false,
      items: [
        {
          title: "Components",
          url: "/components",
        },
        {
          title: "UI",
          url: "/ui",
        },
        {
          title: "Colors",
          url: "/colors",
        },
        {
          title: "Tools",
          url: "/tools",
        },
        {
          title: "Agency",
          url: "/agency",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Contact",
      url: "/contact",
      icon: DIcons.Mail,
    },
    {
      title: "Feedback",
      url: "https://www.instagram.com/designali.in/",
      icon: DIcons.Send,
    },
  ],
};

// {{user} : UserAccountNavProps}

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email" | "id">;
}

export function AppSidebar({
  user,
  ...props
}: React.ComponentProps<typeof Sidebar> & UserAccountNavProps) {
  const { isMobile } = useSidebar();
  return (
    <Sidebar collapsible="icon" variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="h-10" size="lg">
              <Link
                aria-label="Logo"
                href="/"
                className="flex items-center justify-center lg:flex"
              >
                <div className=" flex aspect-square size-10 items-center justify-center rounded-lg">
                  <Logo className="  h-5" />
                </div>
                <div className="grid flex-1  text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Designali</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <div className="px-2">
          <Separator />
        </div>
        <NavSecondary items={data.navSecondary} className="" />
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

const admindata = {
  navMain: [
    {
      title: "Admin",
      url: "/admin",
      icon: DIcons.SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Graphic",
          url: "/admin/graphic",
        },
        {
          title: "Users",
          url: "/admin/users",
        },
      ],
    },
    {
      title: "Agency",
      url: "/admin/projects",
      icon: DIcons.SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Projects",
          url: "/admin/projects",
        },
        {
          title: "Tickets",
          url: "/admin/tickets",
        },
      ],
    },
    {
      title: "Settings",
      url: "/admin/settings",
      icon: DIcons.Settings,
      isActive: true,
      items: [
        {
          title: "General",
          url: "/admin/settings",
        },
        {
          title: "Team",
          url: "/admin/teams",
        },
      ],
    },
    {
      title: "Designs",
      url: "/designs",
      icon: DIcons.Shapes,
      isActive: false,
      items: [
        {
          title: "Components",
          url: "/components",
        },
        {
          title: "UI",
          url: "/ui",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: DIcons.Monitor,
    },
    {
      title: "Contact",
      url: "/contact",
      icon: DIcons.Mail,
    },
    {
      title: "Feedback",
      url: "https://www.instagram.com/designali.in/",
      icon: DIcons.Send,
    },
  ],
};

export function AdminAppSidebar({
  user,
  ...props
}: React.ComponentProps<typeof Sidebar> & UserAccountNavProps) {
  const { isMobile } = useSidebar();
  return (
    <Sidebar collapsible="icon" variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="h-12" size="lg">
              <Link
                aria-label="Logo"
                href="/"
                className="flex items-center justify-center lg:flex"
              >
                <div className=" flex aspect-square size-10 items-center justify-center rounded-lg">
                  <Logo className="ml-2 h-5" />
                </div>
                <div className="grid flex-1  text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Designali</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={admindata.navMain} />
        <div className="px-2">
          <Separator />
        </div>
        <NavSecondary items={admindata.navSecondary} className="" />
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
