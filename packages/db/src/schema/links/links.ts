import { createId } from "@paralleldrive/cuid2";
import { relations, sql } from "drizzle-orm";
import {
  index,
  integer,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

import { users } from "../user";

export const userLinks = sqliteTable(
  "userLink",
  {
    id: text("id")
      .$defaultFn(() => createId())
      .primaryKey(),
    userId: text("userId").references(() => users.id, {
      onDelete: "cascade",
    }),
    totalLinks: integer("total_links").default(0).notNull(),
    createdAt: integer("created_at", { mode: "timestamp" })
      .default(sql`(strftime('%s', 'now'))`)
      .notNull(),
  },
  (link) => ({
    userIdIdx: uniqueIndex("userLinks_userId_idx").on(link.userId),
  }),
);

export type UserLink = typeof userLinks.$inferSelect;
export type NewUserLink = typeof userLinks.$inferInsert;

export const userLinksRelations = relations(userLinks, ({ many, one }) => ({
  user: one(users, { fields: [userLinks.userId], references: [users.id] }),
  links: many(links),
}));

export const links = sqliteTable(
  "link",
  {
    slug: text("slug", { length: 30 }).primaryKey(),
    userLinkId: text("userLinkId")
      .references(() => userLinks.id, {
        onDelete: "cascade",
      })
      .notNull(),
    description: text("description", { length: 255 }),
    url: text("url").notNull(),
    clicks: integer("clicks").default(0).notNull(),
    createdAt: integer("created_at", { mode: "timestamp" })
      .default(sql`(strftime('%s', 'now'))`)
      .notNull(),
  },
  (links) => ({
    userLinkIdIdx: index("userLinkId_idx").on(links.userLinkId),
  }),
);

export type ShortLink = typeof links.$inferSelect;
export type NewShortLink = typeof links.$inferInsert;

export const linksRelations = relations(links, ({ one }) => ({
  userLink: one(userLinks, {
    fields: [links.userLinkId],
    references: [userLinks.id],
  }),
}));
