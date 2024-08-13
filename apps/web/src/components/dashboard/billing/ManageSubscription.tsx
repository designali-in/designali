"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@designali/ui/button";

import PageTitle from "../../mdx/page-title";

const ManageSubscription = () => {
  const router = useRouter();

  const redirectToCustomerPortal = async () => {
    try {
      const response = await fetch("/api/stripe/create-portal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { url } = await response.json();

      router.push(url.url);
    } catch (error) {
      console.error("Error redirecting to customer portal", error);
    }
  };

  return (
    <div className="mx-auto mb-6 mt-40 max-w-7xl space-y-2">
      <PageTitle
        title="Billing"
        description={`Manage your orders and view your order details`}
      />
      <div className="flex justify-center">
        <Button onClick={redirectToCustomerPortal}>
          Change your subscription
        </Button>
      </div>
    </div>
  );
};

export default ManageSubscription;
