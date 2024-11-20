import Link from "next/link";
import { Button } from "@/registry/default/designali/ui/button";

import { prisma } from "@/lib/db";

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
    <div className="mx-auto my-3 max-w-7xl px-6 xl:px-0">
      <div className=" rounded-xl bg-secondary p-3 md:p-6">
        <div className="flex items-center justify-between">
          <h2 className="mb-3 text-2xl font-semibold  ">Graphic</h2>
          <Link href={"/graphic"}>
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-3  sm:grid-cols-2 md:grid-cols-3 ">
          {animes.map((anime) => {
            return <AnimeCardClient key={anime.id} anime={anime} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentlyAdded;
