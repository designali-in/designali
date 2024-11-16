import { INFINITE_SCROLLING_PAGINATION_ANIME } from "@/lib/constants";
import { prisma } from "@/lib/db";

import AnimeClient from "./AnimeClient";

const AdminAnimes = async () => {
  const allAgency = await prisma.agency.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: INFINITE_SCROLLING_PAGINATION_ANIME,
  });

  return <AnimeClient initialAnimes={allAgency} />;
};

export default AdminAnimes;
