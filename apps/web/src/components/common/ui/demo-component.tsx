/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { cn } from "@/lib/utils";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/designali/ui/tabs";
import { CodeBlock } from "@/src/components/mdx/layers/code-block";

import { CopyButton } from "../../ui/copy-button";
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
    await import(`@/registry/default/components/${directory}/${componentName}`)
  ).default;
  const source = await readComponentSource(directory, componentName);

  return (
    <div className={cn("group/item relative mt-10", className)}>
      <Tabs defaultValue="1" className="">
        <TabsList className="mb-10 space-x-4 text-xs lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100">
          <TabsTrigger value="1">{componentName}</TabsTrigger>
          <TabsTrigger value="2">Code</TabsTrigger>
        </TabsList>
        <TabsContent className="relative flex justify-center" value="1">
          <Component />
        </TabsContent>
        <TabsContent value="2">
          <CodeBlock title={".tsx"} children={source || ""} />
        </TabsContent>
      </Tabs>
      <div className="mt-10 space-x-4 text-xs lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100">
        <CopyButton value={source || ""} />
      </div>
    </div>
  );
}
