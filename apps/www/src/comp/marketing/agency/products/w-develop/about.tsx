import Link from "next/link";
import { Icons } from "@/comp/icons";
import ShareLink from "@/src/comp/common/sharelink";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function About() {
  return (
    <div className="mb-40 mt-10 md:mb-20">
      <div className="">
        <div>
          <div className="flex justify-center">
            <h1 className="inline-flex items-baseline bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-3xl font-semibold text-transparent dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-200 dark:to-slate-400 dark:bg-clip-text sm:text-5xl">
              Web Develop
            </h1>
          </div>
          <p className="mx-auto mt-2 max-w-3xl text-center text-slate-600 dark:text-slate-400">
            Website development involves building and maintaining websites
            through the use of various programming languages and technologies.
            The goal is to create a functional, secure, and efficient website
            that meets both business and user needs.
          </p>
          <div className="my-3 grid items-center justify-center md:flex md:justify-between">
            <div className="mt-2 flex flex-wrap items-center gap-1 gap-y-2">
              <p className="text-xl font-semibold text-slate-600 dark:text-slate-400">
                {" "}
                5.0{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 grid justify-between gap-3 md:flex">
        <div className="flex items-center gap-2">
          <Link href={"/dashboard"} target="_blank">
            <Button variant="default" size="lg">
              Design Now
            </Button>
          </Link>
          <Link href={"https://cal.com/aliimam/designali"} target="_blank">
            <Button variant="outline" size="lg">
              Book a call
            </Button>
          </Link>
          <Link href={"https://wa.me/917678432186"} target="_blank">
            <Button variant="outline" size="icon">
              <Icons.whatsapp className="h-5 w-5" />
            </Button>
          </Link>
        </div>
        <ShareLink slug={"web-develop"} />
      </div>
      <div className="mt-10">
        <div>
          <Separator className="my-4" />
          <div>
            <div className="flex h-5 flex-wrap items-center justify-center gap-4 text-sm">
              <div>AI</div>
              <Separator orientation="vertical" />
              <div>PDF</div>
              <Separator orientation="vertical" />
              <div>PSD</div>
              <Separator orientation="vertical" />
              <div>SVG</div>
              <Separator orientation="vertical" />
              <div>JPG</div>
              <Separator orientation="vertical" />
              <div>PNG</div>
              <Separator orientation="vertical" />
              <div className="flex items-center gap-2">
                <Icons.calendar strokeWidth={1} className="h-4 w-4" />
                48 Hours Delivery
              </div>
              <Separator orientation="vertical" />
              <div className="flex items-center gap-2">
                <Icons.repeat strokeWidth={1} className="h-4 w-4" />
                Unlimited Revisions
              </div>
              <Separator orientation="vertical" />
              <div className="flex items-center gap-2">
                <Icons.badge strokeWidth={1} className="h-4 w-4" />
                Lifetime Customer Support
              </div>

              <Separator orientation="vertical" />
              <div className="flex items-center gap-2">
                <Icons.repeat strokeWidth={1} className="h-4 w-4" />
                Unlimited Stock Photos
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
