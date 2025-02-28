//@ts-nocheck
import { BillingInfo } from "@/components/dashboard/pricing/billing-info";

import { getCurrentUser } from "@/lib/session";
import { getUserSubscriptionPlan } from "@/lib/subscription";

export default async function BillingPage() {
  const user = await getCurrentUser();

  let userSubscriptionPlan;
  if (user || user.role !== "USER") {
    userSubscriptionPlan = await getUserSubscriptionPlan(user.id);
  }

  return (
    <main className="p-6">
      <div className="">
        <h1 className="py-4 text-2xl font-semibold">Billing</h1>
        <BillingInfo userSubscriptionPlan={userSubscriptionPlan} />
      </div>
    </main>
  );
}
