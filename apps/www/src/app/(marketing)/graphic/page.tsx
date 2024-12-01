import type { Metadata } from "next";
import BrowseClient from "@/comp/dashboard/admin/agency/BrowseClient";
import { cn } from "@/src/lib/utils";

import { env } from "@/env";
import { INFINITE_SCROLLING_PAGINATION_BROWSE } from "@/lib/constants";
import { prisma } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Avegra } from "../../fonts";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Graphic - Designali",
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
    <div className="mx-auto my-40 max-w-7xl px-6 xl:px-0">
      <div className="grid items-center justify-center px-8 pb-1 text-center">
        <h3
          className={cn(
            Avegra.className,
            "z-20 inline-flex items-baseline bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text py-3 text-center text-4xl text-transparent dark:bg-gradient-to-r dark:from-slate-200 dark:via-slate-400 dark:to-slate-200 dark:bg-clip-text md:text-7xl",
          )}
        >
          Download High Quality Graphics
        </h3>
        <p className=" text-xs">
          Discover the essence of creativity in our exquisite collection of
          top-tier abstract design assets. Each piece is a blend of beauty and
          utility, perfect for elevating any project
        </p>
        <div className="my-10 flex flex-wrap items-center justify-center gap-2">
          <Button size="lg">Get Unlimited Access</Button>
          <p className="text-left text-xs">
            Full access <br /> from ₹99/m
          </p>
        </div>
      </div>{" "}
      <Separator className="mb-10" />
      <BrowseClient initialAnimes={topTenAnimes} />
    </div>
  );
};

export default BrowsePage;
