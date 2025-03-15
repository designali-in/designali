import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

import { prisma } from "@/lib/db";
import { getUserById } from "@/lib/validations/auth";

async function generateUniqueUsername(baseName: string) {
  let username = baseName.toLowerCase().replace(/\s+/g, "");
  let count = 1;

  while (await prisma.user.findUnique({ where: { username } })) {
    username = `${baseName}${count}`;
    count++;
  }

  return username;
}

declare module "next-auth" {
  interface Session {
    user: {
      role: UserRole;
    } & DefaultSession["user"];
  }
}

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    // error: "/auth/error",
  },
  callbacks: {
    async session({ token, session }) {
      if (session.user) {
        if (token.sub) {
          session.user.id = token.sub;
        }

        if (token.email) {
          session.user.email = token.email;
        }

        if (token.role) {
          session.user.role = token.role;
        } 

        session.user.name = token.name;
        session.user.image = token.picture;
        
      }

      return session;
    },

    async jwt({ token }) {
      if (!token.sub) return token;

      const dbUser = await getUserById(token.sub);

      if (!dbUser) return token;

      if (!dbUser.username) {
        const newUsername = await generateUniqueUsername(dbUser.name || "user");
        await prisma.user.update({
          where: { id: dbUser.id },
          data: { username: newUsername },
        });
        dbUser.username = newUsername;
      }

      token.name = dbUser.name;
      token.email = dbUser.email;
      token.picture = dbUser.image;
      token.role = dbUser.role;
      token.username = dbUser.username;

      return token;
    },
  },
  ...authConfig,
  // debug: process.env.NODE_ENV !== "production"
});
