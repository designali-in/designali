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
      const response = await fetch(
        `/api/admin/inspiration/${inspirationId}/like`,
        {
          method: "POST", // Now handles both like & unlike
        }
      );
  
      if (response.ok) {
        const data = await response.json(); // Get response JSON
        setIsLiked(!isLiked);
        setLikeCount(data.likeCount); // ✅ Update with actual count from server
      }
    } catch (error) {
      console.error("Error liking asset:", error);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" onClick={handleLike}>
        <span>{likeCount}</span>
        <DIcons.Bookmark01
          className={`h-4 w-4 ${isLiked ? "text-ali fill-current" : ""}`}
        />
      </Button>
    </div>
  );
}

interface LikeNumberProps {
  initialLikeCount: number;
}

export function InspirationLikeCountNumber({ initialLikeCount }: LikeNumberProps) {
  const [likeCount] = useState(initialLikeCount);

  return (
    <div className="flex items-center gap-2">
      <span>{likeCount}</span>
    </div>
  );
}
