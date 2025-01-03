import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Analytics02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M22,8.54v9.13c0,2.39-1.94,4.33-4.33,4.33H6.33c-2.39,0-4.33-1.94-4.33-4.33V6.33c0-2.39,1.94-4.33,4.33-4.33h9.14"/>
  <circle  cx="19.89" cy="4.11" r="2.11"/>
  <line  x1="12" y1="7.06" x2="12" y2="17.06"/>
  <line  x1="7" y1="13.06" x2="7" y2="17.06"/>
  <line  x1="17" y1="11.06" x2="17" y2="17.06"/>
</svg>
    );
  },
);

export default Analytics02;
