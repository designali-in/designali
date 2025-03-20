//@ts-nocheck
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import DeleteAssetButton from "@/src/components/dashboard/graphic/assets/delete-button";
import { DownloadButton } from "@/src/components/dashboard/graphic/assets/download-btn";
import { LikeButton } from "@/src/components/dashboard/graphic/assets/like-btn";
import { auth } from "@/src/lib/auth";
import { DIcons } from "dicons";
import CldImage from "@/components/common/CloudImage";

import { prisma } from "@/lib/db";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { RelatedAssetGrid } from "@/src/components/dashboard/graphic/assets/asset-grid";

export default async function AssetPage({
  params,
}: {
  params: { id: string };
}) {
  const session = await auth();
  const asset = await prisma.asset.findUnique({
    where: { id: params.id },
    include: {
      likes: true,
      tags: true,
      user: {
        select: {
          username: true,
          name: true,
          image: true, // Assuming 'avatar' is the field for the user's profile picture
        },
      },
    },
  });
  const relatedAssets = asset
    ? await prisma.asset.findMany({
        where: {
          tags: {
            some: {
              id: {
                in: asset.tags.map((tag) => tag.id),
              },
            },
          },
          NOT: {
            id: asset.id, // Exclude the current asset
          },
        },
        include: {
          likes: true,
          tags: true,
        },
      })
    : [];

  if (!asset) {
    notFound();
  }
  const username = asset.user?.username || "Unknown User";
  const userName = asset.user?.name || "Unknown User";
  const userAvatar = asset.user?.image || "/designali.svg";

  // Increment view count
  await prisma.asset.update({
    where: { id: asset.id },
    data: { views: { increment: 1 } },
  });

  const imageUrls = asset.url.split(",");

  const isLiked = session
    ? asset.likes.some((like) => like.userId === session.user.id)
    : false;

  return (
    <div className="container-wrapper mt-4 border-t rounded-t-3xl pb-0 p-6">
      <div className="flex items-center justify-between">
        <div className="mb-6 items-center gap-2 md:flex">
          <Breadcrumb className="mb-3 md:mb-0">
            <BreadcrumbList>
              <BreadcrumbItem className=" ">
                <BreadcrumbLink href="/">
                  <DIcons.Designali fill="#f50537" className="h-5 w-5" />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/graphic">Graphic</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold lg:text-4xl">
              {asset.title}
            </h1>
          </div>
        </div>
        <DownloadButton
          assetId={asset.id}
          downloadLink={asset.downloadlink}
          initialDownloadCount={asset.downloads}
        />
      </div>
      <Card>
        <CardHeader>
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href={`/graphic/profile/${username}`}>
                <Avatar className="h-8 w-8 border">
                  <AvatarImage src={userAvatar} alt={`${userName}'s avatar`} />
                  <AvatarFallback>D</AvatarFallback>
                </Avatar>
              </Link>
              <p className="text-lg">{userName}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-4 text-xs text-primary/70">
                <div className="flex gap-1">
                  <DIcons.Eye className="h-4 w-4" />
                  <p>{asset.views}</p>
                </div>
              </div>
              <LikeButton
                assetId={asset.id}
                initialLikeCount={asset.likes.length}
                initialIsLiked={isLiked}
              />
              <div className="flex space-x-2">
                {session && session.user && asset.userId === session.user.id ? (
                  <>
                    <Button variant="outline" size="icon">
                      <a href={`/graphic/assets/${asset.id}/edit`}>
                        <DIcons.AiEditing className="h-4 w-4" />
                      </a>
                    </Button>
                    <DeleteAssetButton assetId={asset.id} />
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            {imageUrls.map((url, index) => (
              <CldImage
                key={index}
                src={url || "/placeholder.svg"}
                alt={`${asset.title} - Image ${index + 1}`}
                width={600}
                height={600}
                className="aspect-square h-full w-full rounded-sm object-cover"
              />
            ))}
          </div>
        </CardContent>
        <CardFooter className="grid items-center gap-3 md:flex md:justify-between">
          <div>
            {asset.description && (
              <p className="text-primary/70">{asset.description}</p>
            )}
          </div>
          <div className="grid items-center gap-3 md:flex md:justify-between">
            <div className="flex flex-wrap gap-2">
              {asset.tags.map((tag) => (
                <Link href={`/graphic/#${tag.name}`} key={tag.id}>
                  <Badge
                    className="px-3 py-1 hover:bg-primary hover:text-primary-foreground text-xs"
                    key={tag.id}
                    variant="secondary"
                  >
                    {tag.name}
                  </Badge>
                </Link>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Uploaded on {new Date(asset.createdAt).toLocaleDateString()}
            </p>
          </div>
        </CardFooter>
      </Card>
      <div>
        <h1 className="py-10 text-center font-semibold text-md md:text-xl">
          Similar Assets
        </h1>
        <RelatedAssetGrid assets={relatedAssets} />
      </div>
    </div>
  );
}
