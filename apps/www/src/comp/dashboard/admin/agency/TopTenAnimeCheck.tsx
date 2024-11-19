import Link from "next/link";

import { prisma } from "@/lib/db";

const TopTenAnimeCheck = async ({ name }: { name: string }) => {
  const topTenAnimes = await prisma.graphic.findMany({
    orderBy: {
      totalRatings: "desc",
    },
    take: 10,
  });

  const inTopTen = topTenAnimes.findIndex((anime) => anime.name === name);

  if (inTopTen < 0) return null;

  return (
    <Link
      href="/dashboard/leaderboard"
      className="focus:outline:none underline-offset-4 hover:underline focus:underline focus-visible:outline-none"
    >
      Top Downloads
    </Link>
  );
};

export default TopTenAnimeCheck;
