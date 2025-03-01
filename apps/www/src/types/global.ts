import type { Community, DesignPost, Like, Poll, PollOption, PollVote, Role, User } from "@prisma/client";
import { plansColumns } from "@/config/subscriptions";

export type ThemeOptions = {
  dark: string;
  light: string;
};

export interface AnimeRanking {
  rank: string;
  graphic: string;
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

export interface UserDisplay {
  name: string | null;
  email: string | null;
  createdAt: string;
  rating: number;
  pollsVoted: number;
  postsCreated: number;
}