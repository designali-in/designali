export const styles = [
  {
    name: "default",
    label: "Designali",
  },
] as const;

export type Style = (typeof styles)[number];
