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
    title: "Connected accounts",
    sub: "Manage your linked social and work accounts",
    content:
      "Connect your accounts from Google, GitHub, or Microsoft to enable single sign-on and streamline your workflow. Connected accounts can be used for quick login and importing your preferences across platforms. You can revoke access to any connected account at any time.",
  },
  {
    id: "2",
    icon: DIcons.Bell01,
    title: "Notifications",
    sub: "Customize your notification preferences",
    content:
      "Choose which updates you want to receive. You can get notifications for: security alerts, billing updates, newsletter and product announcements, usage reports, and scheduled maintenance. Notifications can be delivered via email, SMS, or push notifications on your devices.",
  },
  {
    id: "3",
    icon: DIcons.ShieldCheck,
    title: "2-step verification",
    sub: "Add an extra layer of security to your account",
    content:
      "Protect your account with two-factor authentication. You can use authenticator apps like Google Authenticator or Authy, receive SMS codes, or use security keys like YubiKey. We recommend using an authenticator app for the most secure experience.",
  },
  {
    id: "4",
    icon: DIcons.LifeBuoy,
    title: "Contact support",
    sub: "We're here to help 24/7",
    content:
      "Our support team is available around the clock to assist you. For billing inquiries, technical issues, or general questions, you can reach us through live chat, email at support@example.com, or schedule a call with our technical team. Premium support is available for enterprise customers.",
  },
];

export default function AccordionDemo() {
  return (
    <div className="w-full space-y-4">
      <h2 className="text-xl font-bold">Icon Sub-header and Plus Minus</h2>
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
                <DIcons.Plus
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
