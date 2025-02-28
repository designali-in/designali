import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
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
      <h2 className="text-xl font-bold">Left Chevron</h2>
      <Accordion type="single" collapsible className="w-full" defaultValue="3">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="py-2">
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
