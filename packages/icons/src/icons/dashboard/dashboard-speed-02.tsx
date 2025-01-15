import * as React from "react";

import type { DesignaliProps } from "../../types";

export const DashboardSpeed02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2.01,12C2.01,6.48,6.48,2,12,2s9.99,4.47,9.99,9.99" />
        <circle cx="12" cy="17.69" r="2.51" />
        <line x1="12" y1="10.57" x2="12" y2="15.18" />
      </svg>
    );
  },
);

export default DashboardSpeed02;
