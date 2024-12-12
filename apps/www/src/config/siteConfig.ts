export const siteConfig = {
  name: "Designali",
  description: "Your SaaS Description",
  url: process.env.NEXT_PUBLIC_APP_URL,
  ogImage: "",
  links: {
    twitter: "",
    github: "",
  },
  emails: {
    from: {
      name: "Designali",
      email: "contact@designali.in", // Must be verified in Resend
    },
  },
  stripe: {
    plans: [
      {
        name: "Starter",
        description: "Good for small projects",
        price: {
          amount: 9,
          priceIds: {
            test: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_STARTER,
            production: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_STARTER,
          },
        },
        features: ["Feature 1", "Feature 2", "Feature 3"],
      },
      {
        name: "Pro",
        description: "Perfect for growing businesses",
        price: {
          amount: 29,
          priceIds: {
            test: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PRO,
            production: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PRO,
          },
        },
        features: ["All Starter features", "Feature 4", "Feature 5"],
      },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
