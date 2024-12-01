import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function DesignProcess() {
  return (
    <div className="px-6">
      <Accordion type="single" className="rounded-md border lg:rounded-3xl">
        <div className="  h-full w-full  ">
          <AccordionItem className="relative h-full md:w-80  " value="item-1">
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
          </AccordionItem>
          <AccordionItem className="relative h-full md:w-80 " value="item-2">
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
          </AccordionItem>
        </div>
      </Accordion>
    </div>
  );
}
