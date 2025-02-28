import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
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
    <div className=" w-full space-y-4">
      <h2 className="text-xl font-bold">Tabs Left Chevron</h2>
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-2 border-none"
        defaultValue="3"
      >
        {items.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="rounded-lg border bg-background px-4 py-1"
          >
            <AccordionTrigger className="justify-start gap-3 py-2 text-[15px] leading-6 hover:no-underline [&>svg]:-order-1">
              {item.title}
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
