"use client";

import type { Graphic } from "@prisma/client";
import dynamic from "next/dynamic";

import { SingleAnimeCardSkeleton } from "./AnimeCardSkeleton";

const AnimeCard = dynamic(() => import("./AnimeCard"), {
  ssr: false,
  loading: () => <SingleAnimeCardSkeleton />,
});

const AnimeCardClient = ({ anime }: { anime: Graphic }) => {
  return <AnimeCard anime={anime} />;
};

export default AnimeCardClient;
