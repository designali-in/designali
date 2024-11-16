"use client";

import type { AdminDisplay, AnimeRanking, UserDisplay } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";
import { DIcons } from "dicons";

import { Button } from "@/components/ui/button";

export const columns: ColumnDef<AnimeRanking>[] = [
  {
    accessorKey: "rank",
    header: ({ column }) => (
      <div className="flex justify-center">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Rank <DIcons.Move className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("rank")}</div>;
    },
  },
  {
    accessorKey: "anime",
    header: "Anime",
  },
  {
    accessorKey: "director",
    header: "Director",
  },
  {
    accessorKey: "genre",
    header: ({ column }) => (
      <div className="flex justify-center">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Genre <DIcons.Move className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("genre")}</div>;
    },
  },
  {
    accessorKey: "stars",
    header: ({ column }) => (
      <div className="flex justify-center">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Stars <DIcons.Move className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("stars")}</div>;
    },
  },
  {
    accessorKey: "votes",
    header: ({ column }) => (
      <div className="flex justify-center">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Votes <DIcons.Move className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("votes")}</div>;
    },
  },
];

export const adminColumns: ColumnDef<AdminDisplay>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name <DIcons.Move className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email <DIcons.Move className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "animeAdded",
    header: ({ column }) => (
      <div className="flex justify-center">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Anime Added <DIcons.Move className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("animeAdded")}</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Joined At <DIcons.Move className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
];

export const userColumns: ColumnDef<UserDisplay>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name <DIcons.Move className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email <DIcons.Move className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "rating",
    header: ({ column }) => (
      <div className="flex justify-center">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ratings <DIcons.Move className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("rating")}</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Joined At <DIcons.Move className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "pollsVoted",
    header: ({ column }) => (
      <div className="flex justify-center">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Polls Voted <DIcons.Move className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("pollsVoted")}</div>;
    },
  },
  {
    accessorKey: "postsCreated",
    header: ({ column }) => (
      <div className="flex justify-center">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Posts <DIcons.Move className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("postsCreated")}</div>;
    },
  },
];
