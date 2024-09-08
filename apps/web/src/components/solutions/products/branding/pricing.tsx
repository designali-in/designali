import Link from "next/link";
import { Icons } from "@/components/icons";
import { HighlighterItem, HighlightGroup } from "@/components/ui/highlighter";
import { Particles } from "@/components/ui/particles";
import { Button } from "@designali/ui/button";
import { ScrollArea } from "@designali/ui/scroll-area";

const tiers = [
  {
    name: "Seed",
    id: "tier-hobby",
    heading: "The Launchpad for Your Vision",
    href: "https://cal.com/aliimam/designali",
    priceMonthly: "₹9999",
    description: "2 week delivery",
    features: [
      "Brand Discovery Workshop (Buyer Persona, Messaging, Brand Story, Brand Tone & Voice)",
      "Moodboarding (Mood Boards, Color Palettes, Shapes)",
      "Brand Identity Design (Stylescapes, Logo, Brand Elements, Typography and Color Theory)",
      "Corporate Stationery (Letterheads, Identity Cards, Visiting Cards, Diary, Envelope",
      "Unlimited revisions for next 7 days",
      "Unlimited stock photos & vector",
    ],
  },
  {
    name: "Grow",
    id: "tier-team",
    heading: "Transformative Branding for Growing Companies",
    href: "https://cal.com/aliimam/designali",
    priceMonthly: "₹20,000",
    description: "3 week delivery",
    features: [
      "Brand Discovery Workshop (Buyer Persona, Messaging, Brand Story, Brand Tone & Voice)",
      "Moodboarding (Mood Boards, Color Palettes, Shapes)",
      "Brand Identity Design (Stylescapes, Logo, Brand Elements, Typography and Color Theory)",
      "Corporate Stationery (Letterheads, Identity Cards, Visiting Cards, Diary, Envelope",
      "Social Media Template Design",
      "Design System (Icons, Typography, Patterns, UI Kit, Style Guide, Design Guidelines and Principles)",
      "Presentation Template / Brochure Design",
      "Unlimited revisions for next 7 days",
      "Unlimited stock photos & vector",
    ],
  },
  {
    name: "Bloom",
    id: "tier-team",
    heading: "Defining the Future of Your Brand",
    href: "https://cal.com/aliimam/designali",
    priceMonthly: "₹50,000",
    description: "4 week delivery",
    features: [
      "Brand Discovery Workshop (Buyer Persona, Messaging, Brand Story, Brand Tone & Voice)",
      "Moodboarding (Mood Boards, Color Palettes, Shapes)",
      "Brand Identity Design (Stylescapes, Logo, Brand Elements, Typography and Color Theory)",
      "Corporate Stationery (Letterheads, Identity Cards, Visiting Cards, Diary, Envelope",
      "Social Media Template Design",
      "Design System (Icons, Typography, Patterns, UI Kit, Style Guide, Design Guidelines and Principles)",
      "Presentation Template / Brochure Design",

      "4 page website design & develop",
      "Collaterals (Flyers, Internal posters (Portrait + Landscape), Hoardings, Event backdrops (Stage)",
      "Uniform design (Caps, Badge Design, Mugs)",
      "Custom Intricate Illustrations (Container Packaging (Primary), Delivery Packaging (Secondary), Thank You Cards, Branded Wrapping Materials)",
      "Email Marketing Template",
      "Email Signature",
      "Unlimited revisions for next 7 days",
      "Unlimited stock photos & vector",
    ],
  },
];

export function BrandingPricing() {
  return (
    <div id="pricing" className="mx-auto max-w-7xl">
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <HighlightGroup className="group">
            <div
              key={tier.id}
              className="group/item h-full md:col-span-6 lg:col-span-4"
              data-aos="fade-down"
            >
              <HighlighterItem className="h-full rounded-3xl">
                <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100/50 dark:border-slate-800 dark:bg-black">
                  <Particles
                    className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                    quantity={50}
                    color={"#ffffff"}
                    vy={-0.2}
                  />

                  <div className="flex flex-col p-6 xl:p-10">
                    <div
                      className="pointer-events-none absolute bottom-0 right-1 -z-10 aspect-square w-1/2 -translate-y-1/2 translate-x-1"
                      aria-hidden="true"
                    >
                      <div className="translate-z-0 absolute inset-0 rounded-full bg-slate-100 blur-[80px] dark:bg-slate-800" />
                    </div>

                    <div>
                      <h3 className="text-xl font-light leading-7 text-ali">
                        {tier.name}
                      </h3>
                      <p className="mt-4 text-xs text-slate-600 dark:text-slate-400">
                        {tier.heading}
                      </p>
                      <div className="mt-4 flex items-baseline gap-x-2 text-green-500">
                        <span className="text-4xl font-semibold tracking-tight">
                          {tier.priceMonthly}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                        {tier.description}
                      </p>
                      <ScrollArea className="h-[300px]">
                        <ul
                          role="list"
                          className="mt-4 space-y-4 text-sm leading-6"
                        >
                          {tier.features.map((feature) => (
                            <li key={feature} className="flex gap-x-3">
                              <Icons.check
                                className="h-6 w-5 flex-none text-green-500"
                                aria-hidden="true"
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </ScrollArea>
                    </div>
                    <div className="mt-10">
                      <Link
                        href={tier.href}
                        target="_blank"
                        aria-describedby={tier.id}
                        className=""
                      >
                        <Button variant="default" size="lg">
                          Get started today
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
          </HighlightGroup>
        ))}
      </div>
    </div>
  );
}
