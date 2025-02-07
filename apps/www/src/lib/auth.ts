/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/require-await */

import { PrismaAdapter } from "@auth/prisma-adapter";
import { nanoid } from "nanoid";
import NextAuth from "next-auth";

import { prisma } from "@/lib/db";

import authConfig from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET, // Ensure this is set
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    // error: "/auth/error",
  },
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.username = token.username;

        session.user.role = token.role;
      }

      return session;
    },

    async jwt({ token, user }) {
      if (!token.sub) return token;

      const dbUser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!dbUser) {
        token.id = user.id;
        return token;
      }

      if (!dbUser.username) {
        await prisma.user.update({
          where: {
            id: dbUser.id,
          },
          data: {
            username: nanoid(10),
          },
        });
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
        username: dbUser.username,
        bio: dbUser.bio, // ✅ Include bio
        website: dbUser.website, // ✅ Include website
        twitter: dbUser.twitter, // ✅ Include Twitter
        instagram: dbUser.instagram, // ✅ Include Instagram
        linkedin: dbUser.linkedin, // ✅ Include LinkedIn
        role: dbUser.role,
      };
    },
    redirect() {
      return "/";
    },
  },
  ...authConfig,
  // debug: process.env.NODE_ENV !== "production"
});
