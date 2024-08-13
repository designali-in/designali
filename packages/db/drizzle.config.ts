import { env } from "@designali/env";
import { type Config } from "drizzle-kit";

export default {
  dialect: "sqlite",
  driver: "turso",
  schema: "./src/schema/index.ts",
  dbCredentials: {
    url: env.TURSO_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  },
  out: "./src/migrations",
  strict: true,
  verbose: true,
} satisfies Config;
