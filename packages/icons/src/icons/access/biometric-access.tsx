import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BiometricAccess = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M8,18v-1.5c0-2.21,1.79-4,4-4s4,1.79,4,4v1.5" />
        <path d="M10.5,19.5v-3c0-.83.67-1.5,1.5-1.5s1.5.67,1.5,1.5M13.5,19.5v-1" />
        <g>
          <rect x="4" y="10" width="16" height="12" rx="2" ry="2" />
          <path d="M8,10v-4c0-2.21,1.79-4,4-4s4,1.79,4,4v4" />
        </g>
      </svg>
    );
  },
);

export default BiometricAccess;
