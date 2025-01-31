import { Suspense } from "react";
import Image from "next/image";
import AdBanner from "@/comp/AdBanner";
import { Connect } from "@/comp/common/connect";
import RecentlyAdded from "@/comp/dashboard/admin/agency/HomeGraphic";
import Bento from "@/comp/marketing/home/bento";
import Hero from "@/comp/marketing/home/hero";
import { InstagramFeed } from "@/src/comp/common/insta";
import { NewsletterSection } from "@/src/comp/common/newsletter-section";
import AnimeCardSkeleton from "@/src/comp/dashboard/admin/agency/AnimeCardSkeleton";
import { DBentoGrid } from "@/src/comp/marketing/home/bento-grid";
import { Quote } from "@/src/comp/marketing/home/quote";

export default function HomePage() {
  return (
    <main className="">
      <Hero />
      <Bento />
      <DBentoGrid />
      <Suspense fallback={<AnimeCardSkeleton />}>
        <RecentlyAdded />
      </Suspense>
      <Quote />
      <div className="px-6 xl:px-0">
        <InstagramFeed />
      </div>
      <div className=" mx-auto max-w-7xl  px-6  xl:px-0">
        <AdBanner
          dataAdFormat="auto"
          dataFullWidthResponsive={true}
          dataAdSlot="5723796123"
        />
      </div>
      <NewsletterSection />
      <div className="px-6 xl:px-0">
        <Connect />
      </div>
      <Image
        width={1512}
        height={550}
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
        src="/images/gradient-background-top.png"
        alt=""
        role="presentation"
        priority
      />
    </main>
  );
}
