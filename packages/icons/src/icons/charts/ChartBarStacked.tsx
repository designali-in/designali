import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ChartBarStacked = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M11 13v4" />
        <path d="M15 5v4" />
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <rect x="7" y="13" width="9" height="4" rx="1" />
        <rect x="7" y="5" width="12" height="4" rx="1" />
      </svg>
    );
  },
);

export default ChartBarStacked;
