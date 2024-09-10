"use client";

import type { Likes } from "@/types";
import React from "react";
import fetcher from "@/lib/fetcher";
import { cn } from "@designali/ui";
import { Button } from "@designali/ui/button";
import { toast } from "@designali/ui/toast";
import useSWR from "swr";
import { useDebouncedCallback } from "use-debounce";

import { Icons } from "../icons";

export interface LikeButtonProps {
  slug: string;
}

export const LikeButton = (props: LikeButtonProps) => {
  const { slug } = props;
  const [isBreathing, setIsBreathing] = React.useState(false);
  const [scale, setScale] = React.useState(1);
  const [cacheCount, setCacheCount] = React.useState(0);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const buttonClasses =
    "relative flex w-full items-center justify-center rounded-full bg-ali p-4 tracking-wide text-white";

  const { data, isLoading, mutate } = useSWR<Likes>(
    `/api/likes?slug=${slug}`,
    fetcher,
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsBreathing(true);
      setScale(1.2);
      setTimeout(() => {
        setIsBreathing(false);
        setScale(1);
      }, 1500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleConfetti = async () => {
    const { clientWidth, clientHeight } = document.documentElement;
    const boundingBox = buttonRef.current.getBoundingClientRect();

    const targetY = boundingBox.y ?? 0;
    const targetX = boundingBox.x ?? 0;
    const targetWidth = boundingBox.width ?? 0;

    const targetCenterX = targetX + targetWidth / 2;
    const confetti = (await import("canvas-confetti")).default;

    await confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 100,
      origin: {
        y: targetY / clientHeight,
        x: targetCenterX / clientWidth,
      },
    });
  };

  const onLikeSaving = useDebouncedCallback(async (value: number) => {
    try {
      const res = await fetch("/api/likes", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug, count: value }),
      });

      const newData = (await res.json()) as Likes;

      await mutate(newData);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setCacheCount(0);
    }
  }, 1000);

  const handleLike = () => {
    if (isLoading || !data || data.currentUserLikes + cacheCount >= 3) return;

    const value = cacheCount === 3 ? cacheCount : cacheCount + 1;
    setCacheCount(value);

    if (data.currentUserLikes + cacheCount === 2) {
      handleConfetti();
    }

    return onLikeSaving(value);
  };

  return (
    <div className="w-full">
      <Button
        size="lg"
        ref={buttonRef}
        className={cn(
          buttonClasses,
          ["group relative h-12 rounded-full"],
          data &&
            data.currentUserLikes + cacheCount === 3 &&
            "bg-ali fill-ali text-white dark:bg-ali dark:fill-ali dark:text-white",
        )}
        type="button"
        onClick={handleLike}
        aria-label="Like this post"
      >
        <span
          className={cn(
            [
              "absolute inset-0 z-10 flex h-full w-full items-center justify-center gap-2 rounded-full bg-slate-100 text-lg font-bold text-black dark:bg-slate-900 dark:text-white",
              "hover:text-white group-hover:bg-ali",
            ],
            data &&
              data.currentUserLikes + cacheCount === 3 &&
              "bg-ali fill-ali text-white dark:bg-ali dark:fill-ali dark:text-white",
          )}
        >
          <Icons.heart
            className={cn(
              "h-7 w-7 animate-pulse",
              data && data.currentUserLikes + cacheCount === 3 && "text-white",
            )}
          />
          {isLoading || !data ? (
            <div> -- </div>
          ) : (
            <div>{data.likes + cacheCount}</div>
          )}
        </span>
      </Button>
    </div>
  );
};

export const LikeButtonIcon = (props: LikeButtonProps) => {
  const { slug } = props;
  const [isBreathing, setIsBreathing] = React.useState(false);
  const [scale, setScale] = React.useState(1);
  const [cacheCount, setCacheCount] = React.useState(0);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const buttonClasses =
    "relative flex w-full items-center justify-center rounded-full bg-ali p-4 tracking-wide text-white";

  const { data, isLoading, mutate } = useSWR<Likes>(
    `/api/likes?slug=${slug}`,
    fetcher,
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsBreathing(true);
      setScale(1.2);
      setTimeout(() => {
        setIsBreathing(false);
        setScale(1);
      }, 1500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleConfetti = async () => {
    const { clientWidth, clientHeight } = document.documentElement;
    const boundingBox = buttonRef.current.getBoundingClientRect();

    const targetY = boundingBox.y ?? 0;
    const targetX = boundingBox.x ?? 0;
    const targetWidth = boundingBox.width ?? 0;

    const targetCenterX = targetX + targetWidth / 2;
    const confetti = (await import("canvas-confetti")).default;

    await confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 100,
      origin: {
        y: targetY / clientHeight,
        x: targetCenterX / clientWidth,
      },
    });
  };

  const onLikeSaving = useDebouncedCallback(async (value: number) => {
    try {
      const res = await fetch("/api/likes", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug, count: value }),
      });

      const newData = (await res.json()) as Likes;

      await mutate(newData);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setCacheCount(0);
    }
  }, 1000);

  const handleLike = () => {
    if (isLoading || !data || data.currentUserLikes + cacheCount >= 3) return;

    const value = cacheCount === 3 ? cacheCount : cacheCount + 1;
    setCacheCount(value);

    if (data.currentUserLikes + cacheCount === 2) {
      handleConfetti();
    }

    return onLikeSaving(value);
  };

  return (
    <div className="w-full">
      <Button
        size="lg"
        ref={buttonRef}
        className={cn(
          buttonClasses,
          ["group relative h-12 w-12 rounded-full"],
          data &&
            data.currentUserLikes + cacheCount === 3 &&
            "bg-ali fill-ali text-white dark:bg-ali dark:fill-ali dark:text-white",
        )}
        type="button"
        onClick={handleLike}
        aria-label="Like this post"
      >
        <span
          className={cn(
            [
              "absolute inset-0 z-10 flex h-full w-full items-center justify-center gap-2 rounded-full bg-slate-100 text-lg font-bold text-black dark:bg-slate-900 dark:text-white",
              "hover:text-white group-hover:bg-ali",
            ],
            data &&
              data.currentUserLikes + cacheCount === 3 &&
              "bg-ali fill-ali text-white dark:bg-ali dark:fill-ali dark:text-white",
          )}
        >
          <Icons.heart
            className={cn(
              "h-5 w-5 animate-pulse",
              data && data.currentUserLikes + cacheCount === 1 && "text-white",
            )}
          />
        </span>
      </Button>
    </div>
  );
};
