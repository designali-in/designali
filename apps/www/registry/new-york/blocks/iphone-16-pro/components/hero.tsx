"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="apple"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <Image
        src="https://res.cloudinary.com/deelfmnhg/image/upload/v1734266403/hero_endframe__b3cjfkquc2s2_medium_2x_cuvooz.jpg"
        alt="iPhone 16 Pro Background"
        width={500}
        height={500}
        objectFit="cover"
        quality={100}
        priority
        className="absolute inset-0 hidden h-full w-full object-contain sm:block"
      />
      <Image
        src="https://res.cloudinary.com/deelfmnhg/image/upload/v1734285643/hero_startframe__4pqj154zt8ym_xsmall_2x_aecfjp.jpg"
        alt="iPhone 16 Pro Background"
        width={500}
        height={500}
        objectFit="cover"
        quality={100}
        priority
        className="absolute inset-0 h-full w-full object-contain pl-3 sm:hidden"
      />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between pb-28 pt-36">
        <h1 className="text-md mt-10 text-center text-white sm:mt-20 sm:text-xl lg:mt-10 lg:text-2xl">
          iPhone 16 Pro
        </h1>

        <Image
          src="https://res.cloudinary.com/deelfmnhg/image/upload/v1734266316/hero_apple_intelligence_headline__fwxxapju9a6i_xlarge_2x_upe35n.png"
          alt="Apple Intelligence"
          width={500}
          height={300}
          className="-mt-10 h-full w-full max-w-[250px] sm:-mt-14 sm:max-w-[350px] lg:-mt-20 lg:max-w-[500px]"
        />

        <div className="mt-auto text-center">
          <Button
            variant="blue"
            className="mb-6 w-auto rounded-full text-white hover:opacity-90"
          >
            Buy
          </Button>
          <div className="space-y-2">
            <h2 className="text-md font-medium text-white sm:text-xl">
              From ₹119900.00*
            </h2>
            <p className="px-8 text-sm text-slate-600">
              Apple intelligence available now in US English<sup>1</sup>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
