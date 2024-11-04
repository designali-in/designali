import Image from "next/image";
import Link from "next/link";

import { getCurrentUser } from "@/lib/session";
import { getUserSubscriptionPlan } from "@/lib/subscription"; 
import { ComparePlans } from "@/comp/dashboard/pricing/compare-plans";
import { PricingCards } from "@/comp/dashboard/pricing/pricing-cards";
import { PricingFaq } from "@/comp/dashboard/pricing/pricing-faq";


export default async function PricingPage() {
  const user = await getCurrentUser();
 

  let subscriptionPlan;
  if (user && user.id) {
    subscriptionPlan = await getUserSubscriptionPlan(user.id);
  }

  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <PricingCards userId={user?.id} subscriptionPlan={subscriptionPlan} />
      <hr className="container" />
      <ComparePlans />
      <PricingFaq />
    </div>
  );
}
