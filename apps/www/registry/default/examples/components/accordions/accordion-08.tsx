// Dependencies: pnpm install dicons

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "dicons";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

const items = [
  {
    id: "1",
    title: "Connected Accounts",
    sub: "Easily manage your linked accounts",
    content:
      "Link your Google, GitHub, or Microsoft accounts for seamless access and a streamlined workflow. Enjoy single sign-on convenience and effortlessly import your preferences. You can disconnect any linked account at any time.",
  },
  {
    id: "2",
    title: "Notifications",
    sub: "Tailor your notification settings",
    content:
      "Choose the updates that matter to you. Receive alerts for security issues, billing updates, product announcements, usage insights, and scheduled maintenance. Stay informed via email, SMS, or push notifications.",
  },
  {
    id: "3",
    title: "2-Step Verification",
    sub: "Strengthen your account security",
    content:
      "Enhance security with two-factor authentication. Use Google Authenticator, Authy, SMS codes, or security keys like YubiKey for added protection. We recommend an authenticator app for the most secure experience.",
  },
  {
    id: "4",
    title: "Contact Support",
    sub: "We're here for you 24/7",
    content:
      "Need assistance? Our support team is available around the clock. Whether it's billing, technical issues, or general inquiries, contact us via live chat, email at support@example.com, or schedule a call. Premium support is available for enterprise customers.",
  },
];

export default function AccordionDemo() {
  return (
    <div className="w-full space-y-4">
      <h2 className="text-xl font-bold">Sub-header and Plus Minus</h2>
      <Accordion type="single" collapsible className="w-full" defaultValue="3">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="py-2">
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                <span className="flex flex-col space-y-1">
                  <span>{item.title}</span>
                  {item.sub && (
                    <span className="text-sm font-normal">{item.sub}</span>
                  )}
                </span>
                <Plus
                  strokeWidth={1}
                  className="h-4 w-4 shrink-0 opacity-60 transition-transform duration-200"
                  aria-hidden="true"
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="pb-2 text-muted-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
