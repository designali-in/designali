import Projects from "@/comp/common/projects";
import HomeGraphic from "@/comp/dashboard/admin/agency/HomeGraphic";
import Bento from "@/comp/marketing/home/bento";
import Hero from "@/comp/marketing/home/hero";
import { InstagramFeed } from "@/src/comp/common/insta";
import { DBentoGrid } from "@/src/comp/marketing/home/bento-grid";
import { Quote } from "@/src/comp/marketing/home/quote";
import { INFINITE_SCROLLING_PAGINATION_BROWSE } from "@/src/lib/constants";
import { prisma } from "@/src/lib/db";

// <HomeGraphic initialAnimes={topTenAnimes} />

export default async function HomePage() {
  const topTenAnimes = await prisma.graphic.findMany({
    orderBy: [
      {
        totalRatings: "desc",
      },
      {
        createdAt: "desc",
      },
    ],
    take: INFINITE_SCROLLING_PAGINATION_BROWSE,
  });

  return (
    <main className="">
      <Hero />
      <Bento />
      <DBentoGrid />

      <Quote />
      <div className="px-6 xl:px-0">
        <InstagramFeed />
      </div>
      <Projects />
    </main>
  );
}
