import * as React from "react";

import type { DesignaliProps } from "../../types";

export const KeyframeDouble = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path
          fill="none"
          d="M14,4.5c.38-.33.7-.5,1.07-.5.7,0,1.22.59,2.27,1.78l2.57,2.92c1.39,1.58,2.09,2.37,2.09,3.3s-.7,1.72-2.09,3.3l-2.57,2.92c-1.05,1.19-1.57,1.78-2.27,1.78-.37,0-.69-.17-1.07-.5"
        />
        <rect
          x="3.7"
          y="6.82"
          width="10.37"
          height="10.37"
          rx="1.08"
          ry="1.08"
          transform="translate(-5.88 9.8) rotate(-45)"
        />
      </svg>
    );
  },
);

export default KeyframeDouble;
