//@ts-nocheck
"use client";

import type { Graphic } from "@prisma/client";
import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { INFINITE_SCROLLING_PAGINATION_ANIME } from "@/lib/constants";
import { useDebounce } from "@/hooks/use-debounce";
import { Input } from "@/components/ui/input";

import { AnimeAdminCard } from "./AdminAnime";
import AnimeCardSkeleton from "./AnimeCardSkeleton";

interface AnimesProps {
  initialAnimes: Graphic[];
}

const Animes: FC<AnimesProps> = ({ initialAnimes }) => {
  const lastPostRef = useRef<HTMLElement>(null);

  const queryClient = useQueryClient();

  const [animes, setAnimes] = useState(initialAnimes);
  const [noNewData, setNoNewData] = useState(false);
  const [enableSearch, setEnableSearch] = useState(false);
  const [debouncedQueryState, setDebouncedQueryState] = useState(false);

  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  });

  const infiniteQueryKey = ["anime-infinite-query", query];

  const { data, isFetchingNextPage, isFetching } = useInfiniteQuery(
    infiniteQueryKey,
    async ({ pageParam = 1 }) => {
      const queryUrl = `/api/graphic?limit=${INFINITE_SCROLLING_PAGINATION_ANIME}&page=${pageParam}&q=${query}`;

      const { data } = await axios(queryUrl);

      return data as Graphic[];
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
      initialData: { pages: [initialAnimes], pageParams: [1] },
      enabled: enableSearch,
    },
  );
  useEffect(() => {
    if (data.pages[data.pages.length - 1].length === 0) {
      setNoNewData(true);
    }

    if (isFetching) return;

    setAnimes(data.pages.flatMap((page) => page) ?? initialAnimes);
    setEnableSearch(false);
  }, [data, initialAnimes, isFetching]);

  // useEffect(() => {
  // if (entry.isIntersecting && !noNewData) {
  //    fetchNextPage();
  //  }
  // }, [entry, fetchNextPage, noNewData]);

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

  return (
    <>
      <div className="flex items-center gap-x-2">
        <Input
          placeholder="Type a graphic name here."
          autoFocus
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="mt-3 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {animes.map((anime, index) => {
          if (index === animes.length - 1) {
            return (
              <div key={anime.id} ref={ref}>
                <AnimeAdminCard anime={anime} />
              </div>
            );
          } else {
            return (
              <div key={anime.id}>
                <AnimeAdminCard anime={anime} />
              </div>
            );
          }
        })}
      </div>
      {query.length > 0 && animes.length === 0 && (
        <p className="text-center text-sm text-muted-foreground">
          No results found.
        </p>
      )}
      {isFetchingNextPage && (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index}>
              <AnimeCardSkeleton />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Animes;
