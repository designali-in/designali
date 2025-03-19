import type { UserRole } from "@prisma/client";
import type {  User } from "next-auth"; 

type UserId = string;

export type ExtendedUser = User & {
  id: UserId;
  username?: string | null;
  role: UserRole;
};
 
 