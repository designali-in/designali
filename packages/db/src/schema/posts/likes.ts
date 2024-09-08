import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const likesSessions = sqliteTable("likes_session", {
  id: text("id").notNull().primaryKey(),
  createdAt: integer("created_at", {
    mode: "timestamp",
  })
    .notNull()
    .default(sql`(strftime('%s', 'now'))`),
  likes: integer("likes").notNull().default(0),
});

export const counters = sqliteTable("counters", {
  slug: integer("slug").notNull().primaryKey(),
  views: integer("views").notNull().default(0),
  likes: integer("likes").notNull().default(0),
  loves: integer("loves").notNull().default(0),
  awards: integer("awards").notNull().default(0),
  bookmarks: integer("bookmarks").notNull().default(0),
});
