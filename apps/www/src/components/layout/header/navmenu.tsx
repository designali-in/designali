"use client";

import * as React from "react";
import Link from "next/link";
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
    <div className="hidden pl-1 md:block">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Designali</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid  gap-3 p-4 md:w-[600px] lg:w-[900px] lg:grid-cols-[1fr_1fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink href="/about">
                    <div className="flex h-full w-full select-none flex-col justify-end rounded-lg bg-secondary/60 p-6  no-underline outline-none hover:bg-accent focus:shadow-md">
                      <div className="mb-2 text-lg font-medium text-primary">
                        About
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Welcome to My Creative Playground! I’m Ali – Your
                        Vision, My Design.
                      </p>
                    </div>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/profile" title="Profile">
                  World's Top Designers profile list. Download the Assets from
                  users.
                </ListItem>
                <ListItem href="/pricing" title="Pricing">
                  Make your business shine with unlimited* creativity.
                </ListItem>
                <ListItem href="/blog" title="Blogs">
                  Creative Chronicles: Insights, Inspiration, and Design Trends
                </ListItem>
                <ListItem href="/docs/legal/contact" title="Contact">
                  Get in Touch – Let’s Create Something Amazing Together!
                </ListItem>
                <ListItem href="/docs/legal/terms" title="Terms">
                  Terms and Conditions – Your Guide to Our Services and Policies
                </ListItem>
                <ListItem href="/docs/legal/privacy" title="Privacy">
                  Your Privacy Matters – Our Commitment to Protecting Your
                  Information
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid  gap-3 p-4 md:w-[600px] lg:w-[900px] lg:grid-cols-[1fr_1fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink href="/products/dicons">
                    <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary/60 p-6  no-underline outline-none hover:bg-accent focus:shadow-md">
                      <div className="mb-2 mt-4 text-lg font-medium text-primary">
                        <div className="flex gap-2 items-center">
                          <DIcons.Component
                            strokeWidth={1}
                            className="h-4 w-4"
                          />
                          DIcons
                          <span className="ml-1 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs font-normal leading-none text-[#000000] no-underline group-hover:no-underline">
                          New
                        </span>
                        </div>
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Over 10,000 Icons, Alphabets, Numbers, and Shapes to
                        Elevate Your Design Projects!
                      </p>
                    </div>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink href="/products/graaadients">
                    <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary/60 p-6  no-underline outline-none hover:bg-accent focus:shadow-md">
                      <div className="mb-2 mt-4 text-lg font-medium text-primary">
                        <div className="flex gap-2 items-center">
                          <DIcons.Flower2
                            strokeWidth={1}
                            className="h-4 w-4"
                          />
                          Graaadients
                          <span className="ml-1 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs font-normal leading-none text-[#000000] no-underline group-hover:no-underline">
                          New
                        </span>
                        </div>
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Explore 4K Gradients: Stunning Color Transitions for
                        Your Next Design Masterpiece!
                      </p>
                    </div>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink href="/products/patterns">
                    <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary/60 p-6  no-underline outline-none hover:bg-accent focus:shadow-md">
                      <div className="mb-2 mt-4 text-lg font-medium text-primary">
                        <div className="flex gap-2 items-center">
                          <DIcons.Grid3x3
                            strokeWidth={1}
                            className="h-4 w-4"
                          />
                          Patterns
                          <span className="ml-1 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs font-normal leading-none text-[#000000] no-underline group-hover:no-underline">
                          New
                        </span>
                        </div>
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        This is a free product. To download a full version click
                        on "Download a free version" button.
                      </p>
                    </div>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink href="/products/blocks">
                    <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary/60 p-6  no-underline outline-none hover:bg-accent focus:shadow-md">
                      <div className="mb-2 mt-4 text-lg font-medium text-primary">
                        <div className="flex gap-2 items-center">
                          <DIcons.Blocks strokeWidth={1} className="h-4 w-4" />
                          Blocks
                          <span className="ml-1 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs font-normal leading-none text-[#000000] no-underline group-hover:no-underline">
                          New
                        </span>
                        </div>
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Simply Copy, Paste, and Integrate Into Your Apps.
                        Compatible with All React Frameworks. Always Free!
                      </p>
                    </div>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink href="/products/dshapes">
                    <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary/60 p-6  no-underline outline-none hover:bg-accent focus:shadow-md">
                      <div className="mb-2 mt-4 text-lg font-medium text-primary">
                        <div className="flex gap-2 items-center">
                          <DIcons.Shapes strokeWidth={1} className="h-4 w-4" />
                          DShapes
                        </div>
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Exploring the Beauty of Abstract Shapes – Where
                        Creativity Meets Design
                      </p>
                    </div>
                  </NavigationMenuLink>
                </li>

                <li className="row-span-3">
                  <NavigationMenuLink href="/products/colors/generate">
                    <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary/60 p-6  no-underline outline-none hover:bg-accent focus:shadow-md">
                      <div className="mb-2 mt-4 text-lg font-medium text-primary">
                        <div className="flex gap-2 items-center">
                          <DIcons.Palette strokeWidth={1} className="h-4 w-4" />
                          Colors
                        </div>
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Color generator - Dive Into a World of Colors – Bringing Vibrancy to Your
                        Designs
                      </p>
                    </div>
                  </NavigationMenuLink>
                </li>

                <li className="row-span-3">
                  <NavigationMenuLink href="/products/easings">
                    <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary/60 p-6  no-underline outline-none hover:bg-accent focus:shadow-md">
                      <div className="mb-2 mt-4 text-lg font-medium text-primary">
                        <div className="flex gap-2 items-center">
                          <DIcons.AnimationMoveBottom strokeWidth={1} className="h-4 w-4" />
                          Easings
                        </div>
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        A set of easing functions ready to copy and paste into
                        your Tailwind CSS project.
                      </p>
                    </div>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Enterprise</NavigationMenuTrigger>

            <NavigationMenuContent className="space-y-3">
              <ul className="grid gap-3 p-4 md:w-[600px] lg:w-[900px] lg:grid-cols-[1fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink href="/agency">
                    <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary/60 p-6  no-underline outline-none hover:bg-accent focus:shadow-md">
                      <div className="mb-2 mt-4 text-lg font-medium text-primary">
                        Agency
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                      Crafting bold, beautiful, and user-focused designs that tell your story and elevate your brand.
                      </p>
                    </div>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink href="/agency/works">
                    <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary/60 p-6  no-underline outline-none hover:bg-accent focus:shadow-md">
                      <div className="mb-2 mt-4 text-lg font-medium text-primary">
                        Works
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                      A glimpse of the creativity, strategy, and craftsmanship we bring to every project.
                      </p>
                    </div>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/graphic"
              className={navigationMenuTriggerStyle()}
            >
              Graphic
              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs font-normal leading-none text-[#000000] no-underline group-hover:no-underline">
                New
              </span>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
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
      <NavigationMenuLink
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...(props as any)}
      >
        <div
          className={cn(
            "block select-none space-y-1 rounded-md bg-secondary/60 p-4 leading-none  no-underline outline-none transition-colors hover:bg-accent",
            className
          )}
        >
          <div className="text-md text-primary">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground/70">
            {children}
          </p>
        </div>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
