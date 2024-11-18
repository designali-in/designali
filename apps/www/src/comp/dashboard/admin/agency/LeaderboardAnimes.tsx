"use client";

import type { AnimeRanking, ExtendedAnime } from "@/types";
import type { FC } from "react";
import { useEffect, useState } from "react";
import { DataTable } from "@/comp/dashboard/admin/users/DataTable";
import { columns } from "@/comp/dashboard/admin/users/TableColumn";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { DIcons } from "dicons";

import { INFINITE_SCROLLING_PAGINATION_LEADERBOARD } from "@/lib/constants";
import { capitalizeFirstCharacter, formatUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LeaderboardAnimesProps {
  initialLeaderBoardAnimes: ExtendedAnime[];
}

const LeaderboardAnimes: FC<LeaderboardAnimesProps> = ({
  initialLeaderBoardAnimes,
}) => {
  const [leaderboardAnimes, setLeaderboardAnimes] = useState(
    initialLeaderBoardAnimes,
  );

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    [`leaderboard-infinite-query`],
    async ({ pageParam = 1 }) => {
      const queryUrl = `/api/leaderboard?limit=${INFINITE_SCROLLING_PAGINATION_LEADERBOARD}&page=${pageParam}`;
      const { data } = await axios(queryUrl);

      return data as ExtendedAnime[];
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
      initialData: { pages: [initialLeaderBoardAnimes], pageParams: [1] },
    },
  );

  const structuredRankingData: AnimeRanking[] = [];

  leaderboardAnimes.forEach((anime, index, array) => {
    if (index === 0) {
      structuredRankingData.push({
        graphic: anime.name,
        director: anime.director,
        genre: capitalizeFirstCharacter(anime.genre),
        stars: anime.totalRatings,
        rank: "1",
        votes: anime.rating.length.toLocaleString(),
      });
    } else {
      const previousAnime = array[index - 1];
      const currentRating = anime.totalRatings;
      const previousRating = previousAnime.totalRatings;

      if (currentRating === previousRating) {
        structuredRankingData.push({
          graphic: anime.name,
          director: anime.director,
          genre: capitalizeFirstCharacter(anime.genre),
          stars: currentRating,
          rank: structuredRankingData[index - 1].rank,
          votes: anime.rating.length.toLocaleString(),
        });
      } else {
        structuredRankingData.push({
          graphic: anime.name,
          director: anime.director,
          genre: capitalizeFirstCharacter(anime.genre),
          stars: currentRating,
          rank: `${index + 1}`,
          votes: anime.rating.length.toLocaleString(),
        });
      }
    }
  });

  const updatedEqualsRankingData: AnimeRanking[] = [];

  structuredRankingData.forEach((anime, index) => {
    if (index === structuredRankingData.length - 1) return;

    if (anime.rank === structuredRankingData[index + 1].rank) {
      if (!updatedEqualsRankingData[index]?.rank.endsWith("=")) {
        updatedEqualsRankingData.push({
          ...anime,
          rank: `${anime.rank} =`,
        });
      }

      updatedEqualsRankingData.push({
        ...structuredRankingData[index + 1],
        rank: `${structuredRankingData[index].rank} =`,
      });
    } else if (updatedEqualsRankingData[index]?.rank.endsWith("=")) return;
    else {
      updatedEqualsRankingData.push(anime);
    }
  });

  const animeHrefs: string[] = leaderboardAnimes.flatMap(
    (anime) => `/graphic/${formatUrl(anime.name)}`,
  );

  useEffect(() => {
    setLeaderboardAnimes(
      data.pages.flatMap((page) => page) ?? initialLeaderBoardAnimes,
    );
  }, [data, initialLeaderBoardAnimes]);

  return (
    <>
      <ScrollArea className="w-full">
        <div className="w-full">
          <DataTable
            columns={columns}
            data={updatedEqualsRankingData}
            animeHrefs={animeHrefs}
          />
        </div>
      </ScrollArea>
      <div className="mt-4 flex w-full justify-end">
        <Button
          onClick={() => fetchNextPage()}
          size="sm"
          variant="outline"
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage && (
            <DIcons.Loader className="mr-2 h-4 w-4 animate-spin" />
          )}
          Show more
        </Button>
      </div>
    </>
  );
};

export default LeaderboardAnimes;
