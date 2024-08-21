import type { DesignaliIcon } from "dicons";
import {
  AlignLeft,
  Circle,
  Copy,
  Download,
  Plus,
  Search,
  Shuffle,
} from "dicons";

export type DIcon = DesignaliIcon;

export type ValidIcon = keyof typeof Accessibility;

export const Accessibility = {
  Copy: Copy,
  Plus: Plus,
  Download: Download,
  Circle: Circle,
  Shuffle: Shuffle,
  Search: Search,
  AlignLeft: AlignLeft,
};
