import type { products, reviews } from "@designali/db/src/schema";
import type { InferSelectModel } from "drizzle-orm";

// PRODUCTS
export type Product = InferSelectModel<typeof products>;
export type Review = InferSelectModel<typeof reviews> & {
  user?: { name: string };
};
