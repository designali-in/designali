// Dependencies: pnpm install dicons

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "dicons";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

const items = [
  {
    id: "1",
    title: "Connected Accounts",
    sub: "Effortlessly manage your linked accounts",
    content:
      "Link your Google, GitHub, or Microsoft accounts for seamless access and a streamlined workflow. Enjoy single sign-on convenience and easily import your preferences. You can disconnect any account whenever needed.",
  },
  {
    id: "2",
    title: "Notifications",
    sub: "Personalize your notification preferences",
    content:
      "Stay updated with what matters most. Choose to receive alerts for security updates, billing, product announcements, usage insights, and maintenance schedules. Get notified via email, SMS, or push notifications.",
  },
  {
    id: "3",
    title: "2-Step Verification",
    sub: "Enhance security with two-factor authentication",
    content:
      "Secure your account with 2FA. Use Google Authenticator, Authy, SMS codes, or security keys like Designali for added protection. For maximum security, we recommend using an authenticator app.",
  },
  {
    id: "4",
    title: "Contact Support",
    sub: "24/7 assistance, whenever you need it",
    content:
      "Our support team is here around the clock. Whether it's billing, technical issues, or general inquiries, reach out via live chat, email at support@designali.com, or schedule a call. Premium support is available for enterprise customers.",
  },
];

export default function AccordionDemo() {
  return (
    <div className="w-full space-y-4">
      <h2 className="text-xl font-bold">Sub-header and Chevron</h2>
      <Accordion type="single" collapsible className="w-full" defaultValue="3">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="py-2">
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&[data-state=open]>svg]:rotate-180">
                <span className="flex flex-col space-y-1">
                  <span>{item.title}</span>
                  {item.sub && (
                    <span className="text-sm font-normal">{item.sub}</span>
                  )}
                </span>
                <ChevronDown
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
