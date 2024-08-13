"use server";

import type { z } from "zod";
import { revalidatePath } from "next/cache";
import { PAGE_SIZE } from "@/lib/constant/constants";
import { db } from "@designali/db";
import { products } from "@designali/db/src/schema";
import { desc } from "drizzle-orm";
import { and, count, eq, ilike, sql } from "drizzle-orm/sql";

import { formatError } from "../dutils";
import { insertProductSchema, updateProductSchema } from "../validator";

// CREATE
export async function createProduct(data: z.infer<typeof insertProductSchema>) {
  try {
    const product = insertProductSchema.parse(data);
    // @ts-expect-error some issues with types
    await db.insert(products).values(product);

    revalidatePath("/admin/products");
    return {
      success: true,
      message: "Product created successfully",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// UPDATE
export async function updateProduct(data: z.infer<typeof updateProductSchema>) {
  try {
    const product = updateProductSchema.parse(data);
    const productExists = await db.query.products.findFirst({
      where: eq(products.id, product.id),
    });
    if (!productExists) throw new Error("Product not found");
    // @ts-expect-error some issues with types
    await db.update(products).set(product).where(eq(products.id, product.id));
    revalidatePath("/admin/products");
    return {
      success: true,
      message: "Product updated successfully",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// GET
export async function getProductById(productId: string) {
  return await db.query.products.findFirst({
    where: eq(products.id, productId),
  });
}

export async function getUserProducts() {
  const data = await db.query.products.findMany({
    orderBy: [desc(products.createdAt)],
    limit: 4,
  });
  return data;
}

export async function getProductBySlug(slug: string) {
  return await db.query.products.findFirst({
    where: eq(products.slug, slug),
  });
}

export async function getAllProducts({
  query,
  limit = PAGE_SIZE,
  page,
  price,
  rating,
  sort,
}: {
  query: string;
  limit?: number;
  page: number;
  price?: string;
  rating?: string;
  sort?: string;
}) {
  const queryFilter =
    query && query !== "all" ? ilike(products.name, `%${query}%`) : undefined;

  const ratingFilter =
    rating && rating !== "all"
      ? sql`${products.rating} >= ${rating}`
      : undefined;
  // 100-200
  const priceFilter =
    price && price !== "all"
      ? sql`${products.price} >= ${price.split("-")[0]} AND ${
          products.price
        } <= ${price.split("-")[1]}`
      : undefined;
  const order =
    sort === "lowest"
      ? products.price
      : sort === "highest"
        ? desc(products.price)
        : sort === "rating"
          ? desc(products.rating)
          : desc(products.createdAt);

  const condition = and(queryFilter, ratingFilter, priceFilter);
  const data = await db
    .select()
    .from(products)
    .where(condition)
    .orderBy(order)
    .offset((page - 1) * limit)
    .limit(limit);

  const dataCount = await db
    .select({ count: count() })
    .from(products)
    .where(condition);

  return {
    data,
    totalPages: Math.ceil(dataCount[0].count / limit),
  };
}

// DELETE
export async function deleteProduct(id: string) {
  try {
    const productExists = await db.query.products.findFirst({
      where: eq(products.id, id),
    });
    if (!productExists) throw new Error("Product not found");
    await db.delete(products).where(eq(products.id, id));
    revalidatePath("/admin/products");
    return {
      success: true,
      message: "Product deleted successfully",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
