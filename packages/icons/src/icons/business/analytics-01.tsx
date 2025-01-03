import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Analytics01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect x="2" y="2" width="20" height="20" rx="4.33" ry="4.33" />
        <line x1="12" y1="7.06" x2="12" y2="17.06" />
        <line x1="7" y1="13.06" x2="7" y2="17.06" />
        <line x1="17" y1="11.06" x2="17" y2="17.06" />
      </svg>
    );
  },
);

export default Analytics01;
