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
    title: "What sets Designali apart?",
    content:
      "Designali is built with TypeScript for enhanced type safety, optimized for performance, and designed with developers in mind. It adheres to accessibility standards and offers detailed documentation with frequent updates.",
  },
  {
    id: "2",
    title: "Can I customize the components?",
    content:
      "Absolutely! Customize styles using CSS variables for global changes or leverage className and style props for component-specific tweaks. Designali supports CSS modules, Tailwind, and built-in dark mode.",
  },
  {
    id: "3",
    title: "Is Designali performance-friendly?",
    content:
      "Yes! With features like tree-shaking, code splitting, and minimal runtime overhead, most components are under 5KB gzipped, ensuring optimal performance.",
  },
  {
    id: "4",
    title: "How accessible are the components?",
    content:
      "Every component follows WAI-ARIA standards, ensuring proper ARIA attributes, keyboard navigation, and screen reader compatibility. We continuously test for seamless usability across NVDA, VoiceOver, and JAWS.",
  },
];

export default function AccordionDemo() {
  return (
    <div className="w-full space-y-4">
      <h2 className="text-xl font-bold">Table Left Plus Minus</h2>
      <Accordion
        type="single"
        collapsible
        className="w-full -space-y-px border-none"
        defaultValue="3"
      >
        {items.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="border bg-background px-4 py-1 first:rounded-t-lg last:rounded-b-lg"
          >
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="flex flex-1 items-center gap-3 py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&>svg]:-order-1 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                {item.title}
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
