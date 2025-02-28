//@ts-nocheck
"use client";

import { useTransition } from "react";
import { openCustomerPortal } from "@/actions/open-customer-portal";
import { DIcons } from "dicons";

import { Button } from "@/components/ui/button";

interface CustomerPortalButtonProps {
  userStripeId: string;
}

export function CustomerPortalButton({
  userStripeId,
}: CustomerPortalButtonProps) {
  const [isPending, startTransition] = useTransition();
  const generateUserStripeSession = openCustomerPortal.bind(null, userStripeId);

  const stripeSessionAction = () =>
    startTransition(async () => await generateUserStripeSession());

  return (
    <Button disabled={isPending} onClick={stripeSessionAction}>
      {isPending ? (
        <DIcons.Loader className="mr-2 size-4 animate-spin" />
      ) : null}
      Open Customer Portal
    </Button>
  );
}
