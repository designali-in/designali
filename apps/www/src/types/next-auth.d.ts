import type { UserRole } from "@prisma/client";
import type { Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";

type UserId = string;

export type ExtendedUser = User & {
  id: UserId;
  username?: string | null;
  role: UserRole;
};

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId;
    username?: string | null;
    role: UserRole;
  }
}

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
