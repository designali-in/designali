import type { SettingsType } from "@/src/types";
import React from "react";

interface PropTypes {
  settings: SettingsType;
  size?: number;
  strokeWidth: number;
  isPreview?: boolean;
  // TODO: fix icon type?
  IconComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const ResultDIcon = React.forwardRef<SVGSVGElement, PropTypes>(
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

ResultDIcon.displayName = "ResultDIcon";

export default ResultDIcon;
