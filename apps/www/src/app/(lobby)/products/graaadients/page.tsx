import Image from "next/image";
import Link from "next/link";
import AdBanner from "@/components/common/AdBanner";
import { GradientGenerator } from "@/components/lobby/products/tools/gradient-generator";

import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avegra } from "@/lib/fonts/fonts";
import { Button } from "@/components/ui/button";

import { Grads } from "./grads";

export const metadata = {
  title: "Graaadients",
  description: "A design agency with a touch of magic.",
};

export default function AboutAI() {
  return (
    <div className="relative">
      <Image
        src="/images/products/grad.png"
        alt="Your Image"
        height={700}
        width={700}
        className="absolute inset-x-0 -top-60 -z-10 min-h-screen w-full object-cover"
      />
      <div className="mt-24">
        <div className="">
          <p className="px-6 text-center text-lg font-light uppercase tracking-widest text-white lg:text-xl">
            Introducing
          </p>

          <h1
            className={cn(
              Avegra.className,
              "text-center text-7xl tracking-tighter text-white sm:text-9xl"
            )}
          >
            Graaadients
          </h1>
          <p className="mx-auto max-w-lg px-6 text-center text-sm font-light text-white lg:-mt-4 lg:text-lg">
            +5000 abstract gradient elements and backgrounds for your amazing
            design projects.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="text-slate-200 hover:text-white"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-slate-200" />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/products"
                  className="text-slate-200 hover:text-white"
                >
                  Products
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-slate-200" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">
                  Graaadients
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="relative container-wrapper my-6 border-grid rounded-3xl border-y">
          <GradientGenerator />

          <p className="ml-2 mt-6 text-center font-semibold ">
            All gradients are 100% free.
          </p>
          <h1 className="text-ali  flex w-full justify-center  text-center text-9xl font-thin  ">
            4K
          </h1>
          <div className="">
            <div className="relative">
              <Grads />
            </div>
            <div className="mx-auto mt-10 flex max-w-5xl justify-center px-4 sm:px-6">
              <video autoPlay muted controls loop className="rounded-3xl">
                <source
                  width={720}
                  height={480}
                  src="/videos/graaadients.mp4"
                />
              </video>
            </div>

            <p className="text-aired mt-10 text-center text-lg lg:text-xl">
              Download. Edit. Upload.
            </p>
            <div className="px-8">
              <h1
                className={cn(
                  Avegra.className,
                  "py-2 text-center text-3xl sm:text-6xl"
                )}
              >
                The Beauty of Gradients
              </h1>
              <p className="mx-auto max-w-lg text-center text-sm font-light text-slate-600 dark:text-slate-400 lg:text-lg">
                +2000 abstract gradient elements and backgrounds for your
                amazing design projects.
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
            <div className="">
                <AdBanner
                  dataAdFormat="auto"
                  dataFullWidthResponsive={true}
                  dataAdSlot="2106263519"
                />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
