export const styles = [
  {
    name: "new-york",
    label: "Designali",
  },
  {
    name: "default",
    label: "Default",
  },
] as const;

export type Style = (typeof styles)[number];
