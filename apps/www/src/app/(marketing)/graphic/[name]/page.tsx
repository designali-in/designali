/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimeRatingClient from "@/comp/dashboard/admin/agency/AnimeRatingClient";
import AnimeStatus from "@/comp/dashboard/admin/agency/AnimeStatus";
import AnimeWatchers from "@/comp/dashboard/admin/agency/AnimeWatchers";
import CustomReviewSheet from "@/comp/dashboard/admin/agency/CustomReviewSheet";
import MoreLikeThis from "@/comp/dashboard/admin/agency/MoreLikeThis";
import Reviews from "@/comp/dashboard/admin/agency/Reviews";
import TopTenAnimeCheck from "@/comp/dashboard/admin/agency/TopTenAnimeCheck";
import { DIcons } from "dicons";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import {
  capitalizeFirstCharacter,
  cn,
  convertToSingleDecimalPlace,
  formatUrl,
} from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

interface AnimePageProps {
  params: {
    name: string;
  };
}

const AnimePage = async ({ params }: AnimePageProps) => {
  const { name: rawName } = params;
  const name = formatUrl(rawName, true);

  const session = await auth();

  const anime = await prisma.graphic.findUnique({
    where: {
      name,
    },
    include: {
      rating: true,
    },
  });

  if (!anime) {
    notFound();
  }

  const calculatedRating = () => {
    const totalRatings = anime.totalRatings;
    const ratingLength = anime.rating.length * 10;

    if (ratingLength === 0) return 0;

    const rawRating = (totalRatings / ratingLength) * 10;

    return convertToSingleDecimalPlace(rawRating, 2);
  };

  const userRating =
    session.user.id && Array.isArray(anime.rating)
      ? anime.rating.find((r) => r.userId === session.user.id).rating || null
      : null;
  return (
    <div className="">
      <div className="w-full">
        <div className="grid gap-3 lg:flex">
          <div className="flex w-full ">
            <div className="relative h-full w-full">
              <Image
                src={anime.coverImage ?? "/images/anime-placeholder.png"}
                width={800}
                height={800}
                alt={`${anime.name}'s cover image`}
                className="h-full w-full rounded-sm border object-cover"
              />
            </div>
          </div>

          <div className="sticky top-24 grid justify-between rounded-lg border p-6">
            <div>
              <div className="flex flex-col gap-y-4">
                <div className="text-md font-semibold text-muted-foreground">
                  <Suspense>
                    <TopTenAnimeCheck name={name} />
                  </Suspense>
                </div>
                <div className="flex items-center gap-x-3 text-xs font-bold">
                  <span>{anime.director}</span>
                  <span>{capitalizeFirstCharacter(anime.genre)}</span>
                  <span>{anime.releaseYear}</span>
                </div>
                <p className="text-muted-foreground lg:w-60">
                  {anime.description}
                </p>
                <div className="flex items-center gap-x-2">
                  <Link
                    href={anime.trailerLink}
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "w-fit",
                    )}
                  >
                    View Turorial
                  </Link>
                  {session && (
                    <CustomReviewSheet animeId={anime.id}>
                      <DIcons.Plus className="h-4 w-4" /> Review
                    </CustomReviewSheet>
                  )}
                </div>
                {session && (
                  <Suspense>
                    <AnimeStatus graphicId={anime.id} session={session} />
                  </Suspense>
                )}
              </div>
              <div className="py-3 font-medium text-muted-foreground">
                <span className="text-4xl font-bold text-zinc-800 dark:text-zinc-300">
                  {calculatedRating()}
                </span>
                /10 ·{" "}
                <span className="text-xs">
                  {anime.rating.length}{" "}
                  {anime.rating.length == 1 ? "vote" : "votes"}
                </span>
              </div>
              <div className="text-xs font-semibold text-muted-foreground">
                {session && (
                  <AnimeRatingClient
                    animeId={anime.id}
                    userRating={userRating}
                    session={session}
                  />
                )}
              </div>
            </div>
            <div className="mt-4 grid h-fit  gap-1">
              <Button size="lg" className="w-full">
                Download Now
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                Unlock all for just ₹99/m
              </Button>
              <p className="p-2 text-xs">
                The standard VAT rate may be charged, following the law of your
                country
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <h1 className="lg:leading[1.1] text-4xl font-bold leading-tight tracking-tighter lg:text-5xl">
          Reviews
        </h1>
        <Suspense>
          <Reviews
            graphicId={anime.id}
            session={session}
            initialReviews={undefined}
          />
        </Suspense>
      </div>
      <div className="mt-3 flex flex-col gap-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">
          More like this
        </h2>
        <p className="text-sm text-muted-foreground">
          {`Explore more ${anime.genre.toLowerCase()} animes`}
        </p>
        <Suspense>
          <MoreLikeThis
            anime={{
              genre: anime.genre,
              name: anime.name,
            }}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default AnimePage;
