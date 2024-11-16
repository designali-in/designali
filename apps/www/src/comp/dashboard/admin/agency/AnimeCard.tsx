"use client";

import type { Agency } from "@prisma/client";
import Image from "next/image";
import { DIcons } from "dicons";

import { cn, formatDescription, formatUrl } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AnimeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  anime: Agency;
}

export default function AnimeCard({
  anime,
  className,
  ...props
}: AnimeCardProps) {
  const formattedHref = `/anime/${formatUrl(anime.name)}`;

  return (
    <a href={formattedHref} className="group focus:outline-none">
      <Card
        className={cn(
          "focused group h-full overflow-hidden rounded-sm",
          className,
        )}
        {...props}
      >
        <CardHeader className="border-b p-0">
          <AspectRatio ratio={4 / 5} className="overflow-hidden">
            {anime?.coverImage?.length ? (
              <Image
                src={anime.coverImage ?? "/images/anime-placeholder.png"}
                alt={anime.name}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                className="object-cover transition-all group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <div
                aria-label="Placeholder"
                role="img"
                aria-roledescription="placeholder"
                className="flex h-full w-full items-center justify-center bg-secondary"
              >
                <DIcons.Package
                  className="h-9 w-9 text-muted-foreground"
                  aria-hidden="true"
                />
              </div>
            )}
          </AspectRatio>
        </CardHeader>
        <CardContent className="grid gap-[2px] p-4">
          <CardTitle className="truncate py-[2px]">{anime.name}</CardTitle>
          <CardDescription className="line-clamp-2">
            {formatDescription(anime.description, 100)}
          </CardDescription>
        </CardContent>
      </Card>
    </a>
  );
}
