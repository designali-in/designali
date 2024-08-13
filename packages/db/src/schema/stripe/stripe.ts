import {
  index,
  integer,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

export const userSubscription = sqliteTable(
  "user_subscription",
  {
    id: integer("id").primaryKey(), // Use autoIncrement for serial-like behavior in SQLite
    userId: text("user_id").notNull(),
    stripeSubscriptionId: text("stripe_subscription_id").notNull(),
    stripeCustomerId: text("stripe_customer_id").notNull(),
    stripePriceId: text("stripe_price_id").notNull(),
    stripeCurrentPeriodEnd: integer("stripe_current_period_end", {
      mode: "timestamp",
    }).notNull(),
  },
  (table) => {
    return {
      userIdIdx: uniqueIndex("user_id_idx").on(table.userId),
      stripeSubscriptionIdIdx: uniqueIndex("stripe_subscription_id_idx").on(
        table.stripeSubscriptionId,
      ),
      stripeCustomerIdIdx: uniqueIndex("stripe_customer_id_idx").on(
        table.stripeCustomerId,
      ),
    };
  },
);
