import type { Metadata } from "next";
import BrowseClient from "@/comp/dashboard/admin/agency/BrowseClient";

import { env } from "@/env";
import { INFINITE_SCROLLING_PAGINATION_BROWSE } from "@/lib/constants";
import { prisma } from "@/lib/db";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Browse",
  description:
    "Discover your favorite anime on our browse page, designed to help you search for anime that suits your preferences. Browse through an extensive collection of anime and easily filter them by genres and release year.",
};

const BrowsePage = async () => {
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
    <div className="mx-auto my-40 max-w-7xl">
      <BrowseClient initialAnimes={topTenAnimes} />
    </div>
  );
};

export default BrowsePage;
