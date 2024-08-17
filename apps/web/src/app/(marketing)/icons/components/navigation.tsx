"use client";

import Link from "next/link";
import { useRouter, useSelectedLayoutSegments } from "next/navigation";
import { Icons } from "@/components/icons";
import { cn } from "@designali/ui";
import { Button } from "@designali/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@designali/ui/dropdown-menu";

import CodeImagesIcon from "../assets/code-images.svg";
import IconMakerIcon from "../assets/icon-maker.svg";
import PresetExplorerIcon from "../assets/preset-explorer.svg";
import PromptExplorerIcon from "../assets/prompt-explorer.svg";
import SnippetExplorerIcon from "../assets/snippet-explorer.svg";
import ThemeExplorerIcon from "../assets/theme-explorer.svg";

const links = [
  {
    href: "/",
    label: "Code Images",
    description: "Create beautiful images of your code",
    icon: CodeImagesIcon,
  },
  {
    href: "/icon",
    label: "Icon Maker",
    description: "Create beautiful icons",
    icon: IconMakerIcon,
  },
  {
    href: "/prompts",
    label: "Prompts",
    description: "Explore AI Prompts for Raycast",
    icon: PromptExplorerIcon,
  },
  {
    href: "/presets",
    label: "Presets",
    description: "Explore AI Presets for Raycast",
    icon: PresetExplorerIcon,
  },
  {
    href: "/snippets",
    label: "Snippets",
    description: "Browse and import Raycast Snippets",
    icon: SnippetExplorerIcon,
  },
  {
    href: "/themes",
    label: "Themes",
    description: "Browse and import Raycast Themes",
    icon: ThemeExplorerIcon,
  },
];

export function Navigation() {
  const router = useRouter();
  const segments = useSelectedLayoutSegments();
  const segment = segments[0] || "(code)";
  const showBackButton = segments.find((s) => s === "shared")
    ? segments.length > 1
    : segments.length > 2;
  const activeLink =
    links.find((link) =>
      segment === "(code)" ? links[0] : link.href.includes(segment),
    ) || links[0];

  return (
    <nav className="bg-gray-2 fixed z-10 flex h-[50px] w-full items-center gap-3 pl-4 pr-5 text-white">
      <div
        className={cn(
          "flex items-center gap-3 transition-transform ease-in-out",
          showBackButton ? "translate-x-0" : "-translate-x-10",
        )}
      >
        <Button
          asChild
          className={cn(
            "bg-gray-4 hover:bg-gray-5 text-gray-12 h-6 w-6 rounded-full shadow-none",
            showBackButton ? "scale-100 opacity-100" : "scale-75 opacity-0",
          )}
        >
          <Link
            href={`/${segment}`}
            aria-label="Home"
            aria-disabled={!showBackButton}
            tabIndex={showBackButton ? 0 : -1}
          >
            <Icons.menu className="h-4 w-4 shrink-0" />
          </Link>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="default"
              className="data-[state=open]:bg-gray-4 text-gray-12 gap-2 py-1 pl-1 pr-2"
            >
              {activeLink.icon && <activeLink.icon className="h-6 w-6" />}
              <span className="text-[15px] font-medium">
                {activeLink.label}
              </span>
              <Icons.menu className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="flex flex-col gap-1.5 p-2"
          >
            {links.map((link) => (
              <DropdownMenuItem
                key={link.href}
                onSelect={() => router.push(link.href)}
                className="group py-2 pl-[10px] pr-6"
              >
                <div className="flex items-center gap-3">
                  {link.icon && <link.icon className="h-8 w-8" />}
                  <div className="flex flex-col gap-1 leading-none">
                    <span className="text-gray-12 text-[15px] font-medium">
                      {link.label}
                    </span>
                    <span className="text-gray-9 group-hover:text-gray-10 text-[13px]">
                      {link.description}
                    </span>
                  </div>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export function NavigationActions({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "fixed top-14 z-10 flex h-14 w-full items-center justify-center gap-2 border-b border-t bg-slate-100/60 backdrop-blur-md backdrop-filter dark:bg-slate-900/60",
        className,
      )}
    >
      {children}
    </div>
  );
}
