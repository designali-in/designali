import type { Session } from "next-auth";
import type { FC } from "react";

import { prisma } from "@/lib/db";

import AnimeQuestionClient from "./AnimeQuestionClient";

interface AnimeStatusProps {
  graphicId: string;
  session: Session;
}

const AnimeStatus: FC<AnimeStatusProps> = async ({ graphicId, session }) => {
  const promises = [
    prisma.notStartedDesign.findFirst({
      where: {
        graphicId,
        userId: session.user.id,
      },
    }),
    prisma.currentlyDesign.findFirst({
      where: {
        graphicId,
        userId: session.user.id,
      },
    }),
    prisma.finishedDesign.findFirst({
      where: {
        graphicId,
        userId: session.user.id,
      },
    }),
  ];

  const [pendingAnimes, watchingAnimes, finishedAnimes] =
    await Promise.all(promises);

  if (pendingAnimes || watchingAnimes || finishedAnimes) return;

  return <AnimeQuestionClient animeId={graphicId} />;
};

export default AnimeStatus;
