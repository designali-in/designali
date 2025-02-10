// Dependencies: pnpm install lucide-react

import { DIcons } from "dicons";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: "1",
    icon: DIcons.Image,
    title: "Why Choose Designali?",
    content:
      "We create clean, modern, and user-friendly designs that enhance brand identity.",
  },
  {
    id: "2",
    icon: DIcons.Info,
    title: "Can I Personalize the Components?",
    content:
      "Yes! Easily adjust colors, fonts, layouts, and animations to fit your style.",
  },
  {
    id: "3",
    icon: DIcons.Speech,
    title: "Is Designali Built for Speed?",
    content:
      "Definitely! Our designs are lightweight, optimized, and load quickly for a smooth experience.",
  },
  {
    id: "4",
    icon: DIcons.TextQuote,
    title: "How Accessible Are the Designs?",
    content:
      "All designs follow best accessibility practices, ensuring easy navigation and screen reader support.",
  },
];

export default function AccordionDemo() {
  return (
    <div className="w-full space-y-4">
      <h2 className="text-xl font-bold">Icon and Chevron</h2>
      <Accordion type="single" collapsible className="w-full" defaultValue="3">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="py-2">
            <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline">
              <span className="flex items-center gap-3">
                <item.icon
                  strokeWidth={1}
                  className="h-5 w-5 shrink-0 opacity-60"
                  aria-hidden="true"
                />
                <span>{item.title}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-2 ps-7 text-muted-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
