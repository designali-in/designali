import Link from "next/link";

import { prisma } from "@/lib/db";
import { Button } from "@/components/ui/button";

import AnimeCardClient from "./AnimeCardClient";

const RecentlyAdded = async () => {
  const animes = await prisma.graphic.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
  });

  if (animes.length === 0) return;

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 gap-3  sm:grid-cols-2 md:grid-cols-3 ">
        {animes.slice(0, 3).map((anime) => {
          return <AnimeCardClient key={anime.id} anime={anime} />;
        })}
      </div>
    </div>
  );
};

export default RecentlyAdded;
