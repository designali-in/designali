import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ChartColumnBig = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <rect x="15" y="5" width="4" height="12" rx="1" />
        <rect x="7" y="8" width="4" height="9" rx="1" />
      </svg>
    );
  },
);

export default ChartColumnBig;
