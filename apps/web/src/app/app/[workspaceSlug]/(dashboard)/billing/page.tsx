import React from "react";
import ManageSubscription from "@/components/dashboard/billing/ManageSubscription";
import UpdgradeAccBtn from "@/src/components/dashboard/billing/updgradeAccBtn";
import { auth, signIn } from "@designali/auth";
import { db } from "@designali/db";
import { users } from "@designali/db/src/schema";
import { eq } from "drizzle-orm";

const billing = async () => {
  const session = await auth();

  if (!session.user.id) {
    signIn();
    return null;
  }

  const user = await db.query.users.findFirst({
    where: eq(users.id, session.user.id),
  });

  const plan = user.subscribed ? "premium" : "free";

  return (
    <main className="mx-auto mt-40 h-screen max-w-xl">
      <ManageSubscription />
      <p className="text-center">You currently are on a {plan} plan</p>
      <UpdgradeAccBtn />
    </main>
  );
};

export default billing;
