"use client";

import { useState } from "react";
import { DIcons } from "dicons";
 
import { Button } from "@/components/ui/button";

interface LikeButtonProps {
  inspirationId: string;
  initialLikeCount: number;
  initialIsLiked: boolean;
}

export function InspirationLikeButton({
  inspirationId,
  initialLikeCount,
  initialIsLiked,
}: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [likeCount, setLikeCount] = useState(initialLikeCount);

  const handleLike = async () => {
    try {
      const response = await fetch(`/api/admin/inspiration/${inspirationId}/like`, {
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
      <Button variant="outline" onClick={handleLike}>
      <span>{likeCount}</span>
        <DIcons.Heart
          className={`h-4 w-4 ${isLiked ? "text-ali fill-current" : ""}`}
        />
      </Button>
      
    </div>
  );
}

interface LikeNumberProps {
  initialLikeCount: number;
}

export function LikeCountNumber({ initialLikeCount }: LikeNumberProps) {
  const [likeCount] = useState(initialLikeCount);

  return (
    <div className="flex items-center gap-2">
      <span>{likeCount}</span>
    </div>
  );
}
