import {
  index,
  integer,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

export const subscriptions = sqliteTable("user_subscription", {
  id: integer("id").primaryKey(),
  userId: integer("user_id"), // `varchar` is fine as it is
  stripeCustomerId: text("stripe_customer_id"),
  stripeSubscriptionId: text("stripe_subscription_id"),
  subscribed: integer("subscribed", { mode: "boolean" }).notNull(),
});
