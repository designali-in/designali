import { authRouter } from "./router/auth";
import { ratesRouter } from "./router/rates";
import { viewsRouter } from "./router/views";
import { createTRPCRouter } from "./trpc";

export const edgeRouter = createTRPCRouter({
  auth: authRouter,

  rates: ratesRouter,
  views: viewsRouter,
});
