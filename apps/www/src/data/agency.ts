import type { ComboBoxItemType, ZodCategoryType } from "@/types";

export const catalogs: ComboBoxItemType[] = [
  {
    value: "shōnen",
    label: "Shōnen",
  },
  {
    value: "fiction",
    label: "Fiction",
  },
  {
    value: "comedy",
    label: "Comedy",
  },
];

export const watchlists: { value: ZodCategoryType; label: string }[] = [
  {
    value: "pending",
    label: "Pending",
  },
  {
    value: "watching",
    label: "Watching",
  },
  {
    value: "finished",
    label: "Finished",
  },
];
