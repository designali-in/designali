// Dependencies: pnpm install lucide-react

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
    title: "Why Choose Designali?",
    content:
      "We create clean, modern, and user-friendly designs that enhance brand identity.",
  },
  {
    id: "2",
    title: "Can I Personalize the Components?",
    content:
      "Yes! Easily adjust colors, fonts, layouts, and animations to fit your style.",
  },
  {
    id: "3",
    title: "Is Designali Built for Speed?",
    content:
      "Definitely! Our designs are lightweight, optimized, and load quickly for a smooth experience.",
  },
  {
    id: "4",
    title: "How Accessible Are the Designs?",
    content:
      "All designs follow best accessibility practices, ensuring easy navigation and screen reader support.",
  },
];

export default function AccordionDemo() {
  return (
    <div className="w-full space-y-4">
      <h2 className="text-xl font-bold">Left Plus Minus</h2>
      <Accordion type="single" collapsible className="w-full" defaultValue="3">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="py-2">
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="flex flex-1 items-center gap-3 py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&>svg]:-order-1 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                {item.title}
                <DIcons.Plus
                  strokeWidth={1}
                  className="h-4 w-4 shrink-0 opacity-60 transition-transform duration-200"
                  aria-hidden="true"
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="pb-2 ps-7 text-muted-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
