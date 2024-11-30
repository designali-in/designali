import * as React from "react";

import type { DesignaliProps } from "../../types";

export const KeyframeAdd = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <line x1="22" y1="4.85" x2="16" y2="4.85" />
        <line x1="19" y1="8" x2="19" y2="2" />
        <rect
          x="3.8"
          y="9.35"
          width="10.82"
          height="10.82"
          rx="1.08"
          ry="1.08"
          transform="translate(-7.74 10.83) rotate(-45)"
        />
      </svg>
    );
  },
);

export default KeyframeAdd;
