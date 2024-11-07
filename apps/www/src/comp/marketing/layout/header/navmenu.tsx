"use client";

import * as React from "react";
import Link from "next/link";
import { Icons } from "@/comp/icons";
import { cn } from "@/src/lib/utils";
import { DIcons } from "dicons";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Menu() {
  return (
    <div className="hidden px-4 lg:block">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href={"/about"}>
              <NavigationMenuTrigger>Designali</NavigationMenuTrigger>
            </Link>

            <NavigationMenuContent className="space-y-3">
              <ul className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-4">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary p-6  no-underline outline-none hover:bg-accent focus:shadow-md"
                      href="/about"
                    >
                      <div className="mb-2 text-lg font-medium">About</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Welcome to my creative playground! I'm Ali
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
              <ul className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-4">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary p-6  no-underline outline-none hover:bg-accent focus:shadow-md"
                      href="/products/dicons"
                    >
                      <DIcons.Blocks strokeWidth={1} className="h-8 w-8" />
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
                      href="/products/dshapes"
                    >
                      <DIcons.Shapes strokeWidth={1} className="h-8 w-8" />
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
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary p-6  no-underline outline-none hover:bg-accent focus:shadow-md"
                      href="/products/graaadients"
                    >
                      <DIcons.Clover strokeWidth={1} className="h-8 w-8" />
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
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary p-6  no-underline outline-none hover:bg-accent focus:shadow-md"
                      href="/agency/works"
                    >
                      <DIcons.Book strokeWidth={1} className="h-8 w-8" />
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
            <Link href={"/tools"}>
              <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
            </Link>

            <NavigationMenuContent className="space-y-3">
              <ul className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-4">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary p-6  no-underline outline-none hover:bg-accent focus:shadow-md"
                      href="/tools/dicons"
                    >
                      <DIcons.Scissors strokeWidth={1} className="h-8 w-8" />
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
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary p-6  no-underline outline-none hover:bg-accent focus:shadow-md"
                      href="/tools#short-links"
                    >
                      <DIcons.Link strokeWidth={1} className="h-8 w-8" />
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
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary p-6  no-underline outline-none hover:bg-accent focus:shadow-md"
                      href="/tools#image-converter"
                    >
                      <DIcons.Image strokeWidth={1} className="h-8 w-8" />
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
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary p-6  no-underline outline-none hover:bg-accent focus:shadow-md"
                      href="/tools#word-counter"
                    >
                      <DIcons.LetterText strokeWidth={1} className="h-8 w-8" />
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
            <Link href="/ui" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                UI
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/components" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Components
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
            "block select-none space-y-1 rounded-md bg-secondary p-4 leading-none  no-underline outline-none transition-colors hover:bg-accent  ",
            className,
          )}
          {...props}
        >
          <div className="text-md ">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground/70">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
