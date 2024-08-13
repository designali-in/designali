import type { User, UserLink } from "@designali/db/src/schema";

export type UserWithLink = User & { userLink?: UserLink };

export interface SafeActionError {
  serverError?: string;
  fetchError?: string;
  validationErrors?: Record<string, string[]>;
}
