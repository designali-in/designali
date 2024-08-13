import type { InferSelectModel } from "@designali/db";
import type {
  DefaultSession,
  NextAuthConfig,
  Session as NextAuthSession,
} from "next-auth";
import { skipCSRFCheck } from "@auth/core";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db, eq } from "@designali/db";
import {
  accounts,
  sessions,
  users,
  verificationTokens,
} from "@designali/db/src/schema";
import { sendEmail, WelcomeEmail } from "@designali/emails";
import { env } from "@designali/env";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";

import { SENDER_EMAIL } from "./constants";

declare module "next-auth" {
  interface Session extends Omit<DefaultSession, "user"> {
    user: {
      id: string;
      name?: string | null;
      email: string;
      image?: string | null;
      role: InferSelectModel<typeof users>["role"];
    };
  }

  interface User {
    role: InferSelectModel<typeof users>["role"];
  }
}

const adapter = DrizzleAdapter(db, {
  usersTable: users,
  accountsTable: accounts,
  sessionsTable: sessions,
  verificationTokensTable: verificationTokens,
});

export const isSecureContext = env.NODE_ENV !== "development";

export const authConfig = {
  // @ts-expect-error some issues with types
  adapter,
  // In development, we need to skip checks to allow Expo to work
  ...(!isSecureContext
    ? {
        skipCSRFCheck: skipCSRFCheck,
        trustHost: true,
      }
    : {}),
  secret: env.NEXTAUTH_SECRET,
  providers: [
    Github,
    Google,
    Resend({
      apiKey: env.RESEND_API_KEY,
      from: SENDER_EMAIL,
    }),
  ],

  callbacks: {
    async signIn({ account, profile, user }: any) {
      // Update data when user signs in every time
      if (account?.provider === "google") {
        if (!profile) return true;

        await db
          .update(users)
          .set({
            name: profile.name,
            image: profile.picture,
          })
          .where(eq(users.id, user.id))
          .run();
      }

      if (account?.provider === "github") {
        if (!profile) return true;

        await db
          .update(users)
          .set({
            name: profile.name,
            image: profile.avatar_url as string,
          })
          .where(eq(users.id, user.id))
          .run();
      }
      return true;
    },
    session: ({ session, user }: any) => {
      return {
        ...session,
        user: {
          ...session.user,
          role: user.role,
        },
      };
    },
  },

  events: {
    async createUser(params) {
      if (!params.user.id || !params.user.email) {
        throw new Error("User id & email is required");
      }

      await sendEmail({
        from: "Ali Imam - Designali <contact@designali.in>",
        subject: "Welcome to Designali.",
        to: [params.user.email],
        react: WelcomeEmail(),
      });
    },
  },
  pages: {
    signIn: "/login",
    error: "/error",
  },
} satisfies NextAuthConfig;

export const validateToken = async (
  token: string,
): Promise<NextAuthSession | null> => {
  const sessionToken = token.slice("Bearer ".length);
  const session = await adapter.getSessionAndUser?.(sessionToken);
  if (!session) {
    throw new Error("Invalid or expired token");
  }

  return {
    user: {
      ...session.user,
      role: "user",
    },
    expires: session.session.expires.toISOString(),
  };
};

export const invalidateSessionToken = async (token: string) => {
  await adapter.deleteSession?.(token);
};
