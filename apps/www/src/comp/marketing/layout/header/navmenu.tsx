"use client";

import * as React from "react";
import Link from "next/link";
import { Badge } from "@/registry/default/ui/badge";
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
    <div className="hidden px-4 md:block">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href={"/about"}>
              <NavigationMenuTrigger>Designali</NavigationMenuTrigger>
            </Link>

            <NavigationMenuContent className="space-y-3">
              <ul className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-4">
                <li className="row-span-3">
                  <NavigationMenuLink>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary p-6  no-underline outline-none hover:bg-accent focus:shadow-md"
                      href="/about"
                    >
                      <div className="mb-2 text-lg font-medium text-primary">
                        About
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Welcome to My Creative Playground! I’m Ali – Your
                        Vision, My Design.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/pricing" title="Pricing">
                  Make your business shine with unlimited* creativity.
                </ListItem>
                <ListItem href="/blogs" title="Blogs">
                  Creative Chronicles: Insights, Inspiration, and Design Trends
                </ListItem>
                <ListItem href="/contact" title="Contact">
                  Get in Touch – Let’s Create Something Amazing Together!
                </ListItem>
                <ListItem href="/terms" title="Terms">
                  Terms and Conditions – Your Guide to Our Services and Policies
                </ListItem>
                <ListItem href="/privacy" title="Privacy">
                  Your Privacy Matters – Our Commitment to Protecting Your
                  Information
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
                  <NavigationMenuLink>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary p-6  no-underline outline-none hover:bg-accent focus:shadow-md"
                      href="/products/dicons"
                    >
                      <DIcons.Component strokeWidth={1} className="h-8 w-8" />
                      <div className="mb-2 mt-4 text-lg font-medium text-primary">
                        DIcons
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Over 10,000 Icons, Alphabets, Numbers, and Shapes to
                        Elevate Your Design Projects!
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary p-6  no-underline outline-none hover:bg-accent focus:shadow-md"
                      href="/products/graaadients"
                    >
                      <DIcons.SwatchBook strokeWidth={1} className="h-8 w-8" />
                      <div className="mb-2 mt-4 text-lg font-medium text-primary">
                        Graaadients
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Explore 4K Gradients: Stunning Color Transitions for
                        Your Next Design Masterpiece!
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary p-6  no-underline outline-none hover:bg-accent focus:shadow-md"
                      href="/products/patterns"
                    >
                      <DIcons.Blocks strokeWidth={1} className="h-8 w-8" />
                      <div className="mb-2 mt-4 text-lg font-medium text-primary">
                        Patterns
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        This is a free product. To download a full version click
                        on "Download a free version" button.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary p-6  no-underline outline-none hover:bg-accent focus:shadow-md"
                      href="/products/blocks"
                    >
                      <DIcons.Blocks strokeWidth={1} className="h-8 w-8" />
                      <div className="mb-2 mt-4 text-lg font-medium text-primary">
                        Blocks
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Simply Copy, Paste, and Integrate Into Your Apps.
                        Compatible with All React Frameworks. Always Free!
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary p-6  no-underline outline-none hover:bg-accent focus:shadow-md"
                      href="/products/dshapes"
                    >
                      <DIcons.Shapes strokeWidth={1} className="h-8 w-8" />
                      <div className="mb-2 mt-4 text-lg font-medium text-primary">
                        DShapes
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Exploring the Beauty of Abstract Shapes – Where
                        Creativity Meets Design
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>

                <li className="row-span-3">
                  <NavigationMenuLink>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary p-6  no-underline outline-none hover:bg-accent focus:shadow-md"
                      href="/products/colors"
                    >
                      <DIcons.Flower2 strokeWidth={1} className="h-8 w-8" />
                      <div className="mb-2 mt-4 text-lg font-medium text-primary">
                        Colors
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Dive Into a World of Colors – Bringing Vibrancy to Your
                        Designs
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>

                <li className="row-span-3">
                  <NavigationMenuLink>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary p-6  no-underline outline-none hover:bg-accent focus:shadow-md"
                      href="/products/easings"
                    >
                      <DIcons.AnimationMoveRight
                        strokeWidth={1}
                        className="h-8 w-8"
                      />
                      <div className="mb-2 mt-4 text-lg font-medium text-primary">
                        Easings
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        A set of easing functions ready to copy and paste into
                        your Tailwind CSS project.
                      </p>
                    </Link>
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
                  <NavigationMenuLink>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary p-6  no-underline outline-none hover:bg-accent focus:shadow-md"
                      href="/agency/works"
                    >
                      <DIcons.Briefcase strokeWidth={1} className="h-8 w-8" />
                      <div className="mb-2 mt-4 text-lg font-medium text-primary">
                        Works
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        My Creative Journey – Explore My Design Portfolio
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  href={"https://cal.com/aliimam/designali"}
                  target="_blank"
                  title="Branding"
                >
                  Transform Your Brand Identity – Innovative Design for Lasting
                  Impressions
                </ListItem>

                <ListItem
                  href={"https://cal.com/aliimam/designali"}
                  target="_blank"
                  title="Social Media Posts"
                >
                  Boost Your Brand with Powerful Social Media Marketing
                  Strategies
                </ListItem>
                <ListItem
                  href={"https://cal.com/aliimam/designali"}
                  target="_blank"
                  title="Website Design"
                >
                  Elevate Your Digital Presence with Stunning UI/UX and
                  High-Converting Landing Pages
                </ListItem>
                <ListItem
                  href={"https://cal.com/aliimam/designali"}
                  target="_blank"
                  title="Website Develop"
                >
                  Innovative Web Apps and Development – Crafting Seamless
                  Digital Experiences
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/graphic" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Graphic
                <Badge className="ml-1" size="xs" variant="green">
                  New
                </Badge>
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
      <NavigationMenuLink>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md bg-secondary p-4 leading-none  no-underline outline-none transition-colors hover:bg-accent  ",
            className,
          )}
          {...props}
        >
          <div className="text-md text-primary">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground/70">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
