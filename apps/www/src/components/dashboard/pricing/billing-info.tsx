import type { UserSubscriptionPlan } from "@/types/global";
import { CustomerPortalButton } from "@/components/forms/customer-portal-button";
import { getUserSubscriptionPlan } from "@/src/lib/subscription";

import { getCurrentUser } from "@/lib/session";
import {  formatDate } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { PricingCards } from "./pricing-cards";

interface BillingInfoProps extends React.HTMLAttributes<HTMLFormElement> {
  userSubscriptionPlan: UserSubscriptionPlan;
}

export async function BillingInfo({ userSubscriptionPlan }: BillingInfoProps) {
  const user = await getCurrentUser();

  let subscriptionPlan;

  if (user && user.id) {
    subscriptionPlan = await getUserSubscriptionPlan(user.id);
  }

  const {
    title,
    description,
    stripeCustomerId,
    isPaid,
    isCanceled,
    stripeCurrentPeriodEnd,
  } = userSubscriptionPlan;

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Subscription Plan</CardTitle>
        <CardDescription>
          You are currently on the <strong>{title}</strong> plan.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        {description}
        {isPaid ? (
          <p className="text-sm font-medium text-muted-foreground">
            {isCanceled
              ? "Your plan will be canceled on "
              : "Your plan renews on "}
            {formatDate(stripeCurrentPeriodEnd)}.
          </p>
        ) : null}

        {isPaid && stripeCustomerId ? (
          <CustomerPortalButton userStripeId={stripeCustomerId} />
        ) : (
          <PricingCards userId={user?.id} subscriptionPlan={subscriptionPlan} />
        )}
      </CardContent>
    </Card>
  );
}
