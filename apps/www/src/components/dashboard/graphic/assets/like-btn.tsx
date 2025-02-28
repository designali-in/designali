"use client";

import { useState } from "react";
import { DIcons } from "dicons";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface LikeButtonProps {
  assetId: string;
  initialLikeCount: number;
  initialIsLiked: boolean;
}

export function LikeButton({
  assetId,
  initialLikeCount,
  initialIsLiked,
}: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [likeCount, setLikeCount] = useState(initialLikeCount);

  const handleLike = async () => {
    try {
      const response = await fetch(`/api/assets/${assetId}/like`, {
        method: isLiked ? "DELETE" : "POST",
      });

      if (response.ok) {
        setIsLiked(!isLiked);
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
      }
    } catch (error) {
      console.error("Error liking asset:", error);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon" onClick={handleLike}>
        <DIcons.Heart
          className={`h-4 w-4 ${isLiked ? "text-ali fill-current" : ""}`}
        />
      </Button>
      <span>{likeCount}</span>
    </div>
  );
}

interface LikeNumberProps {
  initialLikeCount: number;
}

export function LikeCountNumber({ initialLikeCount }: LikeNumberProps) {
  const [likeCount, setLikeCount] = useState(initialLikeCount);

  return (
    <div className="flex items-center gap-2">
      <span>{likeCount}</span>
    </div>
  );
}
