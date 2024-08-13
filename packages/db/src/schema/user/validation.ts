import type { z } from "zod";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

import { users } from "./user";

export const insertUserSchema = createInsertSchema(users);

export const selectUserSchema = createSelectSchema(users);

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = z.infer<typeof selectUserSchema>;
