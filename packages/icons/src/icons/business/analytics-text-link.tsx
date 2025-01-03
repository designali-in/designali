import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AnalyticsTextLink = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M6,20c1.07-1.95,2.52-6.98,5.31-6.98,1.92,0,2.42,2.45,4.31,2.45,3.24,0,2.77-5.47,6.39-5.47"/>
  <path  d="M21.41,21.41h-13.13c-3.14,0-5.69-2.55-5.69-5.69V2.59"/>
  <line  x1="7.32" y1="7.06" x2="11.32" y2="7.06"/>
  <line  x1="7.32" y1="4.13" x2="9.32" y2="4.13"/>
</svg>
    );
  },
);

export default AnalyticsTextLink;
