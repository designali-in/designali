import React from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Logos() {
  return (
    <div className="my-8 [mask-image:radial-gradient(10rem_24rem_at_center,white,transparent)] md:[mask-image:radial-gradient(28rem_24rem_at_center,white,transparent)]">
      <Marquee direction="left" speed={40} delay={0} pauseOnHover={true}>
        <div className="image_wrapper relative mx-auto flex w-full justify-start gap-10 overflow-hidden">
          <Link href="/">
            <Image
              alt="Ali Imam"
              className="block dark:hidden"
              height={100}
              width={100}
              src="/logos/c1-2.png"
            />
            <Image
              alt="Ali Imam"
              className="hidden dark:block"
              height={100}
              width={100}
              src="/logos/c1-1.png"
            />
          </Link>
          <Link href="/">
            <Image
              alt="Ali Imam"
              className="block dark:hidden"
              height={100}
              width={100}
              src="/logos/c2-2.png"
            />
            <Image
              alt="Ali Imam"
              className="hidden dark:block"
              height={100}
              width={100}
              src="/logos/c2-1.png"
            />
          </Link>
          <Link href="/">
            <Image
              alt="Ali Imam"
              className="block dark:hidden"
              height={100}
              width={100}
              src="/logos/c3-2.png"
            />
            <Image
              alt="Ali Imam"
              className="hidden dark:block"
              height={100}
              width={100}
              src="/logos/c3-1.png"
            />
          </Link>
          <Link href="/">
            <Image
              alt="Ali Imam"
              className="block dark:hidden"
              height={100}
              width={100}
              src="/logos/c5-2.png"
            />
            <Image
              alt="Ali Imam"
              className="hidden dark:block"
              height={100}
              width={100}
              src="/logos/c5-1.png"
            />
          </Link>
          <Link href="/">
            <Image
              alt="Ali Imam"
              className="block dark:hidden"
              height={100}
              width={100}
              src="/logos/c7-2.png"
            />
            <Image
              alt="Ali Imam"
              className="hidden dark:block"
              height={100}
              width={100}
              src="/logos/c7-1.png"
            />
          </Link>
          <Link href="/">
            <Image
              alt="Ali Imam"
              className="block dark:hidden"
              height={100}
              width={100}
              src="/logos/c8-2.png"
            />
            <Image
              alt="Ali Imam"
              className="hidden dark:block"
              height={100}
              width={100}
              src="/logos/c8-1.png"
            />
          </Link>
          <Link href="/">
            <Image
              alt="Ali Imam"
              className="block dark:hidden"
              height={100}
              width={100}
              src="/logos/c10-2.png"
            />
            <Image
              alt="Ali Imam"
              className="hidden dark:block"
              height={100}
              width={100}
              src="/logos/c10-1.png"
            />
          </Link>
        </div>
      </Marquee>
    </div>
  );
}
