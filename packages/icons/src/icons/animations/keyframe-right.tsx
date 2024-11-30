import * as React from "react";

import type { DesignaliProps } from "../../types";

export const KeyframeRight = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <line x1="22" y1="1.86" x2="22" y2="21.86" />
        <line x1="22" y1="11.86" x2="18.04" y2="11.86" />
        <rect
          x="2.76"
          y="9.1"
          width="5.8"
          height="5.8"
          rx="1.08"
          ry="1.08"
          transform="translate(-6.83 7.52) rotate(-45)"
        />
      </svg>
    );
  },
);

export default KeyframeRight;
