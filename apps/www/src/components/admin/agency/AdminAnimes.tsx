/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { INFINITE_SCROLLING_PAGINATION_ANIME } from "@/lib/constants";
import { prisma } from "@/lib/db";

import AnimeClient from "./AnimeClient";

const AdminAnimes = async () => {
  const allAgency = await prisma.graphic.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: INFINITE_SCROLLING_PAGINATION_ANIME,
  });

  return <AnimeClient initialAnimes={allAgency} />;
};

export default AdminAnimes;
