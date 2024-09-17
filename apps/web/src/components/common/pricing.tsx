import Link from "next/link";
import { Icons } from "@/components/icons";
import { Avegra } from "@/src/app/fonts";
import { cn } from "@designali/ui";
import { Button } from "@designali/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@designali/ui/card";
import { DIcons } from "dicons";

import CountUpNumber from "./countnumber";
import Logos from "./logos";

const tiers = [
  {
    name: "Basic",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "₹20,000",
    description: "One request at a time. Pause or cancel anytime.",
    features: [
      "One request at a time",
      "Average 48 hour delivery",
      "Unlimited revisions",
      "Unlimited stock photos",
      "Pause or cancel anytime",
    ],
  },
  {
    name: "Premium",
    id: "tier-team",
    href: "#",
    priceMonthly: "₹50,000",
    description: "Five requests at a time. Pause or cancel anytime.",
    features: [
      "Three request at a time",
      "Average 48 hour delivery",
      "Unlimited revisions",
      "Unlimited stock photos",
      "Pause or cancel anytime",
    ],
  },
];

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
                <dd className="order-first flex text-6xl font-extrabold tracking-tight text-ali">
                  <p className="">+</p>
                  <CountUpNumber value={1000} />
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                <dt className="ml-6 text-sm font-semibold uppercase tracking-[.3em] text-slate-400">
                  <p className="">Design Creatives</p>
                </dt>
                <dd className="order-first flex text-6xl font-extrabold tracking-tight text-ali">
                  <p className="">+</p>
                  <CountUpNumber value={10000} />
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                <dt className="ml-6 text-sm font-semibold uppercase tracking-[.3em] text-slate-400">
                  <p className="">Brands</p>
                </dt>
                <dd className="order-first flex text-6xl font-extrabold tracking-tight text-ali">
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
      <div className="z-20 flow-root bg-transparent pb-24 sm:pb-32">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="z-10 flex flex-col justify-between rounded-3xl p-8 shadow-xl ring-1 ring-gray-900/10 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] sm:p-10"
                >
                  <div>
                    <h3
                      id={tier.id}
                      className="text-base font-semibold leading-7 text-ali"
                    >
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-5xl font-bold tracking-tight">
                        {tier.priceMonthly}
                      </span>
                      <span className="text-base font-semibold leading-7">
                        /month
                      </span>
                    </div>
                    <p className="mt-6 text-base leading-7">
                      {tier.description}
                    </p>
                    <ul
                      role="list"
                      className="mt-10 space-y-4 text-sm leading-6"
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <Icons.check
                            className="h-6 w-5 flex-none text-green-400"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-10">
                    <Button variant="default" size="lg">
                      <Link
                        href={tier.href}
                        aria-describedby={tier.id}
                        className=""
                      >
                        Get started today
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
              <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                <div className="lg:min-w-0 lg:flex-1">
                  <h3 className="text-xl font-semibold leading-8 tracking-tight">
                    Project-Based
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    Ideal for specific goals. Custom project scope.
                  </p>
                </div>
                <Button variant="outline" size="lg">
                  <Link href="#" className="">
                    Request <span aria-hidden="true">→</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
