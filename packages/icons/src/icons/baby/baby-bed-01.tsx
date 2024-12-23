import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BabyBed01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
         <path  d="M20,20V6c0-1.1.9-2,2-2M4,20V6c0-1.1-.9-2-2-2"/>
  <line  x1="4.22" y1="17.56" x2="19.78" y2="17.56"/>
  <line  x1="4.22" y1="13.68" x2="20" y2="13.68"/>
  <line  x1="4" y1="6" x2="20" y2="6"/>
  <line  x1="8" y1="6" x2="8" y2="13.68"/>
  <line  x1="12" y1="6" x2="12" y2="13.68"/>
  <line  x1="16" y1="6" x2="16" y2="13.68"/>
</svg>
    );
  },
);

export default BabyBed01;
