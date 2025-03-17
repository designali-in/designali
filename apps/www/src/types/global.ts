import type {  Role, User } from "@prisma/client";
import { plansColumns } from "@/config/subscriptions";

export type ThemeOptions = {
  dark: string;
  light: string;
};
 

export interface AdminDisplay {
  name: string | null;
  email: string | null;
  createdAt: string;
  animeAdded: number;
}


export interface Views {
  views: number;
}

export interface Likes {
  likes: number;
  currentUserLikes: number;
}

export interface SVGLogo {
  id?: number;
  title: string;
  category: string | string[];
  route: string | ThemeOptions;
  wordmark?: string | ThemeOptions;
  brandUrl?: string;
  url: string;
}

export interface SVGCategory {
  category: string;
  total: number;
}


export type SubscriptionPlan = {
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
};

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

export interface ComboBoxItemType {
  value: string;
  label: string;
}

export type ZodCategoryType = "pending" | "watching" | "finished";

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

// Define the interface for conversation history items
export interface HistoryItem {
  // Role can be either "user" or "model"
  role: "user" | "model";
  // Parts can contain text and/or images
  parts: HistoryPart[];
}

// Define the interface for history parts
export interface HistoryPart {
  // Text content (optional)
  text?: string;
  // Image content as data URL (optional)
  // Format: data:image/png;base64,... or data:image/jpeg;base64,...
  image?: string;
}

// Note: When sending to the Gemini API:
// 1. User messages can contain both text and images (as inlineData)
// 2. Model messages should only contain text parts
// 3. Images in history are stored as data URLs in our app, but converted to base64 for the API