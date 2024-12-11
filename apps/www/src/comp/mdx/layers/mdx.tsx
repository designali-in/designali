/* eslint-disable @typescript-eslint/no-unnecessary-condition */
"use client";

import type { Event } from "@/lib/events";
import type { NpmCommands } from "@/types/unist";
import ImageZoom from "@/comp/common/image-zoom";
import { Style } from "@/registry/registry-styles";
import { useMDXComponent } from "next-contentlayer/hooks";

import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CopyButton, CopyNpmCommandButton } from "../../uis/copy-button";
import Callout from "./callout";
import { CodeBlockWrapper } from "./code-block-wrapper";
import { ComponentExample } from "./component-example";
import { ComponentPreview } from "./component-preview";
import { ComponentSource } from "./component-source";
import {
  FlexGrid,
  FlexGridLOGO,
  FlexGridTHREE,
  FlexGridTWO,
  TabGrid,
} from "./flex-grid";
import { FrameworkDocs } from "./framework-docs";
import Image from "./image";
import { ImageGrid, ImageGridTHREE, ImageGridTWO } from "./image-grid";
import ItemGrid from "./item-grid";
import Link from "./link";
import LinkCard from "./link-card";
import MdxCard from "./mdx-card";
import Table from "./table";
import Tree from "./tree";
import Video from "./video";

interface MdxProps {
  code: string;
}

const components = {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  a: Link,
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-extrabold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "my-6 scroll-m-20 border-b border-slate-200 pb-4 text-3xl font-semibold tracking-tight first:mt-0 dark:border-slate-800",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <p
      className={cn(
        "leading-7 text-slate-600 dark:text-slate-400 [&:not(:first-child)]:mt-6",
        className,
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<Element>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn(
        "mt-6 border-l-4 border-slate-200 pl-6 italic dark:border-slate-800 [&>*]:text-muted-foreground",
        className,
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cn(
        "rounded-md border border-slate-200 dark:border-slate-800",
        className,
      )}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,

  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn(
        "m-0 border-t border-slate-200 p-0 even:bg-muted dark:border-slate-800",
        className,
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border border-slate-200 px-4 py-2 text-left font-bold dark:border-slate-800 [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border border-slate-200 px-4 py-2 text-left dark:border-slate-800 [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
    <Tabs className={cn("relative mt-6 w-full", className)} {...props} />
  ),
  TabsList: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsList>) => (
    <TabsList
      className={cn(
        "w-full justify-start rounded-none border-b bg-transparent p-0",
        className,
      )}
      {...props}
    />
  ),
  TabsTrigger: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsTrigger>) => (
    <TabsTrigger
      className={cn(
        "relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none",
        className,
      )}
      {...props}
    />
  ),
  TabsContent: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsContent>) => (
    <TabsContent
      className={cn(
        "relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold",
        className,
      )}
      {...props}
    />
  ),
  Image: (props: React.ComponentPropsWithoutRef<typeof Image>) => {
    const { alt, src, ...rest } = props;

    return (
      <>
        <ImageZoom>
          <Image
            src={src}
            className="not-prose bg-aired flex h-full w-full cursor-zoom-in rounded-2xl border border-slate-200 object-cover object-center dark:border-slate-800"
            alt={alt}
            {...rest}
          />
        </ImageZoom>
        <figcaption className="mb-2"></figcaption>
      </>
    );
  },
  SmallImage: (props: React.ComponentPropsWithoutRef<typeof Image>) => {
    const { alt, src, ...rest } = props;

    return (
      <>
        <ImageZoom>
          <Image
            src={src}
            className="flex w-[200px] cursor-zoom-in rounded-3xl border border-slate-200 object-cover object-center dark:border-slate-800"
            alt={alt}
            {...rest}
          />
        </ImageZoom>
        <figcaption className="mb-2"></figcaption>
      </>
    );
  },
  Step: ({ className, ...props }: React.ComponentProps<"h1">) => (
    <h1
      className={cn(
        "mt-8 scroll-m-20 font-heading text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  Steps: ({ ...props }) => (
    <div
      className="[&>h1]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]"
      {...props}
    />
  ),
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  FrameworkDocs: ({
    className,
    ...props
  }: React.ComponentProps<typeof FrameworkDocs>) => (
    <FrameworkDocs className={cn(className)} {...props} />
  ),
  Alert: (props: React.ComponentPropsWithoutRef<typeof Alert>) => (
    <Alert {...props} />
  ),
  AlertTitle: (props: React.ComponentPropsWithoutRef<typeof AlertTitle>) => (
    <AlertTitle {...props} />
  ),
  AlertDescription: (
    props: React.ComponentPropsWithoutRef<typeof AlertDescription>,
  ) => <AlertDescription {...props} />,
  CodeBlockWrapper: ({ ...props }) => (
    <CodeBlockWrapper className="rounded-md border" {...props} />
  ),
  // pre: CodeBlock,

  pre: ({
    className,
    __rawString__,
    __npmCommand__,
    __pnpmCommand__,
    __yarnCommand__,
    __bunCommand__,
    __withMeta__,
    __src__,
    __event__,
    __style__,
    __name__,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    __style__?: Style["name"];
    __rawString__?: string;
    __npmCommand__?: string;
    __pnpmCommand__?: string;
    __yarnCommand__?: string;
    __bunCommand__?: string;
    __withMeta__?: boolean;
    __src__?: string;
    __event__?: Event["name"];
    __name__?: string;
  }) => {
    return (
      <>
        <pre
          className={cn(
            "relative my-4 max-h-[650px] overflow-x-auto rounded-lg border bg-slate-950 px-6 py-4 dark:bg-slate-900",
            className,
          )}
          {...props}
        />
        {__rawString__ && __src__ && __event__ && (
          <CopyButton
            value={__rawString__}
            src={__src__}
            event={__event__}
            className={cn("absolute right-4 top-4", __withMeta__ && "top-1")}
          />
        )}
        {__npmCommand__ &&
          __yarnCommand__ &&
          __pnpmCommand__ &&
          __bunCommand__ && (
            <CopyNpmCommandButton
              commands={{
                __npmCommand__,
                __pnpmCommand__,
                __yarnCommand__,
                __bunCommand__,
              }}
              className={cn(
                "absolute -top-14 right-4 ",
                __withMeta__ && "top-16",
              )}
            />
          )}
      </>
    );
  },
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className,
      )}
      {...props}
    />
  ),
  ItemGrid,
  FlexGrid,
  ComponentPreview,
  ComponentSource,
  ComponentExample,
  FlexGridTWO,
  FlexGridLOGO,
  Callout,
  ImageGridTWO,
  FlexGridTHREE,
  ImageGridTHREE,
  ImageGrid,
  TabGrid,
  Table,
  Tree,
  Video,
  LinkCard,
  Card: MdxCard,
};

const Mdx = (props: MdxProps) => {
  const { code } = props;
  const Component = useMDXComponent(code);

  return (
    <div className="prose w-full max-w-none dark:prose-invert">
      <Component components={{ ...components }} />
    </div>
  );
};

export default Mdx;
