"use client";

import type { AnimeWatchlistClientType } from "@/lib/validations/graphic";
import type { ZodCategoryType } from "@/types";
import type { FC } from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

import { toast } from "@/hooks/use-toast";
import { useAuthToast } from "@/hooks/useAuthToast";
import { Button, buttonVariants } from "@/components/ui/button";

interface AnimeStatusQuestionProps {
  animeId: string;
}

interface StatusType {
  id: number;
  label: string;
  category: ZodCategoryType;
}

const status: StatusType[] = [
  {
    id: 1,
    label: "Want to watch",
    category: "pending",
  },
  {
    id: 2,
    label: "Watching",
    category: "watching",
  },
  {
    id: 3,
    label: "Completed",
    category: "finished",
  },
];

const AnimeStatusQuestion: FC<AnimeStatusQuestionProps> = ({ animeId }) => {
  const router = useRouter();

  const [showQuestion, setShowQuestion] = useState(true);
  const { loginToast, endErrorToast } = useAuthToast();

  const { mutate: addAnimeToWatchlist } = useMutation({
    mutationFn: async (category: ZodCategoryType) => {
      const payload: AnimeWatchlistClientType[] = [
        {
          animeId: animeId,
          category,
        },
      ];

      const { data } = await axios.post("/api/graphic/watchlist", payload);
      return data;
    },
    onError: (error) => {
      setShowQuestion(true);

      if (error instanceof AxiosError) {
        const statusCode = error.response.status;
        if (statusCode === 401) {
          return loginToast();
        }
        if (statusCode === 404) {
          return toast({
            title: "Sorry!",
            description: "We couldn't find this anime.",
            variant: "destructive",
          });
        }
        if (statusCode === 409) {
          return toast({
            title: "Error!",
            description: "Anime already exists in your watchlist.",
            variant: "destructive",
          });
        }
      }

      endErrorToast();
    },
    onMutate: () => {
      setShowQuestion(false);
    },
    onSuccess() {
      const { dismiss } = toast({
        title: "Good!",
        description: "We'll keep a track of it in your watchlist.",
        action: (
          <Link
            href="/watchlist"
            onClick={() => dismiss()}
            className={buttonVariants({ variant: "outline" })}
          >
            Watchlist
          </Link>
        ),
      });
      router.refresh();
    },
  });

  if (!showQuestion) return;

  return (
    <div className="mt-2 space-y-3">
      <p className="text-sm text-muted-foreground">
        Tell us your current anime watching status.
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {status.map((item) => (
          <Button
            variant="outline"
            key={item.id}
            onClick={() => addAnimeToWatchlist(item.category)}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default AnimeStatusQuestion;
