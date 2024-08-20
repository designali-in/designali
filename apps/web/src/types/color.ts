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
  iconSize: number;
  strokeWidth: number;
  iconOffsetX: number;
  iconOffsetY: number;
  icon?: "";
  customSvg?: string;
  fileName: string;
  selectedPresetIndex: number | null;
}
