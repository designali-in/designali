import * as React from "react";

import type { DesignaliProps } from "../../types";

export const HouseSolarPanel = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M3.97,5.8l.6-1.4c.5-1.16.75-1.74,1.24-2.07s1.12-.33,2.37-.33h7.65c1.25,0,1.87,0,2.37.33.49.33.74.91,1.24,2.07l.6,1.4c.82,1.9,1.23,2.84.79,3.52-.44.68-1.46.68-3.49.68H6.67c-2.04,0-3.06,0-3.49-.68-.44-.68-.03-1.63.79-3.52Z" />
        <path d="M4.5,10v5c0,1.89,0,2.83.59,3.41.47.47,1.17.56,2.41.58M19.5,10v5c0,1.89,0,2.83-.59,3.41-.47.47-1.17.56-2.41.58" />
        <path d="M13,14l-2.59,3.07c-.32.41-.48.62-.38.77.1.16.38.16.95.16h2.03c.57,0,.86,0,.95.16.1.16-.06.36-.38.77l-2.61,3.07" />
        <path d="M10,2l-1,8M14,2l1,8" />
        <path d="M4,6h16" />
      </svg>
    );
  },
);

export default HouseSolarPanel;
