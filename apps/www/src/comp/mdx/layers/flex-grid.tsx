import type { ButtonProps } from "@/components/ui/button";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { useCopyToClipboard } from "@/hooks/use-copy-clipboard";
import { Button } from "@/components/ui/button";

import { Icons } from "../../icons";
import Image from "./image";

export type Items = {
  image: string;
  name: string;
  description: string;
  url: string;
  size: string;
}[];

interface ItemGridProps {
  items: Items;
}

type CopyButtonProps = {
  text: string;
} & ButtonProps;

export const FlexGrid = (props: ItemGridProps) => {
  const { items } = props;

  return (
    <div className="mb-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target=""
          rel="noopener noreferrer"
          className="grid rounded-2xl border border-slate-200 p-2 no-underline transition-colors duration-150 hover:bg-black/5 dark:border-slate-800 hover:dark:bg-white/5"
        >
          <Image
            src={item.image}
            width={256}
            height={256}
            alt={item.name}
            className="shrink-0"
            imageClassName="m-0 rounded-lg h-full w-full"
          />
          <div className="mt-2 flex flex-col justify-center gap-2 p-2">
            <div className="flex items-center justify-between">
              <div className="text-lg font-extrabold">{item.name}</div>
              <span className="flex text-sm text-slate-600 dark:text-slate-400">
                Download Now
                <Icons.download className="mx-1 h-4 w-4" />
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export const FlexGridTWO = (props: ItemGridProps) => {
  const { items } = props;

  return (
    <div className="mb-9 grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target=""
          rel="noopener noreferrer"
          className="grid rounded-2xl border border-slate-200 p-2 no-underline transition-colors duration-150 hover:bg-black/5 dark:border-slate-800 hover:dark:bg-white/5"
        >
          <Image
            src={item.image}
            width={256}
            height={256}
            alt={item.name}
            className="shrink-0"
            imageClassName="m-0 rounded-lg h-full w-full"
          />
          <div className="mt-2 flex flex-col justify-center gap-2 p-2">
            <div className="flex items-center justify-between">
              <div className="text-lg font-extrabold">{item.name}</div>
              <span className="flex text-sm text-slate-600 dark:text-slate-400">
                Download Now
                <Icons.download className="mx-1 h-4 w-4" />
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export const FlexGridTHREE = (props: ItemGridProps) => {
  const { items } = props;

  return (
    <div className="mb-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target=""
          rel="noopener noreferrer"
          className="grid rounded-2xl border border-slate-200 p-2 no-underline transition-colors duration-150 hover:bg-black/5 dark:border-slate-800 hover:dark:bg-white/5"
        >
          <Image
            src={item.image}
            width={256}
            height={256}
            alt={item.name}
            className="shrink-0"
            imageClassName="m-0 rounded-lg h-full w-full"
          />
          <div className="mt-2 flex flex-col justify-center gap-2 p-2">
            <div className="flex items-center justify-between">
              <div className="text-lg font-extrabold">{item.name}</div>
              <span className="flex text-sm text-slate-600 dark:text-slate-400">
                Download
                <Icons.download className="mx-1 h-4 w-4" />
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export const FlexGridLOGO = (props: ItemGridProps) => {
  const { items } = props;

  return (
    <div className="mb-9 flex flex-wrap gap-3">
      {items.map((item) => (
        <div className="grid rounded-2xl border border-slate-200 p-2 no-underline dark:border-slate-800">
          <Image
            src={item.image}
            width={200}
            height={200}
            alt={item.name}
            className="shrink-0"
            imageClassName="p-2 rounded-lg h-[150px] w-[150px]"
          />
          <div className="mt-2 flex flex-col justify-center gap-2 p-2">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">{item.name}</div>
            </div>
            <Link
              key={item.name}
              href={item.url}
              target="_blank"
              download={true}
              rel="noopener noreferrer"
            >
              <Button size="sm" variant="outline">
                <span className="flex text-sm">
                  Download
                  <Icons.download className="mx-1 h-4 w-4" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export const TabGrid = (props: ItemGridProps) => {
  const { items } = props;

  return (
    <div className="mb-8 mt-4 grid gap-2 md:flex">
      {items.map((item) => (
        <div className="rounded-2xl border border-slate-200 p-2 dark:border-slate-800">
          <Image
            src={item.image}
            width={300}
            height={300}
            alt={item.name}
            className="shrink-0"
            imageClassName="m-0 mb-4 rounded-lg h-full w-full"
          />
          <div className="flex flex-col justify-center gap-2 px-2">
            <div className="flex items-center justify-between gap-4">
              <div className="text-lg font-extrabold">{item.name}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {item.description}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {item.size}
              </div>
              <span className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                <CopyButton text={item.name} />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const CopyButton = (props: CopyButtonProps) => {
  const { text, className, ...rest } = props;
  const [copy, isCopied] = useCopyToClipboard();

  return (
    <Button
      className={cn("bg-aired size-8 p-0 text-white", className)}
      variant="outline"
      onClick={() => copy({ text })}
      type="button"
      aria-label="Copy code to clipboard"
      {...rest}
    >
      {isCopied ? (
        <Icons.copy className="m-2 size-4" />
      ) : (
        <Icons.copy className="m-2 size-4" />
      )}
    </Button>
  );
};
