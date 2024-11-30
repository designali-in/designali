import * as React from "react";

import type { DesignaliProps } from "../../types";

export const KeyframeBottom = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect
          x="9.1"
          y="9.1"
          width="5.8"
          height="5.8"
          rx="1.08"
          ry="1.08"
          transform="translate(28.97 12) rotate(135)"
        />
        <line x1="12" y1="4.97" x2="12" y2="2" />
        <line x1="12" y1="22" x2="12" y2="19.03" />
      </svg>
    );
  },
);

export default KeyframeBottom;
