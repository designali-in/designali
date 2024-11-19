/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MoreLikeThis from "@/comp/dashboard/admin/agency/MoreLikeThis";
import TopTenAnimeCheck from "@/comp/dashboard/admin/agency/TopTenAnimeCheck";

import { prisma } from "@/lib/db";
import { capitalizeFirstCharacter, cn, formatUrl } from "@/lib/utils";
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
                priority
                alt={`${anime.name}'s cover image`}
                className="h-full w-full rounded-sm border object-cover"
              />
            </div>
          </div>

          <div className="sticky top-24 grid justify-between rounded-lg border p-6">
            <div>
              <div className="flex flex-col gap-y-4">
                <div className="flex items-center justify-between text-xs  text-muted-foreground">
                  <Suspense>
                    <TopTenAnimeCheck name={name} />
                  </Suspense>
                  <p className="text-xs">
                    {new Intl.DateTimeFormat("en-US", {
                      dateStyle: "medium",
                    }).format(new Date(anime.createdAt))}
                  </p>
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
