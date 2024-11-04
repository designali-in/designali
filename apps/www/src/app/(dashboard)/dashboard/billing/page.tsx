 

import { getCurrentUser } from "@/lib/session";
import { getUserSubscriptionPlan } from "@/lib/subscription";   
import { BillingInfo } from "@/comp/dashboard/pricing/billing-info"; 

 
export default async function BillingPage() {
  const user = await getCurrentUser();

  let userSubscriptionPlan;
  if (user || user.role !== "USER") {
    userSubscriptionPlan = await getUserSubscriptionPlan(user.id);
  }  

  return (
    <>
      
      <div className="grid mx-auto max-w-7xl mt-40 gap-8">
         
        <BillingInfo  userSubscriptionPlan={userSubscriptionPlan} />
      </div>
    </>
  );
}
