"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { DIcons } from "dicons";

import { Button } from "@/components/ui/button";

export interface Experience {
  post: string;
  comlogo: string;
  company: string;
  link: string;
}

export const Service: Experience[] = [
  {
    post: "Gold",
    link: "https://www.jiocloud.com/l/?u=9G1ckur8LVQqeuHrBsH4dtOTgSseoXWQd3InhTvXRV8=doB",
    comlogo:
      "https://utfs.io/f/9E7Q8MSIBADGRjjKg57nbEl79Zda8xc3pmMgjCwikuUPFRBv",
    company: "200 Gold Photoshop Gradients",
  },
  {
    post: "Silver",
    link: "https://www.jiocloud.com/l/?u=Y2VgeGea6TdMY2Hr64ktLAy784Nk7dkjndNTMGXcbso=MZA",
    comlogo:
      "https://utfs.io/f/9E7Q8MSIBADGsUIozeQRDFlU8LCBxuhMQiVS5K7TydEmZcWs",
    company: "200 Silver Photoshop Gradients",
  },
  {
    post: "Blue",
    link: "https://www.jiocloud.com/l/?u=WtrufgMORHgLiCPoHMlRd7XLA0iATiRYS73o8mt89VQ=b3F",
    comlogo:
      "https://utfs.io/f/9E7Q8MSIBADGXtk0Bs4VMuID6TNv9xOWHcrdQRwefaFJtK5U",
    company: "200 Blue Photoshop Gradients",
  },
  {
    post: "Red",
    link: "https://www.jiocloud.com/l/?u=h814RWghBNeiYn5tqW4bdUxFhOKjtwzCMuk5QFyrufA=o8v",
    comlogo:
      "https://utfs.io/f/9E7Q8MSIBADGrkq5plYaOLol2B6SEZPybCFXivJUNhsgcM35",
    company: "200 Red Photoshop Gradients",
  },
  {
    post: "Green",
    link: "https://www.jiocloud.com/l/?u=qvyCTtpqtYfK2bWN_akumn6Yb-H66IGs57cqYrhb1Zo=Oe5",
    comlogo:
      "https://utfs.io/f/9E7Q8MSIBADGFRv6f61GEaGcsyQiU8gmfnWudpMk3AORNtCv",
    company: "200 Green Photoshop Gradients",
  },
  {
    post: "Pink",
    link: "https://www.jiocloud.com/l/?u=Q83RiX69UnOPEo3SqkRNxqvrSVONYL2GK2nAsx8MkXs=hkW",
    comlogo:
      "https://utfs.io/f/9E7Q8MSIBADGfpQZb3ET6nHCtWkPr08Dx1LNXvYasVqFZwcG",
    company: "200 Pink Photoshop Gradients",
  },
  {
    post: "Chrome",
    link: "https://www.jiocloud.com/l/?u=_cIyWqh5KT7M3Mvg9wgt6KUBzymMSeceGQYDJpRXMa0=b3F",
    comlogo:
      "https://utfs.io/f/9E7Q8MSIBADGEbm1UjcHdzx3c45YS0Msm2RpOeoJLjE9thGC",
    company: "200 Chrome Photoshop Gradients",
  },
  {
    post: "Orange",
    link: "https://www.jiocloud.com/l/?u=btn-r6Z88qMtI9L2Squ2IeM0k8r14Lle3yKmgym5Xn8=8BX",
    comlogo:
      "https://utfs.io/f/9E7Q8MSIBADGzl2wF3Ktf1nW2SsqNgIoCeG7QEiHOwhK5daJ",
    company: "200 Orange Photoshop Gradients",
  },
  {
    post: "Purple",
    link: "https://www.jiocloud.com/l/?u=zQJSNpxScfCj-wupG5LrXAc8Ao7VFxsUUzzAluTKqv4=8BX",
    comlogo:
      "https://utfs.io/f/9E7Q8MSIBADGFZfSO2GEaGcsyQiU8gmfnWudpMk3AORNtCvV",
    company: "200 Purple Photoshop Gradients",
  },
  {
    post: "Holographic",
    link: "https://www.jiocloud.com/l/?u=IYzHb8WKHgtk1U50HDUqA32lA3n48HqlAKHkyyKnwxc=MZA",
    comlogo:
      "https://utfs.io/f/9E7Q8MSIBADGSmLbHHNwVE9HB021vzYNnCfDSQAKctrdWP3L",
    company: "200 Holographic Photoshop Gradients",
  },
  {
    post: "Yellow",
    link: "https://www.jiocloud.com/l/?u=iI2ZCyCEjtwd1tsMQjv-kvy6sURpUHbDNhXVJ3MYcPc=b3F",
    comlogo:
      "https://utfs.io/f/9E7Q8MSIBADGgvFvTC24FQS2fzYxT6N7alGKJihEI3cuVHLO",
    company: "200 Yellow Photoshop Gradients",
  },
  {
    post: "Brown",
    link: "https://www.jiocloud.com/l/?u=Vqvx6z5PLzwTZUnS1ABjp24ZGGjZ9ksF_Piy1OMCmLc=b3F",
    comlogo:
      "https://utfs.io/f/9E7Q8MSIBADGI0OLgNpt78a2oTkeXSdpDBFJ9hyv5AWqYNGf",
    company: "200 Brown Photoshop Gradients",
  },
];

export function PhotoshopGradients() {
  return (
    <div className="mx-auto  max-w-7xl px-6 xl:px-0">
      <div className="grid justify-center gap-3 md:grid-cols-3">
        {Service.map((Experience) => (
          <div>
            <div
              key={Experience.post}
              className="group/item h-full md:col-span-6 lg:col-span-4"
              data-aos="fade-down"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-b-3xl border border-slate-200 bg-slate-100/50 dark:border-slate-800 dark:bg-black">
                <div className="flex flex-col">
                  <div
                    className="pointer-events-none absolute bottom-0 right-1 -z-10 aspect-square w-1/2 -translate-y-1/2 translate-x-1"
                    aria-hidden="true"
                  >
                    <div className="translate-z-0 absolute inset-0 rounded-full bg-slate-100 blur-[80px] dark:bg-slate-800" />
                  </div>

                  <Image
                    src={Experience.comlogo}
                    alt={`designali`}
                    className="h-full w-full object-cover"
                    width={400}
                    height={300}
                  />

                  <div className="p-6">
                    <div className="grid items-center gap-3 text-left md:flex md:justify-between">
                      <div>
                        <h1 className="inline-flex items-baseline bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text pb-1 font-semibold text-transparent dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-200 dark:to-slate-400 dark:bg-clip-text">
                          <span className="text-2xl md:text-4xl">
                            {Experience.post}
                          </span>
                        </h1>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {Experience.company}
                        </p>
                      </div>
                      <Link target="_blank" href={Experience.link}>
                        <Button size="icon" variant="outline">
                          <DIcons.Download className=" h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
