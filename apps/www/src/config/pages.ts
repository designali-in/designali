import type { ValidIcon } from "@/comp/icons";

export interface Page {
  title: string;
  description: string;
  href: string;
  icon: ValidIcon;
  disabled?: boolean;
  segment: string;
  children?: Page[];
}

export const settingsPagesConfig: Page[] = [
  {
    title: "General",
    description: "General settings for the workspace.",
    href: "/settings",
    icon: "image",
    segment: "general",
  },
  {
    title: "Team",
    description: "Team settings for the workspace.",
    href: "/settings/team",
    icon: "image",
    segment: "team",
  },
  {
    title: "API Token",
    description: "API token settings for the workspace.",
    href: "/settings/api-token",
    icon: "image",
    segment: "api-token",
  },
  {
    title: "Billing",
    description: "Billing settings for the workspace.",
    href: "/settings/billing",
    icon: "image",
    segment: "billing",
  },
  {
    title: "Appearance",
    description: "Appearance settings for the workspace.",
    href: "/settings/appearance",
    icon: "sun",
    segment: "appearance",
  },
  {
    title: "User",
    description: "Profile settings for the user.",
    href: "/settings/user",
    icon: "image",
    segment: "user",
  },
];

export type PageId = (typeof pagesConfig)[number]["segment"];

export const pagesConfig = [
  {
    title: "Overview",
    description: "Check all the responses in one place.",
    href: "/",
    icon: "image",
    segment: "overview",
  },
   
  {
    title: "URLs",
    description: "Where you can see all the notifications.",
    href: "/urls",
    icon: "image",
    segment: "urls",
  },
  {
    title: "Billing",
    description: "Get speed insights for your application.",
    href: "/billing",
    icon: "image",
    segment: "billing",
  },
  {
    title: "Settings",
    description: "Your workspace settings",
    href: "/settings",
    icon: "image",
    segment: "settings",
    children: settingsPagesConfig,
  },
] as const satisfies readonly Page[];

export const adminConfig = [
  {
    title: "Overview",
    description: "Check all the responses in one place.",
    href: "/",
    icon: "image",
    segment: "overview",
  },
  {
    title: "Products",
    description: "All your incidents.",
    href: "/products",
    icon: "image",
    segment: "products",
  },
  {
    title: "Orders",
    description: "Where you can see all the pages.",
    href: "/orders",
    icon: "image",
    segment: "orders",
  },
  {
    title: "Users",
    description: "Where you can see all the notifications.",
    href: "/users",
    icon: "image",
    segment: "users",
  },
  {
    title: "Settings",
    description: "Your workspace settings",
    href: "/settings",
    icon: "image",
    segment: "settings",
    children: settingsPagesConfig,
  },
] as const satisfies readonly Page[];

export function getPageBySegment(
  segment: string | string[],
  currentPage: readonly Page[] = pagesConfig,
): Page | undefined {
  if (typeof segment === "string") {
    const page = currentPage.find((page) => page.segment === segment);
    return page;
  }
  if (Array.isArray(segment) && segment.length > 0) {
    const [firstSegment, ...restSegments] = segment;
    const childPage = currentPage.find((page) => page.segment === firstSegment);
    if (childPage.children) {
      return getPageBySegment(restSegments, childPage.children);
    }
    return childPage;
  }
  return undefined;
}
