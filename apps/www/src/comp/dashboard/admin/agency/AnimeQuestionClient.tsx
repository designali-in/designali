"use client";

import dynamic from "next/dynamic";

const AnimeStatusQuestion = dynamic(() => import("./AnimeStatusQuestion"), {
  ssr: false,
});

const AnimeQuestionClient = ({ animeId }: { animeId: string }) => {
  return <AnimeStatusQuestion animeId={animeId} />;
};

export default AnimeQuestionClient;
