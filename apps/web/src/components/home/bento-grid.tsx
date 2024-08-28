import Image from "next/image";
import Link from "next/link";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Avegra } from "@/src/app/fonts";
import { cn } from "@/src/lib/dutils";
import { Button } from "@designali/ui/button";
import { DIcons } from "dicons";

import { Chatbot } from "../common/chat";
import Marquee from "../ui/marquee";

const features = [
  {
    name: "",
    className: "col-span-4 md:col-span-4 lg:col-span-2 xl:col-span-2",
    background: (
      <Link href="/Ali-CV.pdf" download={true} target="_blank">
        <div className="flex w-full gap-2">
          <div className="group relative w-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 py-4 transition-colors duration-150 hover:bg-accent dark:border-slate-900 dark:bg-black">
            <div className="flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-24 group-focus:-translate-y-24">
              <div className="flex items-center justify-center gap-2 py-[13px]">
                <DIcons.Download className="dark:slate-600 h-4 w-4 text-slate-400" />
                <p className="text-lg font-semibold text-ali lg:text-xl">
                  Resume AI
                </p>
              </div>
            </div>
            <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-sm font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100">
              Download
            </span>
          </div>
        </div>
      </Link>
    ),
  },
  {
    name: "",
    className: "col-span-4  md:col-span-4 lg:col-span-2 xl:col-span-2",
    background: (
      <Link href="https://www.instagram.com/designali.in/" target="_blank">
        <div className="flex w-full gap-2">
          <div className="group relative w-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 py-4 transition-colors duration-150 hover:bg-accent dark:border-slate-900 dark:bg-black">
            <div className="flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-24 group-focus:-translate-y-24">
              <div className="flex items-center justify-center gap-2 py-[13px]">
                <DIcons.ScanQrCode className="dark:slate-600 h-4 w-4 text-slate-400" />
                <p className="text-lg font-semibold text-ali lg:text-xl">
                  designali.in
                </p>
              </div>
            </div>
            <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-sm font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100">
              Instagram
            </span>
          </div>
        </div>
      </Link>
    ),
  },
  {
    name: "",
    className: "col-span-4  md:col-span-4 lg:col-span-2 xl:col-span-2",
    background: (
      <Link href="/blogs">
        <div className="flex w-full gap-2">
          <div className="group relative w-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 py-4 transition-colors duration-150 hover:bg-accent dark:border-slate-900 dark:bg-black">
            <div className="flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-24 group-focus:-translate-y-24">
              <div className="flex items-center justify-center gap-2 py-[13px]">
                <DIcons.Settings className="dark:slate-600 h-4 w-4 text-slate-400" />
                <p className="text-lg font-semibold text-ali lg:text-xl">
                  Blogs
                </p>
              </div>
            </div>
            <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-sm font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100">
              Blogs
            </span>
          </div>
        </div>
      </Link>
    ),
  },
  {
    name: "",
    className: "col-span-4  md:col-span-4 lg:col-span-2 xl:col-span-2",
    background: (
      <Link href="/designs">
        <div className="flex w-full gap-2">
          <div className="group relative w-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 py-4 transition-colors duration-150 hover:bg-accent dark:border-slate-900 dark:bg-black">
            <div className="flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-24 group-focus:-translate-y-24">
              <div className="flex items-center justify-center gap-2 py-[13px]">
                <DIcons.UserPen className="dark:slate-600 h-4 w-4 text-slate-400" />
                <p className="text-lg font-semibold text-ali lg:text-xl">
                  Designs
                </p>
              </div>
            </div>
            <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-sm font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100">
              Documentation
            </span>
          </div>
        </div>
      </Link>
    ),
  },
  {
    name: "Save your files 1",
    className:
      "col-span-8  h-[394px] md:col-span-4 lg:col-span-8 xl:col-span-2",
    background: (
      <div>
        <Image
          src={"/images/products/grad-full.jpg"}
          alt={""}
          className="absolute h-full w-full cursor-pointer object-cover object-center transition hover:scale-105"
          width={1200}
          height={1200}
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 grid justify-center p-8">
          <div className="space-y-2">
            <p className="text-md mt-10 text-center font-light uppercase tracking-widest text-white">
              Introducing
            </p>

            <h1
              className={cn(
                Avegra.className,
                "text-center text-4xl tracking-tighter text-white sm:text-5xl lg:text-7xl xl:text-5xl",
              )}
            >
              Graaadients
            </h1>
            <p className="mx-auto max-w-lg text-center text-xs font-light text-white">
              +1000 abstract gradient elements and backgrounds for your amazing
              design projects.
            </p>
          </div>
          <div className="grid justify-center gap-2">
            <Link
              className="flex w-full justify-center"
              href={"/products/graaadients"}
            >
              <Button className="h-10 w-auto" size="sm" variant="outline">
                Download
              </Button>
            </Link>
            <p className="text-center font-semibold text-white">
              All gradients are 100% free.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "",
    className: "col-span-8 md:col-span-4 lg:col-span-8 xl:col-span-4",
    background: <Chatbot />,
  },
  {
    name: "Notifications 3",
    className:
      "col-span-8 md:col-span-8  h-[394px] cursor-pointer lg:col-span-8 xl:col-span-2",
    background: (
      <div className="">
        <Image
          src={"/images/products/3dbg.jpg"}
          alt={""}
          className="absolute h-full w-full cursor-pointer object-cover object-center transition hover:scale-105"
          width={1200}
          height={1200}
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 grid justify-center p-8">
          <div className="space-y-2">
            <p className="text-md mt-10 text-center font-light uppercase tracking-widest text-white">
              Introducing
            </p>

            <h1
              className={
                "text-center text-4xl font-extrabold tracking-tighter text-white sm:text-5xl lg:text-7xl xl:text-5xl"
              }
            >
              3D Icons
            </h1>
            <p className="mx-auto max-w-lg text-center text-xs font-light text-white">
              +1000 3d icons icons with colorfull for your amazing design
              projects.
            </p>
          </div>
          <div className="grid justify-center gap-2">
            <Link
              className="flex w-full justify-center"
              href={"/products/graaadients"}
            >
              <Button className="h-10 w-auto" size="sm" variant="outline">
                Download
              </Button>
            </Link>
            <p className="text-center font-semibold text-white">
              All 3D Icons are 100% free.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Notifications 3",
    className: "col-span-8 md:col-span-8 lg:col-span-8 xl:col-span-8",
    background: (
      <div>
        <Link href={"/dicons"}>
          <div className="flex h-full w-full gap-2">
            <div className="group relative w-full overflow-hidden rounded-2xl p-1 transition-colors duration-150 hover:bg-accent">
              <div className="flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-64 group-focus:-translate-y-24">
                <div className="flex items-center justify-center">
                  {" "}
                  <Marquee
                    direction="left"
                    speed={100}
                    delay={0}
                    pauseOnHover={true}
                  >
                    <DIcons.Activity
                      strokeWidth={0.5}
                      className="h-10 w-10 rounded-md border p-2"
                    />
                    <DIcons.Plus
                      strokeWidth={0.5}
                      className="h-10 w-10 rounded-md border p-2"
                    />
                    <DIcons.Award
                      strokeWidth={0.5}
                      className="h-10 w-10 rounded-md border p-2"
                    />
                    <DIcons.Printer
                      strokeWidth={0.5}
                      className="h-10 w-10 rounded-md border p-2"
                    />
                    <DIcons.ChartBar
                      strokeWidth={0.5}
                      className="h-10 w-10 rounded-md border p-2"
                    />
                    <DIcons.BadgePercent
                      strokeWidth={0.5}
                      className="h-10 w-10 rounded-md border p-2"
                    />
                    <DIcons.Bird
                      strokeWidth={0.5}
                      className="h-10 w-10 rounded-md border p-2"
                    />
                    <DIcons.Cat
                      strokeWidth={0.5}
                      className="h-10 w-10 rounded-md border p-2"
                    />
                    <DIcons.Inbox
                      strokeWidth={0.5}
                      className="h-10 w-10 rounded-md border p-2"
                    />
                    <DIcons.ChartPie
                      strokeWidth={0.5}
                      className="h-10 w-10 rounded-md border p-2"
                    />
                  </Marquee>
                </div>
              </div>
              <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-sm font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100">
                DIcons
              </span>
            </div>
          </div>
        </Link>
      </div>
    ),
  },
  {
    name: "",
    className: "col-span-4 md:col-span-4 lg:col-span-2 xl:col-span-2",
    background: (
      <Link href="/services/branding">
        <div className="flex w-full gap-2">
          <div className="group relative w-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 py-4 transition-colors duration-150 hover:bg-accent dark:border-slate-900 dark:bg-black">
            <div className="flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-24 group-focus:-translate-y-24">
              <div className="flex items-center justify-center gap-2 py-[13px]">
                <DIcons.Notebook className="dark:slate-600 h-4 w-4 text-slate-400" />
                <p className="text-lg font-semibold text-ali lg:text-xl">
                  Branding
                </p>
              </div>
            </div>
            <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-sm font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100">
              Services
            </span>
          </div>
        </div>
      </Link>
    ),
  },
  {
    name: "",
    className: "col-span-4  md:col-span-4 lg:col-span-2 xl:col-span-2",
    background: (
      <Link href="/services/logo">
        <div className="flex w-full gap-2">
          <div className="group relative w-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 py-4 transition-colors duration-150 hover:bg-accent dark:border-slate-900 dark:bg-black">
            <div className="flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-24 group-focus:-translate-y-24">
              <div className="flex items-center justify-center gap-2 py-[13px]">
                <DIcons.UserPen className="dark:slate-600 h-4 w-4 text-slate-400" />
                <p className="text-lg font-semibold text-ali lg:text-xl">
                  Logo Design
                </p>
              </div>
            </div>
            <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-sm font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100">
              Logo
            </span>
          </div>
        </div>
      </Link>
    ),
  },
  {
    name: "",
    className: "col-span-4  md:col-span-4 lg:col-span-2 xl:col-span-2",
    background: (
      <Link href="/services/sm-posts">
        <div className="flex w-full gap-2">
          <div className="group relative w-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 py-4 transition-colors duration-150 hover:bg-accent dark:border-slate-900 dark:bg-black">
            <div className="flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-24 group-focus:-translate-y-24">
              <div className="flex items-center justify-center gap-2 py-[13px]">
                <DIcons.Phone className="dark:slate-600 h-4 w-4 text-slate-400" />
                <p className="text-lg font-semibold text-ali lg:text-xl">
                  Social Media
                </p>
              </div>
            </div>
            <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-sm font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100">
              Services
            </span>
          </div>
        </div>
      </Link>
    ),
  },
  {
    name: "",
    className: "col-span-4  md:col-span-4 lg:col-span-2 xl:col-span-2",
    background: (
      <Link href="/services/website-design">
        <div className="flex w-full gap-2">
          <div className="group relative w-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 py-4 transition-colors duration-150 hover:bg-accent dark:border-slate-900 dark:bg-black">
            <div className="flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-24 group-focus:-translate-y-24">
              <div className="flex items-center justify-center gap-2 py-[13px]">
                <DIcons.Cog className="dark:slate-600 h-4 w-4 text-slate-400" />
                <p className="text-lg font-semibold text-ali lg:text-xl">
                  Website Designs
                </p>
              </div>
            </div>
            <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-sm font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100">
              Services
            </span>
          </div>
        </div>
      </Link>
    ),
  },
];

export function DBentoGrid() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
