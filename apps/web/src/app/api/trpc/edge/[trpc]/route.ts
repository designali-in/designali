import type { NextRequest } from "next/server";
import { createTRPCContext } from "@designali/api";
import { edgeRouter } from "@designali/api/src/edge";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

export const runtime = "edge";

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: "/api/trpc/edge",
    router: edgeRouter,
    req: req,
    // @ts-expect-error
    createContext: () => createTRPCContext({ req }),
    onError: ({ error }) => {
      console.log("Error in tRPC handler (edge)");
      console.error(error);
    },
  });

export { handler as GET, handler as POST };
