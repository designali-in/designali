// Dependencies: pnpm install dicons

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { DIcons } from "dicons";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

const items = [
  {
    id: "1",
    icon: DIcons.Link2,
    title: "Connected Accounts",
    sub: "Easily manage your linked accounts",
    content:
      "Link your Google, GitHub, or Microsoft accounts for seamless access and a streamlined workflow. Enjoy single sign-on convenience and effortlessly import your preferences. You can disconnect any linked account at any time.",
  },
  {
    id: "2",
    icon: DIcons.Bell01,
    title: "Notifications",
    sub: "Personalize your notification settings",
    content:
      "Stay informed with updates that matter to you. Receive alerts for security, billing, product announcements, usage insights, and scheduled maintenance. Notifications can be sent via email, SMS, or push notifications.",
  },
  {
    id: "3",
    icon: DIcons.ShieldCheck,
    title: "2-Step Verification",
    sub: "Strengthen your account security",
    content:
      "Enhance your security with two-factor authentication. Use Google Authenticator, Authy, SMS codes, or security keys like YubiKey for added protection. We recommend an authenticator app for the most secure experience.",
  },
  {
    id: "4",
    icon: DIcons.LifeBuoy,
    title: "Contact Support",
    sub: "We're available 24/7 to assist you",
    content:
      "Need help? Our support team is here around the clock. For billing, technical issues, or general inquiries, contact us via live chat, email at support@example.com, or schedule a call. Enterprise customers can access premium support.",
  },
];

export default function AccordionDemo() {
  return (
    <div className="w-full space-y-4">
      <h2 className="text-xl font-bold">Icon Sub-header and Chevron</h2>
      <Accordion type="single" collapsible className="w-full" defaultValue="3">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="py-2">
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&[data-state=open]>svg]:rotate-180">
                <span className="flex items-center gap-3">
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border"
                    aria-hidden="true"
                  >
                    <item.icon strokeWidth={1} className="h-5 w-5 opacity-60" />
                  </span>
                  <span className="flex flex-col space-y-1">
                    <span>{item.title}</span>
                    {item.sub && (
                      <span className="text-sm font-normal">{item.sub}</span>
                    )}
                  </span>
                </span>
                <DIcons.ChevronDown
                  strokeWidth={1}
                  className="h-4 w-4 shrink-0 opacity-60 transition-transform duration-200"
                  aria-hidden="true"
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="ms-3 pb-2 ps-10 text-muted-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
