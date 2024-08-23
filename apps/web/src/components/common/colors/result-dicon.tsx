import type { SettingsType } from "@/src/types";
import React, { useId } from "react";

interface DPropTypes {
  settings: SettingsType;
  size?: number;
  iconFill: string;
  strokeWidth: number;
  isPreview?: boolean;
  // TODO: fix icon type?
  IconComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const ResultDIcon = React.forwardRef<SVGSVGElement, DPropTypes>(
  ({ settings, size, isPreview, IconComponent }, svgRef) => {
    const strokeWidth = isPreview ? 1 : settings.strokeWidth;
    const iconColor = isPreview ? "currentColor" : settings.iconColor;

    return (
      <div>
        <svg
          ref={svgRef}
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          {IconComponent ? (
            <IconComponent
              width={settings.iconSize}
              fill={settings.iconFill}
              height={settings.iconSize}
              x={(size - settings.iconSize) / 2 + +settings.iconOffsetX}
              y={(size - settings.iconSize) / 2 + +settings.iconOffsetY}
              style={{ color: iconColor }}
              alignmentBaseline="middle"
              strokeWidth={strokeWidth}
            />
          ) : null}
        </svg>
      </div>
    );
  },
);

interface PropTypes {
  settings: SettingsType;
  size?: number;
  isPreview?: boolean;
  iconstrokeWidth: number;
  // TODO: fix icon type?
  IconComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const ResultIcon = React.forwardRef<SVGSVGElement, PropTypes>(
  ({ settings, size, isPreview, IconComponent }, svgRef) => {
    const iconstrokeWidth = isPreview ? 1 : settings.strokeWidth;
    const strokeSize = isPreview ? 0 : settings.backgroundStrokeSize;
    const strokeWidth = isNaN(parseInt(strokeSize.toString()))
      ? 0
      : parseInt(strokeSize.toString());

    const rectId = useId().replace(/:/g, "");
    const gradientId = useId().replace(/:/g, "");
    const radialGlareGradientId = useId().replace(/:/g, "");
    const gradientX = settings.backgroundPosition.split(",")[0];
    const gradientY = settings.backgroundPosition.split(",")[1];

    return (
      <div>
        <svg
          ref={svgRef}
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect
            id={rectId}
            width={size - strokeSize}
            height={size - strokeSize}
            x={strokeSize / 2}
            y={strokeSize / 2}
            rx={settings.backgroundRadius}
            fill={
              settings.backgroundFillType === "Solid"
                ? settings.backgroundStartColor
                : `url(#${gradientId})`
            }
            opacity={`${settings.backgroundOpacity}%`}
            stroke={settings.backgroundStrokeColor}
            strokeWidth={strokeWidth}
            strokeOpacity={`${settings.backgroundStrokeOpacity}%`}
            paintOrder="stroke"
          />

          {settings.backgroundRadialGlare ? (
            <rect
              width={size - strokeSize}
              height={size - strokeSize}
              x={strokeSize / 2}
              y={strokeSize / 2}
              fill={`url(#${radialGlareGradientId})`}
              rx={settings.backgroundRadius}
              style={{ mixBlendMode: "overlay" }}
            />
          ) : null}

          {settings.backgroundNoiseTexture && !isPreview ? (
            <image
              href={"/assets/noise.inline.png"}
              width={size - strokeSize}
              height={size - strokeSize}
              x={strokeSize / 2}
              y={strokeSize / 2}
              clipPath="url(#clip)"
              opacity={`${settings.backgroundNoiseTextureOpacity}%`}
            />
          ) : null}
          <clipPath id="clip">
            <use xlinkHref={`#${rectId}`} />
          </clipPath>

          <defs>
            {settings.backgroundFillType === "Radial" ? (
              <radialGradient
                id={gradientId}
                cx="50%"
                cy="50%"
                r="100%"
                fx={gradientX}
                fy={gradientY}
                gradientUnits="objectBoundingBox"
              >
                <stop stopColor={settings.backgroundStartColor} />
                <stop
                  offset={settings.backgroundSpread / 100}
                  stopColor={settings.backgroundEndColor}
                />
              </radialGradient>
            ) : (
              <linearGradient
                id={gradientId}
                gradientUnits="userSpaceOnUse"
                gradientTransform={`rotate(${settings.backgroundAngle})`}
                style={{ transformOrigin: "center" }}
              >
                <stop stopColor={settings.backgroundStartColor} />
                <stop offset="1" stopColor={settings.backgroundEndColor} />
              </linearGradient>
            )}
            <radialGradient
              id={radialGlareGradientId}
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform={`translate(${size / 2}) rotate(90) scale(${size})`}
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>

          {IconComponent ? (
            <IconComponent
              width={settings.iconSize}
              height={settings.iconSize}
              x={(size - settings.iconSize) / 2 + +settings.iconOffsetX}
              y={(size - settings.iconSize) / 2 + +settings.iconOffsetY}
              style={{ color: settings.iconColor }}
              alignmentBaseline="middle"
              strokeWidth={iconstrokeWidth}
            />
          ) : null}
        </svg>
      </div>
    );
  },
);

ResultIcon.displayName = "ResultIcon";
ResultDIcon.displayName = "ResultDIcon";

export { ResultDIcon, ResultIcon };
