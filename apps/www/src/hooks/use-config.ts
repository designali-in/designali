import { BaseColor } from "@/registry/registry-base-colors";
import { Style } from "@/registry/registry-styles";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

type Config = {
  style: Style["name"];
  theme: BaseColor["name"];
  radius: number;
};

const configAtom = atomWithStorage<Config>("config", {
  style: "default",
  theme: "slate",
  radius: 1,
});

export function useConfig() {
  return useAtom(configAtom);
}
