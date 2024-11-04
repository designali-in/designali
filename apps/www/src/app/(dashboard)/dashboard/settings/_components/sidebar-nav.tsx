"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@designali/ui";
import { buttonVariants } from "@designali/ui/button";
import { ScrollArea, ScrollBar } from "@designali/ui/scroll-area";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex  space-x-4", className)} {...props}>
      <ScrollArea className="whitespace-nowrap">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              pathname === item.href
                ? "bg-muted hover:bg-muted"
                : "px-3 hover:bg-transparent hover:underline",
              "justify-start",
            )}
          >
            {item.title}
          </Link>
        ))}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </nav>
  );
}
