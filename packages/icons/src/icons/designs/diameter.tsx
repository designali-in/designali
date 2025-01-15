import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Diameter = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="19" cy="19" r="2" />
        <circle cx="5" cy="5" r="2" />
        <path d="M6.48,3.66c4.6-3.05,10.8-1.79,13.85,2.81,2.22,3.35,2.22,7.7,0,11.04" />
        <path d="M6.41,6.41l11.17,11.17" />
        <path d="M3.66,6.48c-3.05,4.6-1.79,10.8,2.81,13.85,3.35,2.22,7.7,2.22,11.04,0" />
      </svg>
    );
  },
);

export default Diameter;
