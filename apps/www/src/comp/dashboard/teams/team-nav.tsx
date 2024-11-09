"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Settings, Users } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface TeamNavProps {
  slug: string;
  userRole?: string;
}

export function TeamNav({ slug, userRole }: TeamNavProps) {
  const pathname = usePathname();
  const isAdmin = userRole === "OWNER" || userRole === "ADMIN";

  const items = [
    {
      title: "Members",
      href: `/dashboard/teams/${slug}`,
      icon: Users,
    },
    ...(isAdmin
      ? [
          {
            title: "Settings",
            href: `/dashboard/teams/${slug}/settings`,
            icon: Settings,
          },
        ]
      : []),
  ];

  return (
    <nav className="flex gap-1 py-4">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-secondary",
            "justify-start",
          )}
        >
          <item.icon className=" h-4 w-4" />
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
