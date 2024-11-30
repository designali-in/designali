import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BounceLeft = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
          d="M8.77,9.05c2.4,2.48,4.46,8.66,5.18,11.92.15.66.22.99.37,1.01.15.02.31-.29.62-.93,1.5-3.01,4.59-5.67,7.06-3.4"
        />
        <circle cx="4.4" cy="4.42" r="2.4" />
      </svg>
    );
  },
);

export default BounceLeft;
