"use client";

import type { Graphic } from "@prisma/client";
import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Combobox } from "@/comp/uis/combobox";
import { catalogs } from "@/data/agency";
import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { INFINITE_SCROLLING_PAGINATION_BROWSE } from "@/lib/constants";
import { getYearData } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import AnimeCard from "./AnimeCard";

interface BrowseAnimeProps {
  initialAnimes: Graphic[];
}

const HomeGraphic: FC<BrowseAnimeProps> = ({ initialAnimes }) => {
  const yearData = getYearData();
  const queryClient = useQueryClient();

  const lastPostRef = useRef<HTMLElement>(null);
  const [animes, setAnimes] = useState<Graphic[]>(initialAnimes);

  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [noNewData, setNoNewData] = useState(false);
  const [reset, setReset] = useState(false);

  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  });

  const { data, fetchNextPage, isFetchingNextPage, isFetching } =
    useInfiniteQuery(
      ["browse-anime-infinite-query", genre, year],
      async ({ pageParam = 1 }) => {
        const queryUrl = `/api/graphic?limit=${INFINITE_SCROLLING_PAGINATION_BROWSE}&page=${pageParam}&orderBy=totalRatings&genre=${genre}&year=${year}`;

        const { data } = await axios(queryUrl);

        return data as Graphic[];
      },
      {
        getNextPageParam: (_, pages) => {
          return pages.length + 1;
        },
        initialData: { pages: [initialAnimes], pageParams: [1] },
      },
    );

  useEffect(() => {
    const newDataLength = data.pages[data.pages.length - 1].length ?? 0;

    if (newDataLength < INFINITE_SCROLLING_PAGINATION_BROWSE) {
      setNoNewData(true);
    }

    if (isFetching) return;

    setReset(false);
    setAnimes(data.pages.flatMap((page) => page) ?? initialAnimes);
  }, [data, initialAnimes, isFetching]);

  useEffect(() => {
    if (entry && !noNewData) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage, noNewData]);

  useEffect(() => {
    setNoNewData(false);
    queryClient.resetQueries(["browse-anime-infinite-query"]);
  }, [genre, year, queryClient]);

  return (
    <div className="mx-auto my-3 max-w-7xl rounded-xl bg-secondary p-3 px-6 md:p-6 xl:px-0">
      <div className="flex justify-between p-3 md:p-6">
        <h2 className="mb-3 text-2xl font-semibold ">Graphic</h2>
        <Link href={"/graphic"}>
          <Button>View All</Button>
        </Link>
      </div>
      <div className="">
        {isFetching && !isFetchingNextPage ? (
          ""
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {animes.slice(3).map((anime, index) => {
              if (index === animes.length - 1) {
                return (
                  <div key={anime.id} ref={ref}>
                    <AnimeCard anime={anime} />
                  </div>
                );
              } else {
                return (
                  <div key={anime.id}>
                    <AnimeCard anime={anime} />
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeGraphic;
