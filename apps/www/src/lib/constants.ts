import { env } from "@/env";

export const SENDER_EMAIL = process.env.AUTHOR_EMAIL || "onboarding@resend.dev";

export const isProduction = env.NODE_ENV === "production";

export const SITE_URL = isProduction
  ? "https://designali.in"
  : "http://localhost:3000";

export const BASE_URL = isProduction
  ? "https://designali.in"
  : "http://localhost:3000";

export const GITHUB_USERNAME = "designali";

export const SITE_NAME = "Ali";
export const SITE_TITLE = "Ali - A Full Stack Developer";
export const SITE_DESCRIPTION = "Ali • 18 y/o • Student • Full Stack Developer";
export const SITE_KEYWORDS = [
  "designali",
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
];

export const SITE_GITHUB_URL = "https://github.com/designali";
export const SITE_FACEBOOK_URL = "https://www.facebook.com/designali";
export const SITE_INSTAGRAM_URL = "https://www.instagram.com/designali.in";
export const SITE_X_URL = "https://x.com/designali";
export const SITE_YOUTUBE_URL = "https://www.youtube.com/@designali";
