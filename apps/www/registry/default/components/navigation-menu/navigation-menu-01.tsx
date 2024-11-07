"use client";

import * as React from "react";
import Link from "next/link";
import { Icons } from "@/comp/icons";
import { cn } from "@/src/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Menu() {
  return (
    <nav className="z-50 w-full  bg-popover backdrop-blur-md ">
      <div className=" flex items-center   ">
        <div className="px-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href={"/about"}>
                  <NavigationMenuTrigger>Designali</NavigationMenuTrigger>
                </Link>

                <NavigationMenuContent className="space-y-3">
                  <ul className=" grid   gap-3 lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary p-6  no-underline outline-none hover:bg-accent focus:shadow-md"
                          href="/about"
                        >
                          <Icons.shapes strokeWidth={1} className="h-8 w-8" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            About
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            +10000 icons, alphabet, numbers and shapes for your
                            amazing design projects.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/blogs" title="Blogs">
                      Blogs
                    </ListItem>
                    <ListItem href="/pricing" title="Pricing">
                      Pricing
                    </ListItem>
                    <ListItem href="/contact" title="Contact">
                      Contact
                    </ListItem>
                    <ListItem href="/terms" title="Terms">
                      Terms
                    </ListItem>
                    <ListItem href="/privacy" title="Privacy">
                      Privacy
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href={"/products"}>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                </Link>

                <NavigationMenuContent>
                  <ul className="  grid   gap-3 lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary p-6  no-underline outline-none hover:bg-accent focus:shadow-md"
                          href="/products/dicons"
                        >
                          <Icons.shapes strokeWidth={1} className="h-8 w-8" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            DIcons
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            +10000 icons, alphabet, numbers and shapes for your
                            amazing design projects.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>

                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary p-6  no-underline outline-none hover:bg-accent focus:shadow-md"
                          href="/products/graaadients"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Graaadients
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            +1000 abstract gradient elements and backgrounds for
                            your amazing design projects.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/ui" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    UI
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md bg-slate-100 p-4 leading-none text-slate-600 no-underline outline-none transition-colors hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800",
            className,
          )}
          {...props}
        >
          <div className="text-md text-black hover:text-black dark:text-white hover:dark:text-white">
            {title}
          </div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground/70">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
