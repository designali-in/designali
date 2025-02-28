// @ts-nocheck
import type { DIconsSettingsType } from "@/types/color";
import React from "react";

interface DPropTypes {
  settings: DIconsSettingsType;
  size?: number;
  IconComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const ResultDIcon = React.forwardRef<SVGSVGElement, DPropTypes>(
  ({ settings, size, IconComponent }, svgRef) => {
    return (
      <div>
        <svg
          ref={svgRef}
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          stroke={settings.strokeColor}
          strokeLinecap={settings.linecap}
          strokeLinejoin={settings.linejoin}
          alignmentBaseline="middle"
          strokeWidth={settings.strokeWidth}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          {IconComponent ? (
            <IconComponent
              width={settings.iconSize}
              height={settings.iconSize}
              strokeLinecap={settings.linecap}
              strokeMiterlimit={2}
              strokeLinejoin={settings.linejoin}
              x={(size - settings.iconSize) / 2 + 0}
              y={(size - settings.iconSize) / 2 + 0}
              alignmentBaseline="middle"
              stroke={settings.strokeColor}
              strokeWidth={settings.strokeWidth}
            />
          ) : null}
        </svg>
      </div>
    );
  }
);

const FillResultDIcon = React.forwardRef<SVGSVGElement, DPropTypes>(
  ({ settings, size, IconComponent }, svgRef) => {
    return (
      <div>
        <svg
          ref={svgRef}
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          fill={settings.iconFill}
          strokeLinecap={settings.linecap}
          strokeLinejoin={settings.linejoin}
          alignmentBaseline="middle"
          stroke={settings.strokeColor}
          strokeWidth={settings.strokeWidth}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          {IconComponent ? (
            <IconComponent
              width={settings.iconSize}
              height={settings.iconSize}
              fill={settings.iconFill}
              stroke={settings.strokeColor}
              strokeLinecap={settings.linecap}
              strokeLinejoin={settings.linejoin}
              x={(size - settings.iconSize) / 2 + 0}
              y={(size - settings.iconSize) / 2 + 0}
              alignmentBaseline="middle"
              strokeWidth={settings.strokeWidth}
            />
          ) : null}
        </svg>
      </div>
    );
  }
);

const SharpResultDIcon = React.forwardRef<SVGSVGElement, DPropTypes>(
  ({ settings, size, IconComponent }, svgRef) => {
    return (
      <div>
        <svg
          ref={svgRef}
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          stroke={settings.strokeColor}
          strokeLinecap={"inherit"}
          strokeLinejoin={"miter"}
          alignmentBaseline="middle"
          strokeWidth={settings.strokeWidth}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          {IconComponent ? (
            <IconComponent
              width={settings.iconSize}
              height={settings.iconSize}
              strokeLinecap={"inherit"}
              strokeLinejoin={"miter"}
              x={(size - settings.iconSize) / 2 - 0}
              y={(size - settings.iconSize) / 2 - 0}
              alignmentBaseline="middle"
              stroke={settings.strokeColor}
              strokeWidth={settings.strokeWidth}
            />
          ) : null}
        </svg>
      </div>
    );
  }
);

const FillSharpResultDIcon = React.forwardRef<SVGSVGElement, DPropTypes>(
  ({ settings, size, IconComponent }, svgRef) => {
    return (
      <div>
        <svg
          ref={svgRef}
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          fill={settings.iconFill}
          stroke={settings.strokeColor}
          strokeLinecap={"inherit"}
          strokeLinejoin={"miter"}
          alignmentBaseline="middle"
          strokeWidth={settings.strokeWidth}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          {IconComponent ? (
            <IconComponent
              width={settings.iconSize}
              height={settings.iconSize}
              fill={settings.iconFill}
              strokeLinecap={"inherit"}
              strokeLinejoin={"miter"}
              x={(size - settings.iconSize) / 2 + 0}
              y={(size - settings.iconSize) / 2 + 0}
              alignmentBaseline="middle"
              stroke={settings.strokeColor}
              strokeWidth={settings.strokeWidth}
            />
          ) : null}
        </svg>
      </div>
    );
  }
);

FillSharpResultDIcon.displayName = "FillSharpResultDIcon";
SharpResultDIcon.displayName = "SharpResultDIcon";
ResultDIcon.displayName = "ResultDIcon";
FillResultDIcon.displayName = "FillResultDIcon";

export { ResultDIcon, FillResultDIcon, SharpResultDIcon, FillSharpResultDIcon };
