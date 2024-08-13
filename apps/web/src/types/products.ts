import { products, reviews } from "@designali/db/src/schema";
import { InferSelectModel } from "drizzle-orm";
import { z } from "zod";

// PRODUCTS
export type Product = InferSelectModel<typeof products>;
export type Review = InferSelectModel<typeof reviews> & {
  user?: { name: string };
};
