import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SprayCan = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M2.54,2.01h.01"/>
  <path  d="M6.74,4.11h.01"/>
  <path  d="M10.95,6.22h.01"/>
  <path  d="M2.54,6.22h.01"/>
  <path  d="M6.74,8.32h.01"/>
  <path  d="M2.54,10.42h.01"/>
  <rect  x="15.15" y="4.11" width="4.21" height="4.21"/>
  <path  d="M19.36,8.32l2.1,2.1v10.52c0,.63-.42,1.05-1.05,1.05h-6.31c-.63,0-1.05-.42-1.05-1.05v-10.52l2.1-2.1"/>
  <path  d="M13.05,13.58l8.41-2.1"/>
  <path  d="M13.05,18.84l8.41-2.1"/>
</svg>
    );
  },
);

export default SprayCan;
