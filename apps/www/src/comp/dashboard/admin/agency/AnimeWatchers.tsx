import { prisma } from "@/lib/db";

const AnimeWatchers = async ({ graphicId }: { graphicId: string }) => {
  const promises = [
    prisma.notStartedDesign.count({
      where: {
        graphicId,
      },
    }),
    prisma.currentlyDesign.count({
      where: {
        graphicId,
      },
    }),
    prisma.finishedDesign.count({
      where: {
        graphicId,
      },
    }),
  ];

  const [notStartedCount, currentlyWatchingCount, finishedWatchingCount] =
    await Promise.all(promises);

  return (
    <div className="flex items-center gap-x-2 text-sm text-muted-foreground">
      <p>
        Planning:{" "}
        <span className="font-semibold">
          {notStartedCount.toLocaleString()}
        </span>
      </p>
      <p>
        Watching:{" "}
        <span className="font-semibold">
          {currentlyWatchingCount.toLocaleString()}
        </span>
      </p>
      <p>
        Finished:{" "}
        <span className="font-semibold">
          {finishedWatchingCount.toLocaleString()}
        </span>
      </p>
    </div>
  );
};

export default AnimeWatchers;
