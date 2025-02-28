import { FC } from "react";
import { DIcons } from "dicons";

type Props = {
  color?: string;
};

const Disabled: FC<Props> = () => {
  return (
    <div className="h-12 w-12 rounded-2xl border border-dashed bg-transparent p-1 md:h-28 md:w-28 lg:h-28 lg:w-28">
      <div className="flex h-full cursor-not-allowed flex-col items-center justify-center rounded-xl p-0">
        <DIcons.Palette strokeWidth={1} className="" />
      </div>
    </div>
  );
};
export { Disabled as InactiveColorBox };
