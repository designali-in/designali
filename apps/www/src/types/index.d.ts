/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import type { Icons } from "@/components/shared/icons";
import type { User } from "@prisma/client";
import type { Icon } from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export type MainNavItem = NavItem;

export interface SidebarNavType {
  id: number;
  href: string;
  label: string;
  Icon: Icon;
}

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  mailSupport: string;
  links: {
    twitter: string;
    github: string;
  };
}

export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export interface MarketingConfig {
  mainNav: MainNavItem[];
}

export interface DashboardConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export interface PropertyConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export interface SubscriptionPlan {
  title: string;
  description: string;
  benefits: string[];
  limitations: string[];
  prices: {
    monthly: number;
    yearly: number;
  };
  stripeIds: {
    monthly: string | null;
    yearly: string | null;
  };
}

export type UserSubscriptionPlan = SubscriptionPlan &
  Pick<User, "stripeCustomerId" | "stripeSubscriptionId" | "stripePriceId"> & {
    stripeCurrentPeriodEnd: number;
    isPaid: boolean;
    interval: "month" | "year" | null;
    isCanceled?: boolean;
  };

// compare plans
export type ColumnType = string | boolean | null;
export type PlansRow = { feature: string; tooltip?: string } & {
  [key in (typeof plansColumns)[number]]: ColumnType;
};

export interface Artist {
  id: string;
  name: string;
  type: string;
  href: string;
}

export interface NowPlayingSong {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}

export interface Views {
  views: number;
}

export interface Likes {
  likes: number;
  currentUserLikes: number;
}

export interface YouTube {
  subscribers: number;
  views: number;
}

export interface TeamMember {
  id: string;
  role: Role;
  userId: string;
  teamId: string;
  user: {
    name: string | null;
    email: string | null;
    image: string | null;
  };
}

export interface Team {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  members: {
    user: {
      name: string | null;
      email: string | null;
      image: string | null;
    };
    id: string;
    userId: string;
    role: Role;
    teamId: string;
  }[];
  _count: {
    members: number;
  };
}

export interface UserDisplay {
  name: string | null;
  email: string | null;
  createdAt: string;
  rating: number;
  pollsVoted: number;
  postsCreated: number;
}

export interface AnimeRanking {
  rank: string;
  agency: string;
  director: string;
  genre: string;
  stars: number;
  votes: string;
}

export interface AdminDisplay {
  name: string | null;
  email: string | null;
  createdAt: string;
  animeAdded: number;
}

export interface ComboBoxItemType {
  value: string;
  label: string;
}

export type ZodCategoryType = "pending" | "watching" | "finished";

export type ExtendedCommunity = Community & {
  creator: User;
  post: DesignPost[];
};

export type ExtendedPost = DesignPost & {
  creator: User;
  comment: Comment[];
  like: Like[];
  community: Community;
};

export type ExtendedComment = Comment & {
  author: User;
};

export type ExtendedPoll = Poll & {
  creator: User;
  option: (PollOption & { vote: PollVote[] })[];
};
