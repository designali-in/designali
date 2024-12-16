import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AlertCircle = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8.37" x2="12" y2="12.02" />
        <circle cx="12" cy="15.48" r=".15" />
      </svg>
    );
  },
);

export default AlertCircle;
