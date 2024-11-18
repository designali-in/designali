import type { Graphic } from "@prisma/client";
import type { FC } from "react";

import { prisma } from "@/lib/db";

import AnimeCard from "./AnimeCard";

interface MoreLikeThisProps {
  anime: Pick<Graphic, "genre" | "name">;
}

const MoreLikeThis: FC<MoreLikeThisProps> = async ({ anime }) => {
  const sameGenreAnimes = await prisma.graphic.findMany({
    where: {
      genre: anime.genre,
      NOT: {
        name: anime.name,
      },
    },
    orderBy: {
      totalRatings: "desc",
    },
    take: 5,
  });

  if (sameGenreAnimes.length === 0) {
    return (
      <p className="font-medium text-muted-foreground">
        More anime of this genre are yet to be added.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
      {sameGenreAnimes.map((anime) => {
        return <AnimeCard key={anime.id} anime={anime} />;
      })}
    </div>
  );
};

export default MoreLikeThis;
