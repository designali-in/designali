/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ImageZoomFive } from "@/comp/common/gallery";
import MoreLikeThis from "@/comp/dashboard/admin/agency/MoreLikeThis";
import TopTenAnimeCheck from "@/comp/dashboard/admin/agency/TopTenAnimeCheck";
import { Separator } from "@/registry/default/designali/ui/separator";
import ImageZoom from "@/src/comp/common/image-zoom";
import { DIcons } from "dicons";

import cloudinary from "@/lib/cloudinary";
import { prisma } from "@/lib/db";
import { capitalizeFirstCharacter, cn, formatUrl } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

import Header from "./header";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

export const metadata = {
  title: `Graphics - Designali`,
  description: "A design agency with a touch of magic.",
};

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

  const data = await cloudinary.v2.search
    .expression(`folder:graphics/${anime.id}/*`)
    .sort_by("created_at", "desc")
    .max_results(400)
    .execute();

  return (
    <div className="">
      <div className="w-full">
        <div className="grid gap-3 lg:flex">
          <div className="flex w-full ">
            <div className="relative h-full w-full">
              <ImageZoom>
                <Image
                  src={anime.coverImage ?? "/placeholder.svg"}
                  width={800}
                  height={800}
                  alt={`${anime.name}'s cover image`}
                  className="h-full w-full rounded-sm border object-cover"
                />
              </ImageZoom>
            </div>
          </div>

          <div className=" flex flex-col justify-between rounded-lg border p-6">
            <div>
              <div className="flex flex-col gap-y-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <Suspense>
                    <TopTenAnimeCheck name={name} />
                  </Suspense>
                  <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400">
                    <p className="text-xs">
                      {new Intl.DateTimeFormat("en-US", {
                        dateStyle: "medium",
                      }).format(new Date(anime.createdAt))}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-x-3 text-xs font-bold">
                  <span>{anime.director}</span>
                  <span>{capitalizeFirstCharacter(anime.genre)}</span>
                  <span>{anime.releaseYear}</span>
                </div>

                <p className="text-muted-foreground lg:w-60">
                  {anime.features}
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
                <Separator />
                <Header slug={name} />
                <Separator />
              </div>
              <div className="my-4 ">
                <p className="text-xs text-muted-foreground">Features</p>
                <div className="space-y-2 py-3 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <DIcons.BadgeCheck className="h-4 w-4 text-green-500" />
                    <p>High resolution ({anime.dimention})</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <DIcons.BadgeCheck className="h-4 w-4 text-green-500" />
                    <p>Easy-to-use</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <DIcons.BadgeCheck className="h-4 w-4 text-green-500" />
                    <p>Unique look for your design</p>
                  </div>
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
              <ImageZoom>
                <Image
                  src={image ?? "/placeholder.svg"}
                  width={800}
                  height={800}
                  alt={`${anime.name} gallery image ${index + 1}`}
                  className="h-full w-full rounded-sm border object-cover"
                />
              </ImageZoom>
            </div>
          ))
        ) : (
          <div className="relative h-full w-full">
            <Image
              src="/placeholder.svg"
              width={800}
              height={800}
              alt="Placeholder for gallery image"
              className="h-full w-full rounded-sm border object-cover"
            />
          </div>
        )}
      </div>

      <div className="py-10 ">
        <h1 className="text-xl "> {anime.description}</h1>
      </div>

      <div className="flex flex-col gap-y-2 rounded-xl bg-secondary p-6">
        <h2 className="mb-3 text-2xl font-semibold  ">Assets included:</h2>
        <ImageZoomFive images={data.resources} />
      </div>

      <div className="mt-20 flex flex-col gap-y-2">
        <h2 className="text-2xl font-semibold ">More like this</h2>
        <p className="text-sm text-muted-foreground">
          {`Explore more ${anime.genre.toLowerCase()} graphics`}
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
