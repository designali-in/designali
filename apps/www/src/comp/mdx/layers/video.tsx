import React from "react";
import { cn } from "@designali/ui";

type VideoProps = {
  src: string;
  width: number;
  height: number;
} & React.ComponentPropsWithoutRef<"video">;

const Video = (props: VideoProps) => {
  const { src, width, height, controls = true, className, ...rest } = props;

  return (
    <>
      <video
        className={cn(
          "object-fit my-4 h-full w-full rounded-2xl object-cover  shadow-lg md:w-[360px] lg:w-[630px] ",
          className,
        )}
        loop
        muted
        autoPlay
        src={src}
        controls={controls}
        width={width}
        height={height}
        {...rest}
      />
    </>
  );
};

export default Video;
