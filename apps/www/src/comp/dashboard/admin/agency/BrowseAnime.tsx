"use client";

import type { Graphic } from "@prisma/client";
import type { FC } from "react";
import { Suspense, useEffect, useRef, useState } from "react";
import { Combobox } from "@/comp/uis/combobox";
import { catalogs } from "@/data/agency";
import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useDebounce } from "use-debounce";

import { INFINITE_SCROLLING_PAGINATION_BROWSE } from "@/lib/constants";
import { getYearData } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";

interface BrowseAnimeProps {
  initialAnimes: Graphic[];
}

const BrowseAnime: FC<BrowseAnimeProps> = ({ initialAnimes }) => {
  const yearData = getYearData();
  const queryClient = useQueryClient();

  const [query, setQuery] = useState("");
  const [enableSearch, setEnableSearch] = useState(false);
  const debouncedQuery = useDebounce(query, 500);
  const [debouncedQueryState, setDebouncedQueryState] = useState(false);

  useEffect(() => {
    if (!debouncedQueryState) return;

    setEnableSearch(true);

    queryClient.resetQueries(["anime-infinite-query"]);
    setDebouncedQueryState(false);
  }, [query, debouncedQueryState, queryClient]);

  useEffect(() => {
    if (!debouncedQuery) return;

    setDebouncedQueryState(true);
  }, [debouncedQuery]);

  useEffect(() => {
    setNoNewData(false);
  }, [query]);

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

  const handleResetFilters = () => {
    queryClient.resetQueries(["browse-anime-infinite-query"]);
    setNoNewData(false);
    setReset(true);
  };

  return (
    <>
      <div className="flex flex-col justify-between gap-y-4 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Combobox
            data={catalogs}
            selectedOption={genre}
            setState={setGenre}
            placeholder="Catagories"
            reset={reset}
          />

          {
            //<Combobox
            // data={yearData}
            // selectedOption={year}
            // placeholder="File type"
            // setState={setYear}
            // reset={reset}
            // large
            // />
          }
        </div>

        <Button size="sm" onClick={handleResetFilters} className="w-fit">
          Reset filters
        </Button>
      </div>
      {isFetching && !isFetchingNextPage ? (
        <div className="mt-3">
          <AnimeCardSkeleton />
        </div>
      ) : (
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {animes.map((anime, index) => {
            if (index === animes.length - 1) {
              return (
                <div key={anime.id} ref={ref}>
                  <Suspense fallback={<AnimeCardSkeleton />}>
                    <AnimeCard anime={anime} />
                  </Suspense>
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
      {!isFetching && animes.length === 0 && (
        <p className="text-center text-sm text-muted-foreground">
          No results found.
        </p>
      )}
      {isFetchingNextPage && ""}
    </>
  );
};

export default BrowseAnime;
