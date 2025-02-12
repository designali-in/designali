// Dependencies: pnpm install dicons

import { ChevronDown } from "dicons";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const items = [
  {
    id: "1",
    title: "What makes Designali unique?",
    collapsibles: [
      {
        title: "How does it perform?",
        content:
          "Each component is optimized for efficiency, ensuring minimal bundle size and maximum speed.",
      },
      {
        title: "Is the documentation comprehensive?",
        content:
          "Yes! Our documentation includes detailed explanations, live examples, and best practices for every component.",
      },
    ],
  },
  {
    id: "2",
    title: "Can I customize the components?",
    collapsibles: [
      {
        title: "Does it support custom themes?",
        content:
          "Absolutely! Our flexible theming system allows full customization, including light and dark mode support.",
      },
      {
        title: "Is Tailwind CSS supported?",
        content:
          "Yes! We offer seamless integration with Tailwind CSS, enabling custom utility classes for effortless styling.",
      },
    ],
  },
  {
    id: "3",
    title: "Is Designali built for performance?",
    collapsibles: [
      {
        title: "What’s the impact on bundle size?",
        content:
          "Our components are tree-shakeable, keeping your bundle lightweight and efficient.",
        open: true,
      },
      {
        title: "Does it support code splitting?",
        content:
          "Yes, automatic code splitting ensures optimal loading performance for your application.",
      },
    ],
  },
  {
    id: "4",
    title: "How accessible are the components?",
    collapsibles: [
      {
        title: "Which screen readers are supported?",
        content:
          "We rigorously test with NVDA, VoiceOver, and JAWS to ensure a fully accessible experience.",
      },
      {
        title: "Is keyboard navigation included?",
        content:
          "Yes! All components follow WAI-ARIA best practices for complete keyboard navigation support.",
      },
    ],
  },
];

export default function AccordionDemo() {
  return (
    <div className="w-full space-y-4">
      <h2 className="text-xl font-bold">Multi Level</h2>
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
            className="overflow-hidden border bg-background first:rounded-t-lg last:rounded-b-lg"
          >
            <AccordionTrigger className="px-4 py-3 text-[15px] leading-6 hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="p-0">
              {item.collapsibles.map((collapsible, index) => (
                <CollapsibleDemo
                  key={index}
                  title={collapsible.title}
                  content={collapsible.content}
                  open={collapsible.open}
                />
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

function CollapsibleDemo({
  title,
  content,
  open,
}: {
  title: string;
  content: string;
  open?: boolean;
}) {
  return (
    <Collapsible
      className="space-y-1 border-t border-border bg-accent px-4 py-3"
      defaultOpen={open}
    >
      <CollapsibleTrigger className="flex gap-2 text-[15px] font-semibold leading-6 [&[data-state=open]>svg]:rotate-180">
        <ChevronDown
          strokeWidth={1}
          className="mt-1 h-4 w-4 shrink-0 opacity-60 transition-transform duration-200"
          aria-hidden="true"
        />
        {title}
      </CollapsibleTrigger>
      <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden ps-6 text-sm text-muted-foreground transition-all">
        {content}
      </CollapsibleContent>
    </Collapsible>
  );
}
