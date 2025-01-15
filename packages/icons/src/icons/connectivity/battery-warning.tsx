import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BatteryWarning = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10,17h.01" />
        <path d="M10,7v6" />
        <path d="M14,7h2c1.1,0,2,.9,2,2v6c0,1.1-.9,2-2,2h-2" />
        <path d="M22,11v2" />
        <path d="M6,7h-2c-1.1,0-2,.9-2,2v6c0,1.1.9,2,2,2h2" />
      </svg>
    );
  },
);

export default BatteryWarning;
