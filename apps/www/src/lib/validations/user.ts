import type { 
    User,
  } from "@prisma/client";
  import * as z from "zod";
  
  export const userNameSchema = z.object({
    name: z.string().min(3).max(32),
  });
  
  export function checkUserStatus(user: any) {
    if (!user?.id) {
      throw new Response("Unauthorized", {
        status: 401,
        statusText: "Unauthorized",
      });
    }
    if (user.active === 0) {
      throw new Response("Forbidden", {
        status: 403,
        statusText: "Forbidden",
      });
    }
    return user;
  }
  
  export type ExtendedUser = User & {
    
  };