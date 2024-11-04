import { useMounted } from "@/hooks/use-mounted";
import { ColorFormat } from "@/lib/colors";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

type Config = {
  format: ColorFormat;
};

const colorsAtom = atomWithStorage<Config>("colors", {
  format: "hsl",
});

export function useColors() {
  const [colors, setColors] = useAtom(colorsAtom);
  const mounted = useMounted();

  return {
    isLoading: !mounted,
    format: colors.format,
    setFormat: (format: ColorFormat) => setColors({ format }),
  };
}
