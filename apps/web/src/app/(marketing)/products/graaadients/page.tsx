import Image from "next/image";
import Link from "next/link";
import { Avegra } from "@/app/fonts";
import { auth } from "@designali/auth";
import { cn } from "@designali/ui";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@designali/ui/breadcrumb";
import { Button } from "@designali/ui/button";

import { Grads } from "./grads";

export const metadata = {
  title: "Graaadients - Designali",
  description:
    "This section includes end-to-end guides for developing Next.js 13 apps.",
};

export default async function AboutAI() {
  const session = auth();
  return (
    <div className="my-40">
      <div className="relative -top-28">
        <Image
          src="/images/products/grad.png"
          alt="Your Image"
          height={700}
          width={700}
          className="absolute top-0 -z-10 min-h-screen w-full object-cover"
        />
      </div>
      <div className="px-8">
        <p className="mt-40 text-center text-lg font-light uppercase tracking-widest text-white lg:text-xl">
          Introducing
        </p>

        <h1
          className={cn(
            Avegra.className,
            "text-center text-7xl tracking-tighter text-white sm:text-9xl",
          )}
        >
          Graaadients
        </h1>
        <p className="mx-auto max-w-lg text-center text-sm font-light text-white lg:-mt-4 lg:text-lg">
          +1000 abstract gradient elements and backgrounds for your amazing
          design projects.
        </p>
        <div className="mt-10 flex justify-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="text-slate-400 hover:text-white"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-slate-400" />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/products"
                  className="text-slate-400 hover:text-white"
                >
                  Products
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-slate-400" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">
                  Graaadients
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="mt-10 grid justify-center gap-4">
          {(await session) ? (
            <Button variant="default" size="lg">
              <Link
                href="https://drive.google.com/file/d/1zAO2dwMuho4zuTSyZQ5WiEa-OZxeiI3e/view?usp=sharing"
                target="_blank"
                className=""
              >
                Download Full Pack
                <span className="sr-only">Buy now</span>
              </Link>
            </Button>
          ) : (
            <Button variant="outline" size="lg">
              <Link href="/login">
                Login to Download
                <span className="sr-only">Buy now</span>
              </Link>
            </Button>
          )}
        </div>
        <p className="ml-2 mt-6 text-center font-semibold text-white">
          All gradients are 100% free.
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6">
        <Grads />
      </div>
      <div className="mx-auto mt-10 flex max-w-5xl justify-center px-4 sm:px-6">
        <video autoPlay muted controls loop className="rounded-3xl">
          <source width={720} height={480} src="/videos/graaadients.mp4" />
        </video>
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
          The Beauty of Gradients
        </h1>
        <p className="mx-auto max-w-lg text-center text-sm font-light text-slate-600 dark:text-slate-400 lg:text-lg">
          +1000 abstract gradient elements and backgrounds for your amazing
          design projects.
        </p>
        <div className="mt-10 grid justify-center gap-4">
          {(await session) ? (
            <Button variant="default" size="lg">
              <Link
                href="https://drive.google.com/file/d/1zAO2dwMuho4zuTSyZQ5WiEa-OZxeiI3e/view?usp=sharing"
                target="_blank"
                className=""
              >
                Download Full Pack
                <span className="sr-only">Buy now</span>
              </Link>
            </Button>
          ) : (
            <Button variant="outline" size="lg">
              <Link href="/login">
                Login to Download
                <span className="sr-only">Buy now</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
