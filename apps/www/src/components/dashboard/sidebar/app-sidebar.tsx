"use client";

import type { User } from "next-auth";
import * as React from "react";
import { 
  Frame,
  GalleryVerticalEnd, 
  Mail,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavSecondary } from "./nav-secondary"; 

// This is sample data.
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
          url: "/dashboard/downloads",
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
          url: "/dashboard/settings/teams",
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
      title: "Designali",
      url: "/",
      icon: GalleryVerticalEnd,
      isActive: false,
      items: [
        {
          title: "About",
          url: "/about",
        },
        {
          title: "Graphic",
          url: "/graphic",
        },
        {
          title: "Agency",
          url: "/agency",
        },
        {
          title: "Products",
          url: "/products",
        },
        {
          title: "DIcons",
          url: "/products/dicons",
        },
        {
          title: "Graaadients",
          url: "/products/graaadients",
        },
        {
          title: "Components",
          url: "/components",
        },
        {
          title: "Colors",
          url: "/products/colors/generate",
        },
      ],
    },
  ],
  adminnavMain: [
    {
      title: "Admin",
      url: "/admin",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Assets",
          url: "/admin/assets",
        },
        {
          title: "Tags",
          url: "/admin/tags",
        },
        {
          title: "Users",
          url: "/admin/users",
        },
        {
          title: "Teams",
          url: "/admin/teams",
        },
        {
          title: "Newsletter",
          url: "/admin/newsletter",
        },
         
      ],
    },
    {
      title: "Agency",
      url: "/admin/agency",
      icon: SquareTerminal,
      isActive: false,
      items: [
        
      ],
    },

    {
      title: "Settings",
      url: "/admin/settings",
      icon: Settings2,
      isActive: false,
      items: [
        {
          title: "General",
          url: "/admin/settings",
        },
        {
          title: "Team",
          url: "/admin/settings/teams",
        },
        
      ],
    },
    {
      title: "Designali",
      url: "/",
      icon: GalleryVerticalEnd,
      isActive: false,
      items: [
        {
          title: "About",
          url: "/about",
        },
        {
          title: "Graphic",
          url: "/graphic",
        },
        {
          title: "Agency",
          url: "/agency",
        },
        {
          title: "Products",
          url: "/products",
        },
        {
          title: "DIcons",
          url: "/products/dicons",
        },
        {
          title: "Graaadients",
          url: "/products/graaadients",
        },
        {
          title: "Components",
          url: "/components",
        },
        {
          title: "Colors",
          url: "/products/colors/generate",
        },
      ],
    },
  ],
  navSecondary: [
   {
      title: "Contact",
      url: "/contact",
      icon: Mail,
    },
    {
      title: "Feedback",
      url: "https://www.instagram.com/designali.in/",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email" | "id">;
}

export function AppSidebar({
  user,
  ...props
}: React.ComponentProps<typeof Sidebar> & UserAccountNavProps) {
  return (
    <Sidebar variant="floating" collapsible="icon" {...props}>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        
      </SidebarContent>
      <SidebarFooter>
        <NavSecondary items={data.navSecondary}/>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

export function AdminAppSidebar({
  user,
  ...props
}: React.ComponentProps<typeof Sidebar> & UserAccountNavProps) {
  return (
    <Sidebar variant="floating" collapsible="icon" {...props}>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <NavMain items={data.adminnavMain} />
        <NavProjects projects={data.projects}/>
      </SidebarContent>
      <SidebarFooter>
        <NavSecondary items={data.navSecondary}/>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
