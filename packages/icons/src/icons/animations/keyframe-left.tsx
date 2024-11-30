import * as React from "react";

import type { DesignaliProps } from "../../types";

export const KeyframeLeft = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <line x1="3.1" y1="22" x2="3.1" y2="2" />
        <line x1="3.1" y1="12" x2="7.05" y2="12" />
        <rect
          x="14.35"
          y="8.97"
          width="5.8"
          height="5.8"
          rx="1.08"
          ry="1.08"
          transform="translate(21.05 32.46) rotate(-135)"
        />
      </svg>
    );
  },
);

export default KeyframeLeft;
