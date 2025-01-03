import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BriefcaseDollar = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      <rect  x="2" y="7" width="20" height="14" rx="2" ry="2"/>
  <path  d="M16,7v-2c0-1.1-.9-2-2-2h-4c-1.1,0-2,.9-2,2v2"/>
  <g>
    <line  x1="12" y1="9.82" x2="12" y2="18.18"/>
    <path  d="M14.09,11.07h-3.14c-.81,0-1.46.66-1.46,1.46s.66,1.46,1.46,1.46h2.09c.81,0,1.46.66,1.46,1.46s-.66,1.46-1.46,1.46h-3.55"/>
  </g>
  <line  x1="2" y1="12" x2="5.1" y2="12"/>
  <line  x1="2.1" y1="16.56" x2="5.19" y2="16.56"/>
  <line  x1="18.9" y1="12" x2="22" y2="12"/>
  <line  x1="18.9" y1="16.56" x2="22" y2="16.56"/>
</svg>
    );
  },
);

export default BriefcaseDollar;
