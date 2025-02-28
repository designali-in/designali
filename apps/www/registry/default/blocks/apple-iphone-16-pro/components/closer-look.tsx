"use client";

import * as React from "react";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CloserLook = () => {
  return (
    <section id="highlights" className="relative  w-full overflow-hidden p-10">
      <div className="just relative flex flex-col py-10">
        <div className="grid justify-between md:flex">
          <h1 className="text-md text-white hover:underline sm:text-4xl">
            Take a closer look.
          </h1>
        </div>
      </div>
      <Tabs defaultValue="1" className="w-auto ">
        <TabsContent value="1">
          <Image
            src={
              "https://res.cloudinary.com/deelfmnhg/image/upload/v1734346217/all_colors__fdpduog7urm2_large_2x_jkq2ae.jpg"
            }
            alt={""}
            className="h-[600px] w-full rounded-lg object-cover object-center"
            width={700}
            height={500}
          />
          <p className="py-4 text-center text-xs text-white">
            15.93 cm (6.3″) iPhone 16 Pro2 in four colours
          </p>
        </TabsContent>
        <TabsContent value="2">
          <Image
            src={
              "https://res.cloudinary.com/deelfmnhg/image/upload/v1734348451/black_titanium__ezezv5esulua_large_2x_u9gcws.jpg"
            }
            alt={""}
            className="h-[600px] w-full rounded-lg object-cover object-center"
            width={700}
            height={500}
          />
          <p className="py-4 text-center text-xs text-white">
            17.43 cm (6.9″) iPhone 16 Pro Max2 & 15.93 cm (6.3″) iPhone 16 Pro2
            in Black Titanium
          </p>
        </TabsContent>
        <TabsContent value="3">
          <Image
            src={
              "https://res.cloudinary.com/deelfmnhg/image/upload/v1734348455/white_titanium__b0s9tw63hs4i_large_2x_vurfrx.jpg"
            }
            alt={""}
            className="h-[600px] w-full rounded-lg object-cover object-center"
            width={700}
            height={500}
          />
          <p className="py-4 text-center text-xs text-white">
            17.43 cm (6.9″) iPhone 16 Pro Max2 & 15.93 cm (6.3″) iPhone 16 Pro2
            in White Titanium
          </p>
        </TabsContent>
        <TabsContent value="4">
          <Image
            src={
              "https://res.cloudinary.com/deelfmnhg/image/upload/v1734348455/natural_titanium__22ovjg0i0huy_large_2x_dtebuw.jpg"
            }
            alt={""}
            className="h-[600px] w-full rounded-lg object-cover object-center"
            width={700}
            height={500}
          />
          <p className="py-4 text-center text-xs text-white">
            17.43 cm (6.9″) iPhone 16 Pro Max2 & 15.93 cm (6.3″) iPhone 16 Pro2
            in Natural Titanium
          </p>
        </TabsContent>
        <TabsContent value="5">
          <Image
            src={
              "https://res.cloudinary.com/deelfmnhg/image/upload/v1734348455/desert_titanium__gcg1i94xakuq_large_2x_swvcfy.jpg"
            }
            alt={""}
            className="h-[600px] w-full rounded-lg object-cover object-center"
            width={700}
            height={500}
          />
          <p className="py-4 text-center text-xs text-white">
            17.43 cm (6.9″) iPhone 16 Pro Max2 & 15.93 cm (6.3″) iPhone 16 Pro2
            in Desert Titanium
          </p>
        </TabsContent>
        <div className="flex justify-center">
          <TabsList className="gap-1 whitespace-nowrap rounded-full">
            <TabsTrigger
              className="data-[state=active]:border-ali bg-ali h-8 w-8 rounded-full border-2"
              value="1"
            ></TabsTrigger>
            <TabsTrigger
              value="2"
              className="data-[state=active]:border-ali h-8 w-8 rounded-full border-2 bg-slate-900"
            ></TabsTrigger>
            <TabsTrigger
              value="3"
              className="data-[state=active]:border-ali h-8 w-8 rounded-full border-2 bg-slate-100"
            ></TabsTrigger>
            <TabsTrigger
              value="4"
              className="data-[state=active]:border-ali h-8 w-8 rounded-full border-2 bg-neutral-600"
            ></TabsTrigger>
            <TabsTrigger
              value="5"
              className="data-[state=active]:border-ali h-8 w-8 rounded-full border-2 bg-stone-600"
            ></TabsTrigger>
          </TabsList>
        </div>
      </Tabs>
    </section>
  );
};

export default CloserLook;
