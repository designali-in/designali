"use client";

import type { Graphic } from "@prisma/client";
import Image from "next/image";
import { DIcons } from "dicons";

import { cn,  formatUrl } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AnimeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  anime: Graphic;
}

export default function AnimeCard({
  anime,
  className,
  ...props
}: AnimeCardProps) {
  const formattedHref = `/graphic/${formatUrl(anime.name)}`;

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
          <AspectRatio className="overflow-hidden">
            {anime.coverImage.length ? (
              <Image
                src={anime.coverImage ?? "/images/anime-placeholder.png"}
                alt={anime.name}
                width={400}
                height={400}
                className="h-full w-full object-cover transition-all group-hover:scale-105"
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
        <CardContent className="flex items-center justify-between p-4">
          <CardTitle className="text-md truncate py-[2px] md:text-xl">
            {anime.name}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {anime.freepro}
          </CardDescription>
        </CardContent>
      </Card>
    </a>
  );
}
