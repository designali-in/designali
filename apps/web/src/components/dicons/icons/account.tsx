import type { DesignaliIcon } from "dicons";
import { Moon } from "dicons";

export type DIcon = DesignaliIcon;

export type ValidIcon = keyof typeof Account;

export const Account = {
  Copy: Moon,
};
