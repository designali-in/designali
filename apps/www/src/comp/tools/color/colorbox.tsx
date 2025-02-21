import { FC } from "react";

type Props = {
  color: string;
  handleOnCopyToClipboard: (color: string) => void;
};

const ColorBox: FC<Props> = ({ color, handleOnCopyToClipboard }) => {
  return (
    <div
      className="h-12 w-12 rounded-2xl border border-dashed bg-transparent p-1  md:h-28 md:w-28 lg:h-28 lg:w-28"
      onClick={(): void => {
        handleOnCopyToClipboard(color);
      }}
    >
      <div
        className="flex h-full transform cursor-pointer flex-col justify-end rounded-lg p-0 transition-transform"
        style={{
          backgroundColor: color,
        }}
      >
        <p className="absolute -bottom-10 hidden w-full rounded-none rounded-b-lg p-2 text-xs md:block md:text-sm">
          {color}
        </p>
      </div>
    </div>
  );
};

export { ColorBox as ActiveColorBox };
