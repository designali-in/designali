import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BowTie = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10,9.5c-1-1-3.98-3.72-5.34-3.49-3.55.61-3.55,11.36,0,11.98,1.36.23,4.34-2.49,5.34-3.49" />
        <path d="M14,9.5c1-1,3.98-3.72,5.34-3.49,3.55.61,3.55,11.36,0,11.98-1.36.23-4.34-2.49-5.34-3.49" />
        <line x1="7.76" y1="11.95" x2="9.5" y2="11.95" />
        <line x1="14.5" y1="11.95" x2="16.24" y2="11.95" />
        <rect x="9.5" y="8.71" width="5" height="6.57" rx="2.37" ry="2.37" />
      </svg>
    );
  },
);

export default BowTie;
