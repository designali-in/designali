import * as React from "react";

import type { DesignaliProps } from "../../types";

export const KeyframeMultiple = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
          d="M13,19l3.51-4.4c.99-1.24,1.49-1.86,1.49-2.6s-.5-1.36-1.49-2.6l-3.51-4.4"
        />
        <path
          fill="none"
          d="M17,19l3.51-4.4c.99-1.24,1.49-1.86,1.49-2.6s-.5-1.36-1.49-2.6l-3.51-4.4"
        />
        <rect
          x="3.31"
          y="7.77"
          width="8.45"
          height="8.45"
          rx="1.08"
          ry="1.08"
          transform="translate(-6.28 8.84) rotate(-45)"
        />
      </svg>
    );
  },
);

export default KeyframeMultiple;
