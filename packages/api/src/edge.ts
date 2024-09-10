import { authRouter } from "./router/auth";
import { ratesRouter } from "./router/rates";
import { createTRPCRouter } from "./trpc";

export const edgeRouter = createTRPCRouter({
  auth: authRouter,

  rates: ratesRouter,
});
