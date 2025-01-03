import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BellElectric = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M18.8,4c.76,1.46,1.18,3.2,1.2,5" />
        <path d="M9,9h.01" />
        <circle cx="9" cy="9" r="7" />
        <rect x="4" y="16" width="10" height="6" rx="2" ry="2" />
        <path d="M14,19c3,0,4.6-1.6,4.6-1.6" />
        <circle cx="20" cy="16" r="2" />
      </svg>
    );
  },
);

export default BellElectric;
