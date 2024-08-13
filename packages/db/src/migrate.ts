import { env } from "@designali/env";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";

async function main() {
  const db = drizzle(
    createClient({ url: env.TURSO_URL, authToken: env.TURSO_AUTH_TOKEN }),
  );
  console.log("Running migrations");

  await migrate(db, { migrationsFolder: "drizzle" });

  console.log("Migrated successfully");

  process.exit(0);
}

main().catch((e) => {
  console.error("Migration failed");
  console.error(e);
  process.exit(1);
});
