import { authRouter } from "./router/auth";
import { postRouter } from "./router/post";
import { ratesRouter } from "./router/rates";
import { viewsRouter } from "./router/views";
import { createTRPCRouter } from "./trpc";

export const edgeRouter = createTRPCRouter({
  auth: authRouter,
  post: postRouter,

  rates: ratesRouter,
  views: viewsRouter,
});
