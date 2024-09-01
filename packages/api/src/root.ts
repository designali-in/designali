import { authRouter } from "./router/auth";
import { postRouter } from "./router/post";
import { ratesRouter } from "./router/rates";
import { viewsRouter } from "./router/views";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  post: postRouter,

  rates: ratesRouter,
  views: viewsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
