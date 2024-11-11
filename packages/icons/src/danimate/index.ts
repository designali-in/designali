import { ArchiveIcon } from "./archive";
import { BellIcon } from "./bell";

interface IconListItem {
  name: string;
  icon: React.ElementType;
  keywords: string[];
}

export const ICON_LIST: IconListItem[] = [
  {
    name: "bell",
    icon: BellIcon,
    keywords: ["find", "scan", "magnifier", "magnifying glass"],
  },
  {
    name: "archive",
    icon: ArchiveIcon,
    keywords: [
      "trolley",
      "cart",
      "basket",
      "e-commerce",
      "store",
      "purchase",
      "products",
      "items",
      "ingredients",
    ],
  },
];
