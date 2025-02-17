import Image from "next/image";
import Link from "next/link";
import AdBanner from "@/comp/AdBanner";
import PatternGenerator from "@/comp/tools/design-pattern";

import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Avegra } from "@/app/fonts";

import { Patrns } from "./ptrns";

export const metadata = {
  title: "Patterns - Designali",
  description: "A design agency with a touch of magic.",
};

export default function Ptrns() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -top-40 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="dark:stroke-ali stroke-ali/20 absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={5}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>

          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="my-40">
        <div className="">
          <p className="px-6 text-center text-lg font-light uppercase tracking-widest lg:text-xl">
            Introducing
          </p>

          <h1
            className={cn(
              Avegra.className,
              "text-center text-7xl tracking-tighter sm:text-9xl",
            )}
          >
            Patterns
          </h1>
          <p className="mx-auto max-w-lg px-6 text-center text-sm font-light lg:-mt-4 lg:text-lg">
            +5000 abstract pattern elements and backgrounds for your amazing
            design projects.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Patterns</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <PatternGenerator />

        <p className="ml-2 mt-6 text-center font-semibold ">
          All patterns are 100% free.
        </p>
        <h1 className="text-ali -mb-10 flex w-full justify-center  text-center text-9xl font-thin  ">
          4K
        </h1>
        <div className="mx-auto mt-10 max-w-7xl px-6 xl:px-0">
          <Patrns />
        </div>

        <p className="text-aired mt-10 text-center text-lg lg:text-xl">
          Download. Edit. Upload.
        </p>
        <div className="px-8">
          <h1
            className={cn(
              Avegra.className,
              "py-2 text-center text-3xl sm:text-6xl",
            )}
          >
            The Pretty of Patterns
          </h1>
          <p className="mx-auto max-w-lg text-center text-sm font-light text-slate-600 dark:text-slate-400 lg:text-lg">
            +2000 abstract pattern elements and backgrounds for your amazing
            design projects.
          </p>
          <div className="mt-10 grid justify-center gap-4">
            <Link href="/graphic">
              <Button size="lg">
                Download from Graphics
                <span className="sr-only">Buy now</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className=" mx-auto mt-20 max-w-7xl px-6  xl:px-0"></div>
      </div>
    </div>
  );
}
