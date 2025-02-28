// Dependencies: pnpm install dicons

import { DIcon, DIcons } from "dicons";

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
    icon: DIcons.Command,
    collapsibles: [
      {
        title: "How does it perform?",
        content:
          "Every component is fine-tuned for speed, ensuring minimal bundle size and optimal efficiency.",
        icon: DIcons.Gauge,
      },
      {
        title: "Is the documentation extensive?",
        content:
          "Absolutely! Our documentation is detailed, with live examples and best practices for every component.",
        icon: DIcons.CircleDashed,
      },
    ],
  },
  {
    id: "2",
    title: "Can I customize the components?",
    icon: DIcons.Eclipse,
    collapsibles: [
      {
        title: "Is custom theming supported?",
        content:
          "Yes! Our theming system is fully flexible, allowing easy customization of both light and dark modes.",
        icon: DIcons.Gauge,
      },
      {
        title: "How well does it work with Tailwind?",
        content:
          "We offer seamless integration with Tailwind CSS, including custom utility classes for enhanced styling.",
        icon: DIcons.CircleDashed,
      },
    ],
  },
  {
    id: "3",
    title: "Is Designali optimized for performance?",
    icon: DIcons.PlugZap,
    collapsibles: [
      {
        title: "What’s the impact on bundle size?",
        content:
          "Our components are tree-shakeable, ensuring they add minimal overhead to your application.",
        open: true,
        icon: DIcons.Gauge,
      },
      {
        title: "Does it support code splitting?",
        content:
          "Yes, automatic code splitting is built-in for improved loading times and efficiency.",
        icon: DIcons.CircleDashed,
      },
    ],
  },
  {
    id: "4",
    title: "How accessible are the components?",
    icon: DIcons.AtSign,
    collapsibles: [
      {
        title: "Which screen readers are supported?",
        content:
          "We rigorously test with NVDA, VoiceOver, and JAWS to ensure full accessibility compliance.",
        icon: DIcons.Gauge,
      },
      {
        title: "Does it support keyboard navigation?",
        content:
          "Yes! Our components follow WAI-ARIA best practices for smooth and intuitive keyboard navigation.",
        icon: DIcons.CircleDashed,
      },
    ],
  },
];

export default function AccordionDemo() {
  return (
    <div className="w-full space-y-4">
      <h2 className="text-xl font-bold">Multi-level Icon</h2>
      <Accordion
        type="single"
        collapsible
        className="w-full border-none"
        defaultValue="3"
      >
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger className="justify-start gap-3 text-[15px] leading-6 hover:no-underline [&>svg]:-order-1">
              <span className="flex items-center gap-3">
                <item.icon
                  strokeWidth={1}
                  className="h-5 w-5 shrink-0 opacity-60"
                  aria-hidden="true"
                />
                <span>{item.title}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="p-0">
              {item.collapsibles.map((collapsible, index) => (
                <CollapsibleDemo
                  key={index}
                  title={collapsible.title}
                  content={collapsible.content}
                  open={collapsible.open}
                  icon={collapsible.icon}
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
  icon: Icon,
}: {
  title: string;
  content: string;
  open?: boolean;
  icon: DIcon;
}) {
  return (
    <Collapsible
      className="space-y-1 border-t border-border py-3 pe-4 ps-6"
      defaultOpen={open}
    >
      <CollapsibleTrigger className="flex gap-2 text-[15px] font-semibold leading-6 [&[data-state=open]>svg]:rotate-180">
        <DIcons.ChevronDown
          strokeWidth={1}
          className="mt-1  shrink-0 opacity-60 transition-transform duration-200"
          aria-hidden="true"
        />
        <span className="flex items-center gap-3">
          <Icon
            strokeWidth={2}
            className="h-5 w-5 shrink-0 opacity-60"
            aria-hidden="true"
          />
          <span>{title}</span>
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden ps-6 text-sm text-muted-foreground transition-all">
        {content}
      </CollapsibleContent>
    </Collapsible>
  );
}
