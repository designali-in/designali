import type { DesignaliIcon } from "dicons";
import { AlignLeft, Copy, Download, Plus } from "dicons";

export type DIcon = DesignaliIcon;

export type ValidIcon = keyof typeof Account;

export const Account = {
  Copy: Copy,
  Plus: Plus,
};
