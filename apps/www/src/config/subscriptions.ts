//@ts-nocheck
import type { PlansRow, SubscriptionPlan } from "@/types/global";

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

export const plansColumns = ["starter", "pro", "agency"] as const;

export const comparePlans: PlansRow[] = [
  {
    feature: "Production ready designs",
    free: true,
    pro: true,
    agency: true,
    enterprise: "Custom",
    tooltip: "Production ready designs",
  },
  {
    feature: "Regular quality checks by senior designers",
    free: null,
    pro: "500/mo",
    agency: "1,500/mo",
    enterprise: "Unlimited",
    tooltip: "Production ready designs",
  },
  {
    feature: "Quick revisions on request",
    free: null,
    pro: "Email",
    agency: "Email & Chat",
    enterprise: "24/7 Support",
  },
  {
    feature: "Chat one-on-one without rushing",
    free: null,
    pro: null,
    agency: true,
    enterprise: "Custom",
    tooltip: "Production ready designs",
  },
  {
    feature: "All products",
    free: null,
    pro: null,
    agency: null,
    enterprise: true,
    tooltip: "Production ready designs",
  },
  {
    feature: "No software cost",
    free: "Limited",
    pro: "Standard",
    agency: "Enhanced",
    enterprise: "Full",
  },
  {
    feature: "Daily project updates",
    free: false,
    pro: true,
    agency: true,
    enterprise: "Custom",
    tooltip: "Production ready designs",
  },

  {
    feature: "Tools Access",
    free: false,
    pro: "Self-service",
    agency: "Assisted",
    enterprise: "Full Service",
    tooltip: "Production ready designs",
  },
  // Add more rows as needed
];
