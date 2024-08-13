import { authRouter } from "./router/auth";
import { likesRouter } from "./router/likes";
import { postRouter } from "./router/post";
import { ratesRouter } from "./router/rates";
import { spotifyRouter } from "./router/spotify";
import { viewsRouter } from "./router/views";
import { youtubeRouter } from "./router/youtube";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  post: postRouter,
  likes: likesRouter,
  youtube: youtubeRouter,
  spotify: spotifyRouter,
  rates: ratesRouter,
  views: viewsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
