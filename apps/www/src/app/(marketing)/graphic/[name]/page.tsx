/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MoreLikeThis from "@/comp/dashboard/admin/agency/MoreLikeThis";
import TopTenAnimeCheck from "@/comp/dashboard/admin/agency/TopTenAnimeCheck";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import {
  capitalizeFirstCharacter,
  cn,
  convertToSingleDecimalPlace,
  formatUrl,
} from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

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
      ? anime.rating.find((r) => r.userId === session.user.id)?.rating || null
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

          <div className="sticky top-24 grid  justify-between rounded-lg border p-6">
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
                </div>
              </div>
            </div>
            <div className="mt-4 grid h-fit   gap-1">
              <Link href={anime.downloadLink} download={true} target="_blank">
                <Button size="lg" className="w-full">
                  Download Now
                </Button>
              </Link>
              <Link href={"/pricing"}>
                <Button size="lg" variant="outline" className="w-full">
                  Unlock all for just ₹99/m
                </Button>
              </Link>
              <p className="p-2 text-xs">
                The standard VAT rate may be charged, following the law of your
                country
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 grid w-full grid-cols-2 gap-3">
        {anime.galleryImage && anime.galleryImage.length > 0 ? (
          anime.galleryImage.map((image, index) => (
            <div key={index} className="relative h-full w-full">
              <Image
                src={image ?? "/images/placeholder.svg"}
                width={800}
                height={800}
                alt={`${anime.name} gallery image ${index + 1}`}
                className="h-full w-full rounded-sm border object-cover"
              />
            </div>
          ))
        ) : (
          <div className="relative h-full w-full">
            <Image
              src="/images/anime-placeholder.png"
              width={800}
              height={800}
              alt="Placeholder for gallery image"
              className="h-full w-full rounded-sm border object-cover"
            />
          </div>
        )}
      </div>

      <div className="mt-20 flex flex-col gap-y-2">
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
