import type { TRPCRouterRecord } from "@trpc/server";
import { desc, eq } from "@designali/db";
import { APost, CreateAPostSchema } from "@designali/db/src/schema";
import { z } from "zod";

import { protectedProcedure, publicProcedure } from "../trpc";

export const postRouter = {
  all: publicProcedure.query(({ ctx }) => {
    // return ctx.db.select().from(schema.post).orderBy(desc(schema.post.id));
    return ctx.db.query.APost.findMany({
      orderBy: desc(APost.id),
      limit: 10,
    });
  }),

  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      // return ctx.db
      //   .select()
      //   .from(schema.post)
      //   .where(eq(schema.post.id, input.id));

      return ctx.db.query.APost.findFirst({
        where: eq(APost.id, input.id),
      });
    }),

  create: protectedProcedure
    .input(CreateAPostSchema)
    .mutation(({ ctx, input }) => {
      return ctx.db.insert(APost).values(input);
    }),

  delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.db.delete(APost).where(eq(APost.id, input));
  }),
} satisfies TRPCRouterRecord;
