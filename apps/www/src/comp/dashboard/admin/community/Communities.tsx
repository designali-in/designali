"use client";

import type { ExtendedCommunity } from "@/types";
import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { INFINITE_SCROLLING_PAGINATION_RESULTS } from "@/lib/constants";
import { useDebounce } from "@/hooks/use-debounce";
import { Input } from "@/components/ui/input";

import CommunityCard from "./CommunityCard";

interface CommunitiesProps {
  initialCommunities: ExtendedCommunity[];
  category?: string;
}

const Communities: FC<CommunitiesProps> = ({
  initialCommunities,
  category,
}) => {
  const lastPostRef = useRef<HTMLElement>(null);
  const [communities, setCommunities] = useState(initialCommunities);
  const [enableSearch, setEnableSearch] = useState(false);
  const [noNewData, setNoNewData] = useState(false);
  const [debouncedQueryState, setDebouncedQueryState] = useState(false);

  const queryClient = useQueryClient();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  });

  const infiniteQueryKey = category
    ? ["community-infinite", category, debouncedQuery]
    : ["community-infinite", debouncedQuery];

  const { data, fetchNextPage, isFetchingNextPage, isFetching } =
    useInfiniteQuery(
      infiniteQueryKey,
      async ({ pageParam = 1 }) => {
        const queryUrl =
          `/api/community?limit=${INFINITE_SCROLLING_PAGINATION_RESULTS}&page=${pageParam}` +
          (category ? `&category=${category}` : "") +
          (query ? `&q=${query}` : "");

        const { data } = await axios(queryUrl);

        setDebouncedQueryState(false);
        setNoNewData(false);

        return data as ExtendedCommunity[];
      },
      {
        getNextPageParam: (_, pages) => {
          return pages.length + 1;
        },
        initialData: { pages: [initialCommunities], pageParams: [1] },
        enabled: enableSearch,
      },
    );

  useEffect(() => {
    if (isFetching) return;

    if (data.pages[data.pages.length - 1].length === 0) {
      setNoNewData(true);
    }

    setCommunities(data.pages.flatMap((page) => page) ?? initialCommunities);
    setEnableSearch(false);
  }, [data, initialCommunities, isFetching]);

  useEffect(() => {
    if (!debouncedQueryState) return;

    setEnableSearch(true);

    const infiniteQueryKey = category
      ? ["community-infinite", category, query]
      : ["community-infinite", query];

    queryClient.resetQueries(infiniteQueryKey);
  }, [query, debouncedQueryState, queryClient, category]);

  useEffect(() => {
    if (!debouncedQuery) return setNoNewData(false);

    setDebouncedQueryState(true);
  }, [debouncedQuery]);

  useEffect(() => {
    if (entry && !noNewData) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage, noNewData]);

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center gap-x-2">
        <Input
          placeholder="Type a community name here."
          onChange={(e) => setQuery(e.target.value)}
          disabled={isFetching}
        />
      </div>

      {communities.map((community, index) => {
        if (index === communities.length - 1) {
          return (
            <div key={community.id} ref={ref}>
              <CommunityCard community={community} />
            </div>
          );
        } else {
          return (
            <div key={community.id}>
              <CommunityCard community={community} />
            </div>
          );
        }
      })}
      {communities.length === 0 && (
        <p className="text-center text-sm text-muted-foreground">
          No communities found.
        </p>
      )}
      {isFetchingNextPage && ""}
    </div>
  );
};

export default Communities;
