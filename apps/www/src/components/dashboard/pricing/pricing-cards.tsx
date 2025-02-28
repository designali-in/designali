"use client";

import type { UserSubscriptionPlan } from "@/types/global";
import { useState } from "react";
import Link from "next/link";
import { BillingFormButton } from "@/components/forms/billing-form-button";
import { useSigninModal } from "@/src/hooks/use-signin-modal";

import { pricingData } from "@/config/subscriptions";
import { Button, buttonVariants } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

import { Check } from "lucide-react";
import { Close } from "dicons";

interface PricingCardsProps {
  userId?: string;
  subscriptionPlan?: UserSubscriptionPlan;
}

export function PricingCards({ userId, subscriptionPlan }: PricingCardsProps) {
  const isYearlyDefault =
    !subscriptionPlan?.interval || subscriptionPlan.interval === "year"
      ? true
      : false;
  const [isYearly, setIsYearly] = useState<boolean>(!!isYearlyDefault);
  const signInModal = useSigninModal();

  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  return (
    <section className=" flex flex-col items-center text-center">
      <div className="mx-auto my-10 flex w-full flex-col gap-5">
        <h1 className="text-ali text-3xl font-semibold tracking-tighter">
          Design at full speed !
        </h1>
      </div>

      <div className="mb-4 flex items-center gap-5">
        <span>Monthly Billing</span>
        <Switch
          checked={isYearly}
          onCheckedChange={toggleBilling}
          role="switch"
          aria-label="switch-year"
        />
        <span>Annual Billing</span>
      </div>

      <div className="mx-auto grid w-full max-w-screen-lg gap-3 bg-inherit py-3 md:grid-cols-3 lg:grid-cols-3">
        {pricingData.map((offer) => (
          <div
            className="relative flex w-full flex-col overflow-hidden rounded-3xl border"
            key={offer.title}
          >
            <div className="min-h-[150px] w-full items-start space-y-4 bg-secondary/70 p-6">
              <p className="flex font-urban text-sm font-bold uppercase tracking-wider text-muted-foreground">
                {offer.title}
              </p>

              <div className="flex  flex-row">
                <div className="flex items-end">
                  <div className="flex text-left text-3xl font-semibold leading-6">
                    {isYearly && offer.prices.monthly > 0 ? (
                      <>
                        <span className="mr-2 font-light text-muted-foreground line-through">
                          ₹{offer.prices.monthly}
                        </span>
                        <span className="text-green-500">
                          ₹{offer.prices.yearly / 12}
                        </span>
                      </>
                    ) : (
                      `₹${offer.prices.monthly}`
                    )}
                  </div>
                  <div className="-mb-1 text-left text-sm font-medium">
                    <div>/mo</div>
                  </div>
                </div>
              </div>
              {offer.prices.monthly > 0 ? (
                <div className="text-left text-sm text-muted-foreground">
                  {isYearly
                    ? `₹${offer.prices.yearly} will be charged when annual`
                    : "when charged monthly"}
                </div>
              ) : null}
            </div>

            <div className="flex h-full w-full flex-col justify-between gap-16 p-6">
              <ul className="space-y-2 text-left text-sm font-medium leading-normal">
                {offer.benefits.map((feature) => (
                  <li className="flex items-start" key={feature}>
                    <Check className="mr-3 h-5 w-5 shrink-0" />
                    <p>{feature}</p>
                  </li>
                ))}

                {offer.limitations.length > 0 &&
                  offer.limitations.map((feature) => (
                    <li
                      className="flex items-start text-muted-foreground"
                      key={feature}
                    >
                      <Close className="mr-3 h-5 w-5 shrink-0" />
                      <p>{feature}</p>
                    </li>
                  ))}
              </ul>

              {userId && subscriptionPlan ? (
                offer.title === "Free" ? (
                  <Link
                    href="/dashboard"
                    className={buttonVariants({
                      className: "w-full",
                      variant: "outline",
                    })}
                  >
                    Go to dashboard
                  </Link>
                ) : (
                  <BillingFormButton
                    year={isYearly}
                    offer={offer}
                    subscriptionPlan={subscriptionPlan}
                  />
                )
              ) : (
                <Link href={"/login"}>
                  <Button className="w-full">Sign in</Button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
