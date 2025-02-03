import Image from "next/image";
import Link from "next/link";
import { Graaadients } from "@/comp/tools/gradient-generator";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

export default function AboutAI() {
  return (
    <div className="relative">
      <div className=" my-40">
        <div className="">
          <Image
            src="/images/products/grad.png"
            alt="Your Image"
            height={700}
            width={700}
            className="absolute -top-28 -z-10 min-h-screen w-full object-cover"
          />
          <p className="px-6 text-center text-lg font-light uppercase tracking-widest text-white lg:text-xl">
            Introducing
          </p>

          <h1 className="text-center text-7xl tracking-tighter text-white sm:text-9xl">
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
        <Graaadients />

        <p className="ml-2 mt-6 text-center font-semibold ">
          All gradients are 100% free.
        </p>
        <h1 className="text-ali -mb-10 flex w-full justify-center  text-center text-9xl font-thin  ">
          4K
        </h1>

        <p className="text-aired mt-10 text-center text-lg lg:text-xl">
          Download. Edit. Upload.
        </p>
        <div className="px-8">
          <h1 className="py-2 text-center text-3xl sm:text-6xl">
            The Beauty of Gradients
          </h1>
          <p className="mx-auto max-w-lg text-center text-sm font-light text-slate-600 dark:text-slate-400 lg:text-lg">
            +2000 abstract gradient elements and backgrounds for your amazing
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
      </div>
    </div>
  );
}
