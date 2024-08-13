import React from "react";
import ManageSubscription from "@/components/dashboard/billing/ManageSubscription";
import { auth, signIn } from "@designali/auth";
import { db } from "@designali/db";
import { users } from "@designali/db/src/schema";
import { eq } from "drizzle-orm";

const billing = async () => {
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    signIn();
    return null;
  }

  const user = await db.query.users.findFirst({
    where: eq(users.id, session.user.id),
  });

  return (
    <main className="mt-40 h-screen">
      <ManageSubscription />
      <p className="text-center">You currently are on a plan</p>
    </main>
  );
};

export default billing;
