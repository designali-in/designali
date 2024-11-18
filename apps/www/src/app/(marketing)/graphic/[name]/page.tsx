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
import { buttonVariants } from "@/components/ui/button";
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

  const userRating = anime.rating.find(
    (r) => r.userId === session.user.id,
  )?.rating;

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-col gap-8 sm:flex-row lg:flex-col">
          <div className="flex w-full sm:w-auto">
            <div className="relative h-96 w-72">
              <Image
                src={anime.coverImage ?? "/images/anime-placeholder.png"}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                alt={`${anime.name}'s cover image`}
                className="rounded-sm object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-end gap-y-4">
            <div className="font-medium text-muted-foreground">
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
              <AnimeRatingClient
                animeId={anime.id}
                userRating={userRating}
                session={session}
              />
            </div>
            <Suspense fallback={<Skeleton className="h-4 w-1/2" />}>
              <AnimeWatchers graphicId={anime.id} />
            </Suspense>
          </div>
        </div>
        <div className="col-span-2 mt-8 flex flex-col gap-y-4">
          <div className="flex flex-col">
            <div className="text-md font-semibold text-muted-foreground">
              <Suspense>
                <TopTenAnimeCheck name={name} />
              </Suspense>
            </div>
            <h1 className="lg:leading[1.1] text-4xl font-bold leading-tight tracking-tighter lg:text-5xl">
              {anime.name}
            </h1>
          </div>
          <div className="flex items-center gap-x-3 text-xs font-bold">
            <span>{anime.director}</span>
            <span>{capitalizeFirstCharacter(anime.genre)}</span>
            <span>{anime.releaseYear}</span>
          </div>
          <p className="text-muted-foreground">{anime.description}</p>
          <div className="flex items-center gap-x-2">
            <Link
              href={anime.trailerLink}
              target="_blank"
              className={cn(buttonVariants({ size: "sm" }), "w-fit")}
            >
              <DIcons.Play className="mr-2 h-4 w-4" />
              Watch Trailer
            </Link>
            {session && (
              <CustomReviewSheet animeId={anime.id}>
                <DIcons.Plus className="mr-2 h-4 w-4" /> Review
              </CustomReviewSheet>
            )}
          </div>
          {session && (
            <Suspense>
              <AnimeStatus graphicId={anime.id} session={session} />
            </Suspense>
          )}
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="lg:leading[1.1] text-4xl font-bold leading-tight tracking-tighter lg:text-5xl">
          Reviews
        </h1>
        <Suspense>
          <Reviews graphicId={anime.id} />
        </Suspense>
      </div>
      <div className="flex flex-col gap-y-2">
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
