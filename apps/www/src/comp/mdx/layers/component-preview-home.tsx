"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Index } from "@/__registry__";
import { CopyButton } from "@/comp/uis/copy-button";
import { Button } from "@/registry/default/ui/button";
import { styles } from "@/registry/registry-styles";
import { DIcons } from "dicons";

import { cn } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import ScriptCopyBtn from "@/components/ui/script-copy-btn";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ThemeWrapper } from "../../common/theme-wrapper";
import OpenInV0 from "../open-in-v0";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  extractClassname?: boolean;
  extractedClassNames?: string;
  align?: "center" | "start" | "end";
  description?: string;
  hideCode?: boolean;
  type?: "block" | "component" | "example";
}

export function ComponentPreview({
  name,
  type,
  children,
  className,
  extractClassname,
  extractedClassNames,
  align = "center",
  description,
  hideCode = false,
  ...props
}: ComponentPreviewProps) {
  const [config] = useConfig();
  const index = styles.findIndex((style) => style.name === config.style);

  const Codes = React.Children.toArray(children) as React.ReactElement[];
  const Code = Codes[index];

  const Preview = React.useMemo(() => {
    const Component = Index[config.style][name]?.component;

    if (!Component) {
      return (
        <p className="text-sm text-muted-foreground">
          Component{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>
      );
    }

    return <Component />;
  }, [name, config.style]);

  const codeString = React.useMemo(() => {
    if (
      typeof Code?.props["data-rehype-pretty-code-fragment"] !== "undefined"
    ) {
      const [Button] = React.Children.toArray(
        Code.props.children,
      ) as React.ReactElement[];
      return Button?.props?.value || Button?.props?.__rawString__ || null;
    }
  }, [Code]);

  if (type === "block") {
    return (
      <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-md border">
        <Image
          src={`/images/blocks/${name}.png`}
          alt={name}
          width={1440}
          height={900}
          className="absolute left-0 top-0 z-20 w-[970px] max-w-none bg-background dark:hidden sm:w-[1280px] md:hidden md:dark:hidden"
        />
        <Image
          src={`/images/blocks/${name}-dark.png`}
          alt={name}
          width={1440}
          height={900}
          className="absolute left-0 top-0 z-20 hidden w-[970px] max-w-none bg-background dark:block sm:w-[1280px] md:hidden md:dark:hidden"
        />
        <div className="absolute inset-0 hidden w-[1600px] bg-background md:block">
          <iframe src={`/blocks/default/${name}`} className="size-full" />
        </div>
      </div>
    );
  }

  const customCommandMap = {
    pnpm: `pnpm dlx shadcn@latest add https://www.designali.in/r/styles/default/${name}.json`,
    npm: `npx shadcn@latest add https://www.designali.in/r/styles/default/${name}.json`,
    yarn: `npx dlx shadcn@latest add https://www.designali.in/r/styles/default/${name}.json`,
    bun: `bunx --bun shadcn@latest https://www.designali.in/r/styles/default/${name}.json`,
  };

  return (
    <div
      className={cn("group relative my-4 flex flex-col space-y-2", className)}
      {...props}
    >
      <Tabs defaultValue="preview" className="relative  w-full">
        <div className="flex items-center justify-between pb-2">
          {!hideCode && (
            <TabsList className="w-full justify-between rounded-none border-b bg-transparent">
              <div>
                <TabsTrigger
                  value="preview"
                  className="relative h-10 rounded-none border-b-2 border-b-transparent   px-3   font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  <DIcons.Eye className="h-4 w-4" />
                </TabsTrigger>

                <TabsTrigger
                  value="install"
                  className="relative h-10 rounded-none border-b-2 border-b-transparent px-3 font-semibold   text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  <DIcons.Settings className="h-4 w-4" />
                </TabsTrigger>
              </div>
              <div className="flex items-center gap-2">
                <OpenInV0
                  componentSource={`https://designali.in/r/styles/default/${name}.json`}
                />

                <Link
                  href={`https://designali.in/r/styles/default/${name}.json`}
                  target="_blank"
                >
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <DIcons.Code className="h-4 w-4" />
                  </Button>
                </Link>
                <p className="text-sm">{name}</p>
              </div>
            </TabsList>
          )}
        </div>
        <TabsContent value="preview" className="relative rounded-xl border">
          <div
            className={cn(
              "preview flex min-h-[450px] w-full justify-center p-8",
              {
                "items-center": align === "center",
                "items-start": align === "start",
                "items-end": align === "end",
              },
            )}
          >
            <React.Suspense
              fallback={
                <div className="flex w-full items-center justify-center text-sm text-muted-foreground">
                  <DIcons.Loader className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </div>
              }
            >
              {Preview}
            </React.Suspense>
          </div>
        </TabsContent>

        <TabsContent className="grid" value="install">
          <ScriptCopyBtn
            codeLanguage="shell"
            lightTheme="nord"
            darkTheme="vitesse-dark"
            commandMap={customCommandMap}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
