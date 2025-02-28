import Link from "next/link";

import { DIcons } from "dicons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avegra } from "@/lib/fonts/fonts";
import NumberCounter from "@/components/ui/texts/number-counter";

export default function FUIPricingWithSpecialTwo() {
  return (
    <div className="relative isolate overflow-hidden bg-transparent">
      <div className="absolute inset-0 -z-10 h-[600px] w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#a8a29e_1px,transparent_1px),linear-gradient(to_bottom,#a8a29e_1px,transparent_1px)]"></div>
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="flex justify-center py-10">
          <DIcons.IndianRupee
            strokeWidth={0.5}
            className="h-20 w-20 text-green-500"
          />
        </div>
        <div className="mx-auto grid max-w-3xl items-center justify-center px-8 pb-1 text-center">
          <div className="space-y-10 py-10">
            <h1 className="text-red-500 text-xl uppercase tracking-wider">
              Why Choose Me?
            </h1>
            <p className="text-sm text-primary/70">
              Get unlimited, high-quality designs with a fast turnaround and
              unlimited revisions—all for a flat monthly rate. No hiring
              hassles, no hidden fees—just top-tier creativity on demand. 🚀
            </p>
          </div>
          <h3
            className={cn(
              Avegra.className,
              "inline-flex items-baseline pb-1 text-center text-3xl md:text-6xl"
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

        <div className="flex flex-wrap justify-center gap-2 py-10">
          <Link href={"/agency/works"}>
            <Button variant="outline" size="lg">
              View Works
            </Button>
          </Link>
          <Link href={"/pricing"}>
            <Button size="lg">See monthly plans</Button>
          </Link>
          <Link href={"https://cal.com/aliimam/designali"} target="_blank">
            <Button variant="outline" size="lg">
              Book a call
            </Button>
          </Link>
        </div>

        <div className="mt-6">
          <div className="mx-auto max-w-5xl rounded-[100px] border p-2 lg:rounded-full">
            <dl className="grid grid-cols-1 gap-y-10 rounded-[90px] border py-10 text-center lg:grid-cols-3 lg:rounded-full">
              <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                <dt className="ml-6 text-sm font-semibold uppercase tracking-[.3em] text-slate-400">
                  <p className="">Projects</p>
                </dt>
                <dd className="text-red-500 order-first flex text-6xl font-extrabold tracking-tight">
                  <p className="">+</p>
                  <NumberCounter value={1000} />
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                <dt className="ml-6 text-sm font-semibold uppercase tracking-[.3em] text-slate-400">
                  <p className="">Design Creatives</p>
                </dt>
                <dd className="text-red-500 order-first flex text-6xl font-extrabold tracking-tight">
                  <p className="">+</p>
                  <NumberCounter value={10000} />
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                <dt className="ml-6 text-sm font-semibold uppercase tracking-[.3em] text-slate-400">
                  <p className="">Brands</p>
                </dt>
                <dd className="text-red-500 order-first flex text-6xl font-extrabold tracking-tight">
                  <p className="">+</p>
                  <NumberCounter value={100} />
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
