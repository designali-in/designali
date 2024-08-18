import { SettingsType } from "@/src/types";

type PresetType = Pick<
  SettingsType,
  | "backgroundFillType"
  | "backgroundStartColor"
  | "backgroundEndColor"
  | "backgroundAngle"
  | "backgroundPosition"
  | "iconColor"
>;

export const presets: PresetType[] = [
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#8E2DE2",
    backgroundEndColor: "#4A00E0",
    backgroundAngle: 45,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#99F2C8",
    backgroundEndColor: "#1F4037",
    backgroundAngle: 45,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#F953C6",
    backgroundEndColor: "#B91D73",
    backgroundAngle: 45,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#91EAE4",
    backgroundEndColor: "#7F7FD5",
    backgroundAngle: 45,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#F5AF19",
    backgroundEndColor: "#F12711",
    backgroundAngle: 45,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#EAAFC8",
    backgroundEndColor: "#EC2F4B",
    backgroundAngle: 45,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#FF7DB4",
    backgroundEndColor: "#654EA3",
    backgroundAngle: 45,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#00B4DB",
    backgroundEndColor: "#003357",
    backgroundAngle: 45,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#A8C0FF",
    backgroundEndColor: "#3F2B96",
    backgroundAngle: 90,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#DD1818",
    backgroundEndColor: "#380202",
    backgroundAngle: 135,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#DECBA4",
    backgroundEndColor: "#3E5151",
    backgroundAngle: 45,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#FC466B",
    backgroundEndColor: "#3F5EFB",
    backgroundAngle: 180,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#CCCFE2",
    backgroundEndColor: "#25242B",
    backgroundAngle: 180,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#68AEFF",
    backgroundEndColor: "#003EB7",
    backgroundAngle: 180,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#C9D6FF",
    backgroundEndColor: "#596AA1",
    backgroundAngle: 180,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#5C5C5C",
    backgroundEndColor: "#0F1015",
    backgroundAngle: 180,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Radial",
    backgroundStartColor: "#695BF8",
    backgroundEndColor: "#131308",
    backgroundPosition: "50%,0%",
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Radial",
    backgroundStartColor: "#4d4d4d",
    backgroundEndColor: "#000000",
    backgroundPosition: "50%,0%",
    iconColor: "#e6e6e6",
  },
  {
    backgroundFillType: "Radial",
    backgroundStartColor: "#f5af19",
    backgroundEndColor: "#f12711",
    backgroundPosition: "50%,50%",
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Radial",
    backgroundStartColor: "#1D6E47",
    backgroundEndColor: "#041B11",
    backgroundPosition: "50%,0%",
    iconColor: "#DCEEDE",
  },
  {
    backgroundFillType: "Radial",
    backgroundStartColor: "#ffffff",
    backgroundEndColor: "#666666",
    backgroundPosition: "50%,100%",
    iconColor: "#232323",
  },
  {
    backgroundFillType: "Radial",
    backgroundStartColor: "#d9f1f8",
    backgroundEndColor: "#002069",
    backgroundPosition: "50%,100%",
    iconColor: "#e3efff",
  },
  {
    backgroundFillType: "Radial",
    backgroundStartColor: "#f95356",
    backgroundEndColor: "#7e0000",
    backgroundPosition: "50%,50%",
    iconColor: "#ffd5d5",
  },
  {
    backgroundFillType: "Radial",
    backgroundStartColor: "#ffbb00",
    backgroundEndColor: "#ffe74b",
    backgroundPosition: "50%,0%",
    iconColor: "#2a1a00",
  },
];
