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
} from "@designali/ui/navigation-menu";

export function Menu() {
  return (
    <div className="hidden px-4 lg:block">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href={"/products"}>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            </Link>

            <NavigationMenuContent>
              <ul className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-4">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="hover:bg-ali flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
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
                      className="hover:bg-ali flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/products/dshapes"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        DShapes
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        +100 abstract shapes elements and backgrounds for your
                        amazing design projects.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="hover:bg-ali flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
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
            <Link href={"/agency"}>
              <NavigationMenuTrigger>Agency</NavigationMenuTrigger>
            </Link>

            <NavigationMenuContent className="space-y-3">
              <ul className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-4">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="hover:bg-ali flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/agency/works"
                    >
                      <Icons.shapes strokeWidth={1} className="h-8 w-8" />
                      <div className="mb-2 mt-4 text-lg font-medium">Works</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        +10000 icons, alphabet, numbers and shapes for your
                        amazing design projects.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/agency/branding" title="Branding">
                  Brand Identity
                </ListItem>

                <ListItem href="/agency/sm-posts" title="Social Media Posts">
                  Social Media Marketing
                </ListItem>
                <ListItem href="/agency/web-design" title="Website Design">
                  UI/UX, Landing Page
                </ListItem>
                <ListItem href="/agency/web-develop" title="Website Develop">
                  Build in Next.js & Vercel
                </ListItem>
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

          <NavigationMenuItem>
            <Link href={"/tools"}>
              <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
            </Link>

            <NavigationMenuContent className="space-y-3">
              <ul className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-4">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="hover:bg-ali flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/tools/dicons"
                    >
                      <Icons.shapes strokeWidth={1} className="h-8 w-8" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Icon maker
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
                      className="hover:bg-ali flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/tools#short-links"
                    >
                      <Icons.shapes strokeWidth={1} className="h-8 w-8" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        AI short links.
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        QR Code Generator. We've built a suite of powerful
                        features that gives you marketing superpowers.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="hover:bg-ali flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/tools#image-converter"
                    >
                      <Icons.shapes strokeWidth={1} className="h-8 w-8" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Image Converter
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Drag some images here, or click to select files. Image
                        converter tool convert JPG, PNG, etc.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="hover:bg-ali flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/tools#word-counter"
                    >
                      <Icons.shapes strokeWidth={1} className="h-8 w-8" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Word Counter
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Count words, characters, characters without spaces,
                        paragraphs and many more...
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/pricing" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/blogs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blogs
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/designs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Designs
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
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
