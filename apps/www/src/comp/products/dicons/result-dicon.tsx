import type { DIconsSettingsType } from "@/src/types/color";
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
          fill={settings.iconFill}
          stroke={settings.strokeColor}
          alignmentBaseline="middle"
          stroke-width={settings.strokeWidth}
          stroke-linecap={settings.linecap}
          stroke-linejoin={settings.linejoin}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          {IconComponent ? (
            <IconComponent
              width={settings.iconSize}
              height={settings.iconSize}
              fill={settings.iconFill}
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
  },
);

ResultDIcon.displayName = "ResultDIcon";

export { ResultDIcon };
