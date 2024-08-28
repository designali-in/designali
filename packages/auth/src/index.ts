import NextAuth from "next-auth";

import { authConfig } from "./config";

export type { Session } from "next-auth";
// @ts-expect-error some issues with types
const { handlers, auth, signIn, signOut } = NextAuth(authConfig);

export { handlers, auth, signIn, signOut };

export {
  invalidateSessionToken,
  authConfig,
  validateToken,
  isSecureContext,
} from "./config";
