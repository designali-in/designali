import React from "react";

import type { DesignaliIcon, DesignaliProps } from "./types";
import {
  Accessibility,
  Anvil,
  Baby,
  BadgeHelp,
  BadgeInfo,
  BrickWall,
  Building,
  Building2,
  Castle,
  Church,
  CircleHelp,
  Contrast,
  Cuboid,
  Dam,
  Ear,
  EarOff,
  Eclipse,
  Eye,
  EyeOff,
  Factory,
  Fence,
  Glasses,
  GraduationCap,
  Hand,
  Hospital,
  Hotel,
  House,
  HousePlug,
  HousePlus,
  Info,
  Landmark,
  LifeBuoy,
  Moon,
  MoonStar,
  PersonStanding,
  ScanEye,
  ScanSearch,
  School,
  Speech,
  Store,
  Sun,
  SunDim,
  SunMedium,
  SunMoon,
  Theater,
  University,
  UtilityPole,
  Warehouse,
  ZoomIn,
  ZoomOut,
} from "./icons";

export type DIcon = DesignaliIcon;

export type ValidIcon = keyof typeof DIcons;

export const DIcons = {
  Accessibility: Accessibility,
  Baby: Baby,
  BadgeHelp: BadgeHelp,
  BadgeInfo: BadgeInfo,
  CircleHelp: CircleHelp,
  Contrast: Contrast,
  Ear: Ear,
  EarOff: EarOff,
  Eclipse: Eclipse,
  Eye: Eye,
  EyeOff: EyeOff,
  Glasses: Glasses,
  Hand: Hand,
  Info: Info,
  LifeBuoy: LifeBuoy,
  Moon: Moon,
  MoonStar: MoonStar,
  PersonStanding: PersonStanding,
  ScanEye: ScanEye,
  ScanSearch: ScanSearch,
  Speech: Speech,
  Sun: Sun,
  SunDim: SunDim,
  SunMedium: SunMedium,
  SunMoon: SunMoon,
  ZoomIn: ZoomIn,
  ZoomOut: ZoomOut,

  Anvil: Anvil,
  Brickwall: BrickWall,
  Building: Building,
  Bulding2: Building2,
  Castle: Castle,
  Church: Church,
  Cuboid: Cuboid,
  Dam: Dam,
  Factory: Factory,
  Fence: Fence,
  Graduation: GraduationCap,
  Hospital: Hospital,
  Hotel: Hotel,
  House: House,
  HousePlus: HousePlus,
  HousePlug: HousePlug,
  Landmark: Landmark,
  School: School,
  Store: Store,
  Theater: Theater,
  University: University,
  UtilityPole: UtilityPole,
  Warehouse: Warehouse,

  heart: ({ ...props }: DesignaliProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="heart"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 205.18 156.34"
      {...props}
    >
      <path
        fill="currentColor"
        d="M102.38,33.66c3.14-4.85,5.82-9.75,9.22-14.1,7.83-10.01,18.16-16.19,30.73-18.32,12.49-2.12,24.76-1.29,36.21,4.51,13.93,7.06,22.26,18.56,25.34,33.85,1.9,9.41,1.69,18.82-.42,28.18-2.51,11.12-8.64,19.81-17.73,26.55-8.89,6.59-18.89,11.1-28.91,15.58-10.02,4.47-19.96,9.09-29.11,15.24-11.03,7.42-19.98,16.48-24.22,29.46-.15,.47-.39,.91-.75,1.74-.56-1.16-1.09-2.03-1.41-2.97-4.17-12.37-12.98-20.86-23.41-27.98-10.7-7.31-22.46-12.53-34.3-17.65-9.47-4.09-18.57-8.88-26.76-15.31C7.56,85.11,2.78,75.33,.98,63.98c-1.6-10.1-1.38-20.19,1.8-30.06C7.47,19.38,16.95,9.11,31.15,3.8c13.86-5.18,28.06-5.05,41.92,.32,12.14,4.7,20.75,13.52,26.93,24.82,.87,1.59,1.64,3.23,2.39,4.72Z"
      ></path>
    </svg>
  ),
};
