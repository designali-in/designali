/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
"use client";

import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/designali/ui/tabs";
import { CodeBlock } from "@/src/components/mdx/layers/code-block";
import { useConfig } from "@/src/hooks/use-config";

import { CopyButton } from "../../ui/copy-button";
import { ThemeWrapper } from "../theme-wrapper";

// Load the component dynamically in the client
export default function ClientDemoComponent({
  directory,
  componentName,
  className,
  source,
}: {
  directory: string;
  componentName: string;
  className?: string;
  source: string;
}) {
  const [config] = useConfig();
  const DynamicComponent = dynamic(
    () =>
      import(
        `@/registry/default/components/${directory}/${componentName}`
      ).then((mod) => mod.default),
    { ssr: false }, // Prevents server-side rendering for this component
  );

  return (
    <div className={cn("group/item relative mt-10", className)}>
      <Tabs defaultValue="1" className="">
        <TabsList className="space-x-4 text-xs lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100">
          <TabsTrigger value="1">{componentName}</TabsTrigger>
          <TabsTrigger value="2">Code</TabsTrigger>
        </TabsList>
        <TabsContent className="relative flex justify-center" value="1">
          <ThemeWrapper>
            {config.style === "default" && <DynamicComponent />}
          </ThemeWrapper>
        </TabsContent>
        <TabsContent value="2">
          <CodeBlock title={".tsx"}>{source || ""}</CodeBlock>
        </TabsContent>
      </Tabs>
      <div className="mt-10 space-x-4 text-xs lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100">
        <CopyButton value={source || ""} />
      </div>
    </div>
  );
}
