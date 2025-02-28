//@ts-nocheck
"use client";

import type { LikeValidatorType } from "@/lib/validations/like";
import type { FC } from "react";
import { useState } from "react";
import { usePrevious } from "@mantine/hooks";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { DIcons } from "dicons";

import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";
import { useAuthToast } from "@/hooks/useAuthToast";

interface LikePostProps {
  initialLike: boolean;
  likes: number;
  postId: string;
}

const LikePost: FC<LikePostProps> = ({ initialLike, likes, postId }) => {
  const [isLiked, setIsLiked] = useState(initialLike);
  const previousRating = usePrevious(isLiked);

  const { endErrorToast, loginToast } = useAuthToast();

  const [numberOfLikes, setNumberOfLikes] = useState(likes);
  const previousNumberOfLikes = usePrevious(numberOfLikes);

  const { mutate: likePost, isLoading } = useMutation({
    mutationFn: async () => {
      const payload: LikeValidatorType = { postId };

      const { data } = await axios.post("/api/post/like", payload);
      return data;
    },
    onError: (error) => {
      setNumberOfLikes(previousNumberOfLikes ?? 0);
      setIsLiked(previousRating ?? false);

      if (error instanceof AxiosError) {
        const statusCode = error.response.status;
        if (statusCode === 401) {
          return loginToast();
        }
        if (statusCode === 404) {
          return toast({
            title: "Error!",
            description: "Post does not exist.",
            variant: "destructive",
          });
        }
      }

      endErrorToast();
    },
    onMutate: () => {
      if (isLiked) {
        setNumberOfLikes((prev) => prev - 1);
        setIsLiked(false);
      } else {
        setNumberOfLikes((prev) => prev + 1);
        setIsLiked(true);
      }
    },
  });

  return (
    <div className="flex items-center gap-x-1.5">
      <DIcons.Heart
        className={cn("h-3.5 w-3.5 cursor-pointer", {
          "text-red-600": isLiked,
        })}
        onClick={() => {
          if (isLoading) {
            toast({
              title: "Please wait",
              description: "We are processing your request.",
            });
            return;
          }
          likePost();
        }}
      />
      <span className="text-sm text-muted-foreground">{numberOfLikes}</span>
    </div>
  );
};

export default LikePost;
