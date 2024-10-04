"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CodeBlock } from "@/src/components/mdx/layers/code-block";
import { Button } from "@designali/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@designali/ui/dtabs";

export const InstallShapes = () => {
  return (
    <main className={"mb-20 px-6 xl:px-0"}>
      <div className="mx-auto max-w-5xl gap-6 md:h-full">
        <div className="grid justify-center text-center">
          <h1 className="text-2xl font-semibold">What is DShapes?</h1>
          <p className="flex max-w-3xl justify-center py-3 text-sm text-slate-600 dark:text-slate-400">
            DShapes is a fun, creative project offering a collection of over 100
            abstract shapes with grainy gradients, designed by realvjy. These
            unique shapes are perfect for enhancing any design or development
            project. Best of all, the entire set is open-source and free for
            both personal and commercial use!
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <div className="flex flex-wrap gap-6">
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
                    children={`npm install dshapes`}
                  />
                </TabsContent>
                <TabsContent className="-mt-2 w-[350px]" value="pnpm">
                  <CodeBlock
                    title={"React/Nextjs"}
                    children={`pnpm install dshapes`}
                  />
                </TabsContent>
                <TabsContent className="-mt-2 w-[350px]" value="yarn">
                  <CodeBlock
                    title={"React/Nextjs"}
                    children={`yarn add dshapes`}
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
                  <TabsTrigger value="1">Import</TabsTrigger>
                  <TabsTrigger value="2">Sizing</TabsTrigger>
                  <TabsTrigger value="3">Noise</TabsTrigger>
                  <TabsTrigger value="4">Index</TabsTrigger>
                </TabsList>
                <TabsContent className="-mt-2 w-[350px]" value="1">
                  <CodeBlock
                    title={".tsx"}
                    children={`import { Abstract } from "dshapes"`}
                  />
                </TabsContent>
                <TabsContent className="-mt-2 w-[350px]" value="2">
                  <CodeBlock
                    title={".tsx"}
                    children={`<Abstract size="24" />`}
                  />
                </TabsContent>
                <TabsContent className="-mt-2 w-[350px]" value="3">
                  <CodeBlock
                    title={".tsx"}
                    children={`<Abstract noise="true" />`}
                  />
                </TabsContent>
                <TabsContent className="-mt-2 w-[350px]" value="4">
                  <CodeBlock
                    title={".tsx"}
                    children={`<Abstract index="2" />`}
                  />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center px-6 py-6">
          <Link href={"/documentation"}>
            <Button size="lg" className="h-10">
              Go to Docs
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};
