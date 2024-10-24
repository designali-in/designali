import type { Style } from "@/lib/registry/styles";
import type { Theme } from "@/lib/registry/themes";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

interface Config {
  style: Style["name"];
  theme: Theme["name"];
  radius: number;
}

const configAtom = atomWithStorage<Config>("config", {
  style: "default",
  theme: "slate",
  radius: 0.5,
});

export function useConfig() {
  return useAtom(configAtom);
}
