import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pricingFaqData = [
  {
    id: "item-1",
    question: "What payment methods do you accept?",
    answer:
      "We accept credit cards, bank transfers, and payment platforms such as Paytm, UPI, Cred. Payment terms will be outlined in your proposal.",
  },
  {
    id: "item-2",
    question: "What makes your pricing different from other agencies?",
    answer:
      "Our pricing reflects the quality, expertise, and personalized service we provide. We focus on delivering value that aligns with your business goals.",
  },
  {
    id: "item-3",
    question: "What will I receive in 48 hours?",
    answer:
      "You can expect typical requests to be delivered within 48 hours on average. This includes items like a brand concept, a landing page, or a set of social media templates. For larger requests, deliverables will be provided in stages, with updates every 24 hours until the entire project is completed.",
  },
  {
    id: "item-4",
    question: "⁠What happens if I need to cancel my project?",
    answer:
      "If you decide to cancel your project after it has begun, we will retain the initial deposit to cover the work completed up to that point. Depending on the timing, we may be able to offer a partial refund for work that has not yet been started.",
  },
  {
    id: "item-5",
    question:
      "What if I need a design for something not listed on your website?",
    answer:
      "We offer a wide range of custom design services, even if they’re not listed on our website. Whether you need a specialized design for an event, packaging, or a product, feel free to contact us with your requirements, and we’ll provide a solution tailored to your needs.",
  },
];

export function PricingFaq() {
  return (
    <section className="p-6 pt-0">
      <Accordion type="single" collapsible className="w-full">
        {pricingFaqData.map((faqItem) => (
          <AccordionItem key={faqItem.id} value={faqItem.id}>
            <AccordionTrigger>{faqItem.question}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground sm:text-[15px]">
              {faqItem.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
