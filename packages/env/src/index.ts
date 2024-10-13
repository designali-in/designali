import { createEnv } from "@t3-oss/env-nextjs";
import { vercel } from "@t3-oss/env-nextjs/presets";
import { z } from "zod";

export const isProduction = process.env.NODE_ENV === "production";

export const flags = {
  mail: isProduction || process.env.NEXT_PUBLIC_FLAG_COMMENT === "true",
  auth: isProduction || process.env.NEXT_PUBLIC_FLAG_AUTH === "true",
  stats: process.env.NEXT_PUBLIC_FLAG_STATS === "true",
  spotify: process.env.NEXT_PUBLIC_FLAG_SPOTIFY === "true",
  likeButton: process.env.NEXT_PUBLIC_FLAG_LIKE_BUTTON === "true",
};

export const env = createEnv({
  skipValidation: !!process.env.CI,
  extends: [vercel()],

  shared: {
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
  },

  server: {
    ...(flags.auth
      ? {
          NEXTAUTH_SECRET: z.string().min(1),
          AUTH_GOOGLE_ID: z.string().min(1),
          AUTH_GOOGLE_SECRET: z.string().min(1),
          AUTH_GITHUB_ID: z.string().min(1),
          AUTH_GITHUB_SECRET: z.string().min(1),
        }
      : {}),

    ...(flags.stats
      ? {
          GOOGLE_API_KEY: z.string().min(1),
          YOUTUBE_API_KEY: z.string().min(1),
        }
      : {}),

    ...(flags.likeButton
      ? {
          IP_ADDRESS_SALT: z.string().min(1),
        }
      : {}),

    ...(flags.mail
      ? { RESEND_API_KEY: z.string().min(1), AUTHOR_EMAIL: z.string().email() }
      : {}),

    INSTAGRAM_KEY: z.string().min(1),
    TURSO_URL: z.string().min(1),
    TURSO_AUTH_TOKEN: z.string().min(1),
    UPSTASH_REDIS_REST_URL: z.string().url(),
    UPSTASH_REDIS_REST_TOKEN: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_FLAG_AUTH: z.string().min(1).optional(),
    NEXT_PUBLIC_FLAG_SPOTIFY: z.string().min(1).optional(),
    NEXT_PUBLIC_FLAG_LIKE_BUTTON: z.string().min(1).optional(),
  },
  experimental__runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,

    NEXT_PUBLIC_FLAG_AUTH: process.env.NEXT_PUBLIC_FLAG_AUTH,
    NEXT_PUBLIC_FLAG_SPOTIFY: process.env.NEXT_PUBLIC_FLAG_SPOTIFY,
    NEXT_PUBLIC_FLAG_LIKE_BUTTON: process.env.NEXT_PUBLIC_FLAG_LIKE_BUTTON,
  },

  emptyStringAsUndefined: true,
});
