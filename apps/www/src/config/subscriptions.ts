import type { PlansRow, SubscriptionPlan } from "@/types";

import { env } from "@/env";

export const pricingData: SubscriptionPlan[] = [
  {
    title: "Free",
    description: "Everything you need to kickstart your design project.",
    benefits: [
      "DIcons - Outline style",
      "UI Components",
      "Community",
      "Tools",
      "Graaadients",
      "DShapes",
      "Colors",
    ],
    limitations: [],
    prices: {
      monthly: 0,
      yearly: 0,
    },
    stripeIds: {
      monthly: null,
      yearly: null,
    },
  },
  {
    title: "Pro",
    description: "Unlock Advanced Features",
    benefits: [
      "All include are Free",
      "Unlimited access to Graphic",
      "DIcons - 4x styles",
      "Abstractions",
      "Illustrations",
      "Branding Mockups",
      "Devices Mockups",
    ],
    limitations: [],
    prices: {
      monthly: 300,
      yearly: 3000,
    },
    stripeIds: {
      monthly: env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID,
      yearly: env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID,
    },
  },
  {
    title: "Agency",
    description: "For Power Users",
    benefits: [
      "All include are Pro",
      "Branding",
      "Web Design",
      "Web Develop",
      "Motion Graphic",
      "Updates every 48 hours",
      "Unlimited revisions",
      "Teams Access",
    ],
    limitations: [],
    prices: {
      monthly: 50000,
      yearly: 360000,
    },
    stripeIds: {
      monthly: env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID,
      yearly: env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PLAN_ID,
    },
  },
];

export const plansColumns = ["free", "pro", "agency"] as const;

export const comparePlans: PlansRow[] = [
  {
    feature: "Production ready designs",
    starter: true,
    pro: true,
    business: true,
    enterprise: "Custom",
    tooltip: "Production ready designs",
  },
  {
    feature: "Regular quality checks by senior designers",
    starter: null,
    pro: "500/mo",
    business: "1,500/mo",
    enterprise: "Unlimited",
    tooltip: "Production ready designs",
  },
  {
    feature: "Quick revisions on request",
    starter: null,
    pro: "Email",
    business: "Email & Chat",
    enterprise: "24/7 Support",
  },
  {
    feature: "Chat one-on-one without rushing",
    starter: null,
    pro: null,
    business: true,
    enterprise: "Custom",
    tooltip: "Production ready designs",
  },
  {
    feature: "All products",
    starter: null,
    pro: null,
    business: null,
    enterprise: true,
    tooltip: "Production ready designs",
  },
  {
    feature: "No software cost",
    starter: "Limited",
    pro: "Standard",
    business: "Enhanced",
    enterprise: "Full",
  },
  {
    feature: "Daily project updates",
    starter: false,
    pro: true,
    business: true,
    enterprise: "Custom",
    tooltip: "Production ready designs",
  },

  {
    feature: "Tools Access",
    starter: false,
    pro: "Self-service",
    business: "Assisted",
    enterprise: "Full Service",
    tooltip: "Production ready designs",
  },
  // Add more rows as needed
];
