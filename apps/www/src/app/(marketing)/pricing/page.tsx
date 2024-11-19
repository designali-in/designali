/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { ComparePlans } from "@/comp/dashboard/pricing/compare-plans";
import { PricingCards } from "@/comp/dashboard/pricing/pricing-cards";
import { PricingFaq } from "@/comp/dashboard/pricing/pricing-faq";
import { cn } from "@designali/ui";

import { getCurrentUser } from "@/lib/session";
import { getUserSubscriptionPlan } from "@/lib/subscription";

import { Avegra } from "../../fonts";

export default async function PricingPage() {
  const user = await getCurrentUser();

  let subscriptionPlan;
  if (user && user.id) {
    subscriptionPlan = await getUserSubscriptionPlan(user.id);
  }

  return (
    <div className="w-ful mx-auto flex max-w-7xl flex-col gap-16 px-6 xl:px-0">
      <div className="mx-auto mt-40 max-w-3xl  md:max-w-7xl ">
        <div className="grid items-center justify-center px-8 pb-1 text-center">
          <h3
            className={cn(
              Avegra.className,
              "z-20 inline-flex items-baseline bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text pb-1 text-center text-7xl text-transparent dark:bg-gradient-to-r dark:from-slate-200 dark:via-slate-400 dark:to-slate-200 dark:bg-clip-text md:text-8xl",
            )}
          >
            Pricing
          </h3>{" "}
          <hr className="bg-ali mx-auto my-4 h-1 w-6 rounded border-0"></hr>
        </div>
      </div>
      <PricingCards userId={user?.id} subscriptionPlan={subscriptionPlan} />
      <hr className="container" />
      <ComparePlans />
      <PricingFaq />
    </div>
  );
}
