import Image from "next/image";
import Link from "next/link";
import { Avegra } from "@/app/fonts";
import DotPattern from "@/src/components/uis/dot-pattern";
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

import { Icooons } from "./3dicons";

export const metadata = {
  title: "2D Icons - Designali",
  description: "A design agency with a touch of magic.",
};

export default async function AboutAI() {
  const session = auth();
  return (
    <div className="my-40">
      <DotPattern
        width={5}
        height={5}
        className={cn(
          "-z-50 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
        )}
      />
      <div className="px-8">
        <p className="text-md text-center font-light uppercase tracking-widest lg:text-xl">
          Introducing
        </p>

        <div className="flex justify-center py-3">
          <h1 className="font-mono text-5xl font-bold text-orange-600 md:text-9xl">
            2Dicons
          </h1>
        </div>

        <p className="md:text-md mx-auto my-2 max-w-md text-center text-sm font-light">
          +100 2D icons for your amazing design projects.
        </p>
        <div className="mt-10 flex justify-center text-white">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-slate-400" />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>2D Icons</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="mt-10 grid justify-center gap-4">
          {(await session) ? (
            <div className="flex justify-center gap-3">
              <Button variant="default" size="lg">
                <Link
                  href="https://drive.google.com/file/d/1yYm0Xwfz_a9Q6lLqsRNTK6X10egd5O0N/view?usp=drive_link"
                  target="_blank"
                  className=""
                >
                  Download Icon Pack
                  <span className="sr-only">Buy now</span>
                </Link>
              </Button>
            </div>
          ) : (
            <Button variant="outline" size="lg">
              <Link href="/login">
                Login to Download
                <span className="sr-only">Buy now</span>
              </Link>
            </Button>
          )}
        </div>
        <p className="ml-2 mt-6 text-center font-semibold">
          All 2d icons are 100% free.
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-6 xl:px-0">
        <Icooons />
      </div>

      <p className="text-md text-aired mt-10 text-center lg:text-xl">
        Download. Edit. Upload.
      </p>
      <div className="px-8">
        <h1
          className={cn(
            Avegra.className,
            "py-2 text-center text-3xl sm:text-6xl",
          )}
        >
          The Quality of Icons
        </h1>
        <p className="md:text-md mx-auto max-w-md text-center text-sm font-light text-slate-600 dark:text-slate-400">
          +100 2D icons for your amazing design projects.
        </p>
        <div className="mt-10 grid justify-center gap-4">
          {(await session) ? (
            <div className="mt-10 flex justify-center gap-3">
              <Button variant="default" size="lg">
                <Link
                  href="https://drive.google.com/file/d/1yYm0Xwfz_a9Q6lLqsRNTK6X10egd5O0N/view?usp=drive_link"
                  target="_blank"
                  className=""
                >
                  Download Icon Pack
                  <span className="sr-only">Buy now</span>
                </Link>
              </Button>
            </div>
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
