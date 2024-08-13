import { createId } from "@paralleldrive/cuid2";
import { sql } from "drizzle-orm";
import {
  integer,
  numeric,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

export const products = sqliteTable(
  "product",
  {
    id: text("id")
      .notNull()
      .primaryKey()
      .$defaultFn(() => createId()),
    name: text("name").notNull(),
    headline: text("headline").notNull(),
    description: text("description").notNull(),
    slug: text("slug").notNull(),
    price: numeric("price").notNull().default("0"),
    rating: numeric("rating").notNull().default("0"),
    numReviews: integer("numReviews").notNull().default(0),
    createdAt: integer("created_at", {
      mode: "timestamp",
    })
      .notNull()
      .default(sql`(strftime('%s', 'now'))`),
  },
  (table) => {
    return {
      productSlugIdx: uniqueIndex("product_slug_idx").on(table.slug),
    };
  },
);
