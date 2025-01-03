import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AnalyticsDown = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({  ...props }, forwardedRef) => {
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
        <path  d="M6,4.89c3.2,3.27,7.23,4.08,11.14,2.99M15.69,6.36l2.07,1.02c.25.12.31.4.15.62l-1.38,1.89"/>
  <rect  x="2" y="2" width="20" height="20" rx="4.33" ry="4.33"/>
  <line  x1="12" y1="12" x2="12" y2="17.06"/>
  <line  x1="7" y1="8.96" x2="7" y2="17.06"/>
  <line  x1="17" y1="14.23" x2="17" y2="17.06"/>
</svg>
    );
  },
);

export default AnalyticsDown;
