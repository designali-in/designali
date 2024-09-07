import type { Metadata } from "next";
import Image from "next/image";
import PageTitle from "@/src/components/mdx/page-title";
import { Separator } from "@designali/ui/separator";

import { SidebarNav } from "./components/sidebar-nav";

export const metadata: Metadata = {
  title: "Forms",
  description: "A design agency with a touch of magic.",
};

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/app/dashboard/settings",
  },
  {
    title: "Account",
    href: "/app/dashboard/settings/account",
  },
  {
    title: "Appearance",
    href: "/app/dashboard/settings/appearance",
  },
  {
    title: "Notifications",
    href: "/app/dashboard/settings/notifications",
  },
  {
    title: "Display",
    href: "/app/dashboard/settings/display",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="mx-auto mt-40 h-auto max-w-7xl rounded-2xl border">
      <div className="space-y-6 p-10 pb-16 md:block">
        <PageTitle
          title="Settings"
          description={`Manage your account settings and set e-mail preferences.`}
        />
        <Separator className="my-6" />
        <div className="space-y-8">
          <SidebarNav items={sidebarNavItems} />
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
}
