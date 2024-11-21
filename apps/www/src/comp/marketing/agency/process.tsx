import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function DesignProcess() {
  return (
    <div className="mx-auto max-w-7xl px-6 xl:px-0">
      <Accordion type="single" defaultValue="item-1" collapsible>
        <div className=" ">
          <AccordionItem className="relative " value="item-1">
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
          <AccordionItem className="relative " value="item-2">
            <AccordionTrigger>RESEARCH</AccordionTrigger>
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
          <AccordionItem className="relative " value="item-3">
            <AccordionTrigger>IDEATION</AccordionTrigger>
            <AccordionContent>
              Drawing upon the insights gathered, I enter the conceptualization
              phase, where creativity flourishes. Through brainstorming sessions
              and sketching exercises, I generate a myriad of ideas for the
              layout, color schemes, typography, and overall visual language of
              your website. This stage is characterized by boundless imagination
              and innovative thinking as I explore diverse concepts to
              encapsulate your brand identity.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="relative " value="item-4">
            <AccordionTrigger>DESIGN</AccordionTrigger>
            <AccordionContent>
              As the concepts take shape, I transition into the design phase,
              where artistry meets functionality. With meticulous attention to
              detail, I meticulously craft the visual narrative of your website,
              ensuring that every element resonates with your brand ethos and
              captivates your audience. From typography choices to graphic
              elements, each design decision is a deliberate step towards
              creating an immersive user experience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="relative " value="item-5">
            <AccordionTrigger>ITERATION</AccordionTrigger>
            <AccordionContent>
              Recognizing that perfection is a journey, not a destination, I
              embrace the refinement and iteration phase with enthusiasm.
              Through collaborative feedback sessions and user testing, I
              fine-tune and iterate on the design, ensuring that every aspect
              aligns seamlessly with your vision and objectives. This iterative
              approach guarantees that your website evolves dynamically, staying
              ahead of the curve and exceeding expectations.
            </AccordionContent>
          </AccordionItem>
        </div>
      </Accordion>
    </div>
  );
}
