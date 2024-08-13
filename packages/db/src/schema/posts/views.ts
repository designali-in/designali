import { createId } from "@paralleldrive/cuid2";
import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

import { comments } from "./comments";

export const posts = sqliteTable("post", {
  createdAt: integer("created_at", {
    mode: "timestamp",
  })
    .notNull()
    .default(sql`(strftime('%s', 'now'))`),
  slug: text("slug").notNull().primaryKey(),
  likes: integer("likes").notNull().default(0),
  views: integer("views").notNull().default(0),
});

export const postsRelations = relations(posts, ({ many }) => ({
  comments: many(comments),
}));

export const APost = sqliteTable("post", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  title: text("name", { length: 256 }).notNull(),
  content: text("content").notNull(),
  createdAt: integer("created_at", {
    mode: "timestamp",
  })
    .notNull()
    .default(sql`(strftime('%s', 'now'))`),
  updatedAt: integer("updated_at", {
    mode: "timestamp",
  })
    .notNull()
    .default(sql`(strftime('%s', 'now'))`),
});

export const CreateAPostSchema = createInsertSchema(APost, {
  title: z.string().max(256),
  content: z.string().max(256),
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
