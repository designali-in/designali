import { cn } from "@/lib/utils";
import { CodeBlock } from "@/src/components/mdx/layers/code-block";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@designali/ui/accordion";

import CopyButton from "./copy-button";
import { readComponentSource } from "./read-component-source";

export default async function DemoComponent({
  directory,
  componentName,
  className,
}: {
  directory: string;
  componentName: string;
  className?: string;
}) {
  const Component = (
    await import(
      `../../../../registry/default/components/${directory}/${componentName}`
    )
  ).default;
  const source = await readComponentSource(directory, componentName);

  return (
    <div className={cn("group/item relative mt-40", className)}>
      <Component />
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Code</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <CodeBlock title={".tsx"} children={source || ""} />
      <CopyButton componentSource={source || ""} />
    </div>
  );
}
