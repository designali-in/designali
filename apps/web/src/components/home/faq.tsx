import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@designali/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Why wouldn't I just hire a full-time designer?",
    answer:
      "Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize. With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them.",
    value: "item-1",
  },
  {
    question: "Is there a limit to how many requests I can have?",
    answer:
      "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one.",
    value: "item-2",
  },
  {
    question: "How fast will I receive my designs?",
    answer:
      "On average, most requests are completed in just two days or less. However, more complex requests can take longer.",
    value: "item-3",
  },
  {
    question: "Who are the designers?",
    answer:
      "You might be surprised to hear this, but Designali is actually an agency of one. This means you'll work directly with me, founder of Designali. However, power-ups requests such as animations or custom illustrations are provided by my team.",
    value: "item-4",
  },
  {
    question: "How do I request designs?",
    answer:
      "Designali offers a ton of flexibility in how you request designs using the Dashboard. Some common ways clients request designs is directly via Dashboard, sharing Google docs or wireframes (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in Your Dashboard, it's fair game.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="mx-auto max-w-7xl py-24">
      <div className="mb-8 text-center">
        <h1 className="text-center text-3xl font-semibold md:text-5xl">
          Commonly Asked Questions
        </h1>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
