import * as React from "react";

import type { DesignaliProps } from "../../types";

export const CandyCane = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z" />
        <path d="M17.75 7 15 2.1" />
        <path d="M10.9 4.8 13 9" />
        <path d="m7.9 9.7 2 4.4" />
        <path d="M4.9 14.7 7 18.9" />
      </svg>
    );
  },
);

export default CandyCane;
