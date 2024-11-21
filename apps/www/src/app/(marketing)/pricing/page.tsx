/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { ComparePlans } from "@/comp/dashboard/pricing/compare-plans";
import { PricingCards } from "@/comp/dashboard/pricing/pricing-cards";
import { PricingFaq } from "@/comp/dashboard/pricing/pricing-faq";

import { getCurrentUser } from "@/lib/session";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { cn } from "@/lib/utils";

import { Avegra } from "../../fonts";

export default async function PricingPage() {
  const user = await getCurrentUser();

  let subscriptionPlan;
  if (user && user.id) {
    subscriptionPlan = await getUserSubscriptionPlan(user.id);
  }

  return (
    <div className="  mx-auto  max-w-7xl  px-6 xl:px-0">
      <div className=" mt-28 ">
        <div className="flex items-center justify-center px-8 pb-1 text-center">
          <h3
            className={cn(
              Avegra.className,
              "z-20  items-baseline bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text pb-1 text-center text-3xl text-transparent dark:bg-gradient-to-r dark:from-slate-200 dark:via-slate-400 dark:to-slate-200 dark:bg-clip-text md:text-5xl",
            )}
          >
            Pricing
          </h3>
        </div>
        <p className="mx-auto max-w-xl text-center text-xs">
          Forget the messy job of hiring and surprise expenses. Enjoy top-notch
          designs whenever you want, all for a monthly price. It’s really that
          easy!
        </p>
      </div>
      <PricingCards userId={user?.id} subscriptionPlan={subscriptionPlan} />
      <hr className="container" />
      <ComparePlans />
      <PricingFaq />
    </div>
  );
}
