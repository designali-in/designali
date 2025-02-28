import type { ComboBoxItemType, ZodCategoryType } from "@/types/global";

export const catalogs: ComboBoxItemType[] = [
  {
    value: "gradient",
    label: "Gradient",
  },
  {
    value: "texture",
    label: "Texture",
  },
  {
    value: "mockup",
    label: "Mockup",
  },
  {
    value: "abstract",
    label: "Abstract",
  },
  {
    value: "shapes",
    label: "Shapes",
  },
  {
    value: "icon",
    label: "Icon",
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
