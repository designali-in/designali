import Link from "next/link";
import { Icons } from "@/comp/icons";
import { Avegra } from "@/src/app/fonts";
import { cn } from "@designali/ui";
import { Button } from "@designali/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@designali/ui/card";
import { DIcons } from "dicons";

import CountUpNumber from "./countnumber";
import Logos from "./logos";

export default function FUIPricingWithSpecialTwo() {
  return (
    <div className="relative isolate overflow-hidden bg-transparent">
      <div className="absolute inset-0 -z-10 h-[600px] w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-10 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#a8a29e_1px,transparent_1px),linear-gradient(to_bottom,#a8a29e_1px,transparent_1px)]"></div>
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="flex justify-center py-10">
          <DIcons.IndianRupee
            strokeWidth={0.5}
            className="h-20 w-20 text-green-500"
          />
        </div>
        <div className="mx-auto grid max-w-3xl items-center justify-center px-8 pb-1 text-center">
          <h3
            className={cn(
              Avegra.className,
              "z-20 inline-flex items-baseline bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text pb-1 text-center text-3xl text-transparent dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-200 dark:to-slate-400 dark:bg-clip-text md:text-6xl",
            )}
          >
            Make your business shine with unlimited* creativity​.
          </h3>{" "}
        </div>
        <p className="lg:text-md mx-auto my-2 max-w-xl text-center text-xs font-light uppercase tracking-widest text-slate-600 dark:text-slate-400">
          Forget the messy job of hiring and surprise expenses. Enjoy top-notch
          designs whenever you want, all for a monthly price. It’s really that
          easy!
        </p>
        <div className="flex justify-center gap-2 py-10">
          <Link href={"/pricing#pricing"}>
            <Button variant="default" size="lg">
              See monthly plans
            </Button>
          </Link>
          <Link href={"https://cal.com/aliimam/designali"} target="_blank">
            <Button variant="outline" size="lg">
              Book a call
            </Button>
          </Link>
        </div>
        <h1 className="my-6 mt-12 text-center text-xs font-semibold uppercase tracking-[.3em] text-slate-400">
          Worked with Brands Like
        </h1>
        <Logos />
        <div className="mt-10">
          <div className="mx-auto max-w-5xl rounded-[100px] border p-2 lg:rounded-full">
            <dl className="grid grid-cols-1 gap-y-10 border py-10 text-center lg:grid-cols-3 lg:rounded-full">
              <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                <dt className="ml-6 text-sm font-semibold uppercase tracking-[.3em] text-slate-400">
                  <p className="">Projects</p>
                </dt>
                <dd className="text-ali order-first flex text-6xl font-extrabold tracking-tight">
                  <p className="">+</p>
                  <CountUpNumber value={1000} />
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                <dt className="ml-6 text-sm font-semibold uppercase tracking-[.3em] text-slate-400">
                  <p className="">Design Creatives</p>
                </dt>
                <dd className="text-ali order-first flex text-6xl font-extrabold tracking-tight">
                  <p className="">+</p>
                  <CountUpNumber value={10000} />
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                <dt className="ml-6 text-sm font-semibold uppercase tracking-[.3em] text-slate-400">
                  <p className="">Brands</p>
                </dt>
                <dd className="text-ali order-first flex text-6xl font-extrabold tracking-tight">
                  <p className="">+</p>
                  <CountUpNumber value={100} />
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="mx-auto my-10 mt-20 grid max-w-3xl items-center justify-center text-center text-slate-500">
          <span className="text-5xl font-bold tracking-tight">
            How does this magic happen?
          </span>
          <span className="py-3">
            Our method is simple and goes 👉 straight to the point
          </span>
          <span className="py-3 text-xs">
            We kick off every project by really tuning in to what you want.
            Next, we split your project into super detailed, easy-to-handle
            tasks. This way, we make sure every little thing gets the attention
            and effort it needs.
          </span>
        </div>
        <div className="mx-auto grid max-w-4xl gap-3 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">
                <DIcons.ArrowUp
                  strokeWidth={0.5}
                  className="h-12 w-12 rotate-90 text-green-500"
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="text-3xl">
              1. Subscribe a package
            </CardContent>
            <CardContent className="-mt-3 text-sm text-slate-600 dark:text-slate-400">
              Begin with a conversation, either through a call or an in-person
              meeting, to dive deep into your project’s details and objectives.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">
                <DIcons.ArrowUp
                  strokeWidth={0.5}
                  className="h-12 w-12 rotate-45 text-green-500"
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="text-3xl">
              2. Get the Design Ready
            </CardContent>
            <CardContent className="-mt-3 text-sm text-slate-600 dark:text-slate-400">
              Based on your specific needs and project timeline, we select the
              ideal designers for your task, setting the stage with a kick-off
              call to align visions and goals.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">
                <DIcons.ArrowUp
                  strokeWidth={0.5}
                  className="h-12 w-12 text-green-500"
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="text-3xl">
              3. Realize Your Vision
            </CardContent>
            <CardContent className="-mt-3 text-sm text-slate-600 dark:text-slate-400">
              Witness the transformation of your ideas into tangible designs, as
              we complete each task and bring your project’s vision into full
              fruition.
            </CardContent>
          </Card>
        </div>
        <div
          id="pricing"
          className="mx-auto mt-20 grid max-w-3xl items-center justify-center px-8 pb-1 text-center"
        >
          <h3
            className={cn(
              Avegra.className,
              "z-20 inline-flex items-baseline pb-1 text-center text-4xl text-green-500 md:text-6xl",
            )}
          >
            No hidden fees
          </h3>{" "}
        </div>
        <p className="lg:text-md mx-auto my-2 max-w-xl text-center text-xs font-light uppercase tracking-widest text-slate-600 dark:text-slate-400">
          Our plans are clear and open, no shocks or caps. Help is always here
          when you want it.
        </p>
        <div className="relative">
          <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 opacity-20 [mask-image:radial-gradient(closest-side,white,transparent)] dark:opacity-40 sm:-top-12 md:-top-20 lg:-top-12 xl:-top-20"
          >
            <ellipse
              cx={604}
              cy={512}
              fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
              rx={604}
              ry={512}
            />
            <defs>
              <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
