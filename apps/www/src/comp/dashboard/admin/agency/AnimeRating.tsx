"use client";

import type { RateAnimeSchemaType } from "@/lib/validations/graphic";
import type { Session } from "next-auth";
import type { FC } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePrevious } from "@mantine/hooks";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { DIcons } from "dicons";

import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { useAuthToast } from "@/hooks/useAuthToast";

interface AnimeRatingProps {
  animeId: string;
  userRating: number | undefined;
  session: Session | null;
}

const AnimeRating: FC<AnimeRatingProps> = ({
  animeId,
  userRating,
  session,
}) => {
  const { endErrorToast, loginToast } = useAuthToast();
  const router = useRouter();

  const [rating, setRating] = useState(userRating ?? 0);
  const [hoveredRating, setHoveredRating] = useState(rating ?? 0);
  const previousRating = usePrevious(rating);

  const handleRatingClick = (index: number) => {
    if (rating === index) {
      setRating(0);
      return;
    }

    setRating(index);
    setHoveredRating(index);
  };

  const { mutate: rate, isLoading } = useMutation({
    mutationFn: async (index: number) => {
      const payload: RateAnimeSchemaType = { id: animeId, rating: index };

      const { data } = await axios.post("/api/graphic/rate", payload);
      return data;
    },
    onError: (error) => {
      setRating(previousRating ?? 0);

      if (error instanceof AxiosError) {
        const statusCode = error.response.status;
        if (statusCode === 401) {
          return loginToast();
        }
        if (statusCode === 404) {
          return toast({
            title: "Error!",
            description: "Anime not found.",
            variant: "destructive",
          });
        }
      }

      endErrorToast();
    },
    onSuccess: () => {
      router.refresh();
      toast({
        title: "Success!",
        description: "Your rating was recorded.",
      });
    },
    onMutate: (index: number) => {
      if (!session) return;

      handleRatingClick(index);
      toast({
        title: "Please wait",
        description: "We are recording your rating.",
      });
    },
  });

  const handleRateAnime = (index: number) => {
    if (isLoading) {
      return toast({
        title: "Please wait",
        description: "We are recording your rating.",
      });
    }

    rate(index);
  };

  return (
    <div className="flex w-full flex-col gap-y-2">
      <span className="text-sm text-muted-foreground">Rate this</span>
      <div className="flex w-full gap-x-3  ">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((index) => {
          const isFilled = index <= (hoveredRating || rating) ? true : false;

          return (
            <DIcons.Star
              fill={cn({ "#3b82f6": isFilled }, "")}
              key={index}
              className={cn("h-4 w-4 cursor-pointer text-blue-500", {
                "text-blue-500 ": isFilled,
              })}
              onClick={() => handleRateAnime(index)}
              onMouseEnter={() => setHoveredRating(index)}
              onMouseLeave={() => setHoveredRating(rating ?? 0)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AnimeRating;
