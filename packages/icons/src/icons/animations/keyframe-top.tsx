import * as React from "react";

import type { DesignaliProps } from "../../types";

export const KeyframeTop = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
        ref={forwardedRef}
      >
        <line x1="2" y1="3.1" x2="22" y2="3.1" />
        <line x1="12" y1="3.1" x2="12" y2="7.05" />
        <rect
          x="9.23"
          y="14.35"
          width="5.8"
          height="5.8"
          rx="1.08"
          ry="1.08"
          transform="translate(-8.64 13.63) rotate(-45)"
        />
      </svg>
    );
  },
);

export default KeyframeTop;
