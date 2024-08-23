/* eslint-disable @typescript-eslint/no-unsafe-member-access */

"use client";

import React from "react";
import Link from "next/link";
import { CodeBlock } from "@/src/components/mdx/layers/code-block";
import { Button } from "@designali/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@designali/ui/dtabs";
import { ScrollArea } from "@designali/ui/scroll-area";
import { DIcons } from "dicons";

interface InstallIconProps {
  settings;
}

export const InstallIcon = ({ settings }: InstallIconProps) => {
  return (
    <main className={"hidden xl:block"}>
      <div className="">
        <div className="mx-auto max-w-md gap-6 md:h-screen md:border-l">
          <div className="px-6 py-6">
            <h1 className="text-2xl font-semibold">What is DIcons?</h1>
            <p className="py-3 text-sm text-slate-600 dark:text-slate-400">
              Dicons is an open-source icon library that provides 10,000+ vector
              (svg) files for displaying icons and symbols in digital and
              non-digital projects.
            </p>
          </div>
          <ScrollArea>
            <div className="w-[400px] px-6 md:h-[800px]">
              <div className="">
                <h1 className="py-3 text-slate-600 dark:text-slate-400">
                  Import
                </h1>
                <Tabs defaultValue="1">
                  <TabsList>
                    <TabsTrigger value="1">Multi Icons</TabsTrigger>
                    <TabsTrigger value="2">Single Icon</TabsTrigger>
                  </TabsList>
                  <TabsContent className="-mt-2" value="1">
                    <CodeBlock
                      title={".tsx"}
                      children={`import { DIcons } from 'dicons';

const App = () => {
  return (
    <DIcons.${settings.icon} />
  );
};

export default App;`}
                    />
                  </TabsContent>
                  <TabsContent className="-mt-2" value="2">
                    <CodeBlock
                      title={".tsx"}
                      children={`import { ${settings.icon} } from 'dicons';

const App = () => {
  return (
    <${settings.icon} />
  );
};

export default App;`}
                    />
                  </TabsContent>
                </Tabs>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-6">
                  <div className="">
                    <h1 className="py-3 text-slate-600 dark:text-slate-400">
                      Installation
                    </h1>
                    <Tabs defaultValue="npm">
                      <TabsList>
                        <TabsTrigger value="npm">npm</TabsTrigger>
                        <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                        <TabsTrigger value="yarn">yarn</TabsTrigger>
                      </TabsList>
                      <TabsContent className="-mt-2 w-[350px]" value="npm">
                        <CodeBlock
                          title={"React/Nextjs"}
                          children={`npm install dicons`}
                        />
                      </TabsContent>
                      <TabsContent className="-mt-2 w-[350px]" value="pnpm">
                        <CodeBlock
                          title={"React/Nextjs"}
                          children={`pnpm install dicons`}
                        />
                      </TabsContent>
                      <TabsContent className="-mt-2 w-[350px]" value="yarn">
                        <CodeBlock
                          title={"React/Nextjs"}
                          children={`yarn add dicons`}
                        />
                      </TabsContent>
                    </Tabs>
                  </div>
                  <div>
                    <h1 className="py-3 text-slate-600 dark:text-slate-400">
                      Settings
                    </h1>
                    <Tabs defaultValue="1">
                      <TabsList>
                        <TabsTrigger value="1">Color</TabsTrigger>
                        <TabsTrigger value="2">Sizing</TabsTrigger>
                        <TabsTrigger value="3">Stroke Width</TabsTrigger>
                        <TabsTrigger value="4">Fill</TabsTrigger>
                      </TabsList>
                      <TabsContent className="-mt-2 w-[350px]" value="1">
                        <CodeBlock
                          title={".tsx"}
                          children={`<${settings.icon} color="${settings.iconColor}" />`}
                        />
                      </TabsContent>
                      <TabsContent className="-mt-2 w-[350px]" value="2">
                        <CodeBlock
                          title={".tsx"}
                          children={`<${settings.icon} size={${settings.iconSize}} />`}
                        />
                      </TabsContent>
                      <TabsContent className="-mt-2 w-[350px]" value="3">
                        <CodeBlock
                          title={".tsx"}
                          children={`<${settings.icon} strokeWidth={${settings.strokeWidth}} />`}
                        />
                      </TabsContent>
                      <TabsContent className="-mt-2 w-[350px]" value="4">
                        <CodeBlock
                          title={".tsx"}
                          children={`<${settings.icon} fill={"${settings.iconFill}"} />`}
                        />
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
          <div className="w-full p-6">
            <Link href={"/documentation"}>
              <Button size="lg" className="h-10 w-full">
                Go to Docs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
