import { env } from "@designali/env";
import { createClient } from "@libsql/client/web";
import { drizzle } from "drizzle-orm/libsql";

const main = () => {
  try {
    const db = drizzle(
      createClient({
        url: env.TURSO_URL,
        authToken: env.TURSO_AUTH_TOKEN,
      }),
    );

    // console.log('🎉 Data inserted successfully!')
    console.log("Nothing to do");
  } catch (error) {
    console.error("❌ Error inserting data:\n", error);
  }
};

main();
