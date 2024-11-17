/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import type { ExtendedUser } from "@/lib/validations/user";
import type { UserDisplay } from "@/types";
import type { FC } from "react";
import { useEffect, useState } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "date-fns";
import { DIcons } from "dicons";

import { INFINITE_SCROLLING_PAGINATION_RESULTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

import { userColumns } from "./TableColumn";
import UserDataTable from "./UserDataTable";

interface UsersProps {
  initialUsers: UserDisplay[];
  initialFetchedUsers: ExtendedUser[];
}

const Users: FC<UsersProps> = ({ initialUsers, initialFetchedUsers }) => {
  const [users, setUsers] = useState(initialUsers);
  const [query, setQuery] = useState("");

  const {
    data: infiniteQueryData,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["admin-panel-user-infinite-query"],
    async ({ pageParam = 1 }) => {
      const queryUrl = `/api/user?limit=${INFINITE_SCROLLING_PAGINATION_RESULTS}&page=${pageParam}`;

      const { data } = await axios(queryUrl);

      return data as ExtendedUser[];
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
      initialData: { pages: [initialFetchedUsers], pageParams: [1] },
    },
  );

  const {
    data: queryResults,
    refetch,
    isFetching,
  } = useQuery({
    queryFn: async () => {
      const queryUrl = `/api/user?q=${query}`;

      const { data } = await axios(queryUrl);

      return data as ExtendedUser[];
    },
    queryKey: ["user-admin-panel-search-query"],
    enabled: false, //by default it will not fetch
  });

  useEffect(() => {
    if (queryResults) {
      const structuredUserData: UserDisplay[] = queryResults.flatMap(
        (user) => ({
          name: user.name,
          email: user.email,
          createdAt: format(new Date(user.createdAt), "do MMMM',' yyyy"),
          rating: user.rating.length,
          pollsVoted: user.pollVote.length,
          postsCreated: user.post.length,
        }),
      );

      setUsers(structuredUserData);
    } else if (infiniteQueryData) {
      const fetchedInfiniteData =
        infiniteQueryData.pages.flatMap((page) => page) ?? initialFetchedUsers;

      const structuredUserData: UserDisplay[] = fetchedInfiniteData.flatMap(
        (user) => ({
          name: user.name,
          email: user.email,
          createdAt: format(new Date(user.createdAt), "do MMMM',' yyyy"),

          rating: user.rating?.length || 0,

          pollsVoted: user.pollVote?.length || 0,

          postsCreated: user.post?.length || 0,
        }),
      );
      setUsers(structuredUserData);
    }
  }, [queryResults, infiniteQueryData, initialFetchedUsers]);

  return (
    <>
      <div className="flex gap-2 py-2">
        <Input
          placeholder="Type user name here."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={isFetching}
          autoFocus
          onKeyDown={(e) => {
            if (e.key === "Enter" && query.length > 0) {
              refetch();
            }
          }}
        />
        <Button
          onClick={() => refetch()}
          className=""
          disabled={query.length === 0 || isFetching}
        >
          {isFetching ? (
            <DIcons.Loader
              className="h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          ) : (
            "Search"
          )}
        </Button>
      </div>
      <ScrollArea className="w-full">
        <UserDataTable columns={userColumns} data={users} />
      </ScrollArea>
      <div className=" mt-4 flex w-full justify-end">
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

export default Users;
