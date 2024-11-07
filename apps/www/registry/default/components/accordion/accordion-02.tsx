import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function DesignProcess() {
  return (
    <div className="px-6">
      <Accordion
        orientation="vertical"
        type="single"
        defaultValue="item-1"
        collapsible
        className="rounded-md border lg:rounded-3xl"
      >
        <div className="grid lg:flex">
          <AccordionItem className="relative" value="item-1">
            <AccordionTrigger>BRIEF</AccordionTrigger>
            <AccordionContent>
              At the inception of any project, my creative journey begins by
              thoroughly understanding your vision and goals for the visual
              design of your project. Through detailed discussions and
              briefings, I ensure that I grasp the essence of your brand
              identity and the message you want to convey to your audience. This
              initial step lays a strong foundation for the entire creative
              process.
            </AccordionContent>
            <p className="bottom-6 pb-4 lg:absolute lg:pb-0">01</p>
          </AccordionItem>
          <AccordionItem className="relative" value="item-2">
            <AccordionTrigger>Research</AccordionTrigger>
            <AccordionContent>
              With your vision as my compass, I embark on a journey of
              exploration and insight. I immerse myself in research, diving deep
              into the latest trends in web design, studying competitors, and
              analyzing market preferences. By gaining a comprehensive
              understanding of your industry landscape and audience
              demographics, I gather invaluable insights that fuel the creative
              spark.
            </AccordionContent>
            <p className="bottom-6 pb-4 lg:absolute lg:pb-0">02</p>
          </AccordionItem>
        </div>
      </Accordion>
    </div>
  );
}
