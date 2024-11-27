export interface DIconsSettingsType {
  strokeColor: string;
  linecap: "inherit" | "butt" | "round" | "square";
  linejoin: "inherit" | "round" | "miter" | "bevel";
  iconFill: string;
  iconSize: number;
  strokeWidth: number;
  icon?: "";
  customSvg?: string;
}

export interface SettingsType {
  backgroundFillType: string;
  backgroundOpacity: number;
  backgroundStartColor: string;
  backgroundEndColor: string;
  backgroundAngle?: number;
  backgroundPosition?: string;
  backgroundSpread: number;
  backgroundRadius: number;
  backgroundStrokeSize: number;
  backgroundStrokeColor: string;
  backgroundStrokeOpacity: number;
  backgroundRadialGlare: boolean;
  backgroundNoiseTexture: boolean;
  backgroundNoiseTextureOpacity: number;
  iconColor: string;
  linecap: string;
  linejoin: string;
  iconFill: string;
  iconSize: number;
  strokeWidth: number;
  iconOffsetX: number;
  iconOffsetY: number;
  icon?: "";
  customSvg?: string;
  fileName: string;
  selectedPresetIndex: number | null;
}
