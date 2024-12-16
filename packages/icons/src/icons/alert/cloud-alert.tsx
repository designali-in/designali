import * as React from "react";

import type { DesignaliProps } from "../../types";

export const CloudAlert = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
          d="M17,18h.5c2.49,0,4.5-2.01,4.5-4.5s-2.01-4.5-4.5-4.5h-1.79c-1.1-3.7-5-5.81-8.71-4.71-3.7,1.1-5.81,5-4.71,8.71.67,2.26,2.44,4.03,4.71,4.71"
        />

        <line x1="12" y1="12.83" x2="12" y2="16.49" />
        <circle cx="12" cy="19.95" r=".15" />
      </svg>
    );
  },
);

export default CloudAlert;
