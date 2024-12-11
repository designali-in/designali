import { Suspense } from "react";
import AdBanner from "@/comp/AdBanner";
import { Connect } from "@/comp/common/connect";
import RecentlyAdded from "@/comp/dashboard/admin/agency/HomeGraphic";
import Bento from "@/comp/marketing/home/bento";
import Hero from "@/comp/marketing/home/hero";
import { InstagramFeed } from "@/src/comp/common/insta";
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
      {/* <div className="px-6 xl:px-0">
        <InstagramFeed />
      </div>
      */}
      <div className="mb-5 bg-black">
        <AdBanner
          dataAdFormat="auto"
          dataFullWidthResponsive={true}
          dataAdSlot="5723796123"
        />
      </div>
      <Connect />
    </main>
  );
}
