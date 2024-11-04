"use client";

import React from "react";
import NextImage from "next/image";
import { cn } from "@designali/ui";

export type ImageProps = {
  imageClassName?: string;
  lazy?: boolean;
} & React.ComponentPropsWithoutRef<typeof NextImage>;

const Image = (props: ImageProps) => {
  const { alt, src, className, imageClassName, lazy = true, ...rest } = props;
  const [isLoading, setLoading] = React.useState(true);

  return (
    <div
      className={cn("overflow-hidden", isLoading && "animate-pulse", className)}
      data-testid="image-container"
    >
      <NextImage
        className={cn(
          "transition-[scale, filter] duration-100",
          isLoading && "scale-[1.02] blur-xl grayscale",
          imageClassName,
        )}
        src={src}
        alt={alt}
        loading={lazy ? "lazy" : undefined}
        quality={100}
        onLoad={() => setLoading(false)}
        {...rest}
      />
    </div>
  );
};
export default Image;
