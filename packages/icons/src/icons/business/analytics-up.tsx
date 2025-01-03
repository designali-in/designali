import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AnalyticsUp = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <line x1="12" y1="12" x2="12" y2="17.06" />
        <line x1="17" y1="8.96" x2="17" y2="17.06" />
        <line x1="7" y1="14.23" x2="7" y2="17.06" />
        <path d="M6.86,7.89c3.91,1.09,7.94.28,11.14-2.99M7.47,9.89l-1.38-1.89c-.16-.22-.1-.5.15-.62l2.07-1.02" />
      </svg>
    );
  },
);

export default AnalyticsUp;
