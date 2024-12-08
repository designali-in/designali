import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Squirrel = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M18,6c-2.21,0-4,1.79-4,4-3.87,0-7,3.13-7,7,0-5,4-5,4-10.5,0-2.49-2.01-4.5-4.5-4.5S2,4.01,2,6.5c0,1.38,1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5c0,3.5-4,4.5-4,10.5,0,2.8,2.2,5,5,5h10" />
        <path d="M16,20c0-1.66,1.34-3,3-3h1c1.1,0,2-.9,2-2v-2c0-2.21-1.79-4-4-4v-5" />
        <path d="M18,13h.01" />
        <path d="M15.24,22c1.1-1.23,1-3.13-.24-4.24-.54-.48-1.24-.76-1.96-.76" />
      </svg>
    );
  },
);

export default Squirrel;
