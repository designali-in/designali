import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Rat = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M17.04,5c0-1.7-1.3-3-3-3s-3,1.3-3,3c0,.8.3,1.5.8,2h-.8c-3.9,0-7,3.1-7,7,0,2.2,1.8,4,4,4" />
        <path d="M16.84,3.9c.3-.3.6-.5,1-.7,1.5-.6,3.3.1,3.9,1.6.6,1.5-.1,3.3-1.6,3.9l1.6,2.8c.2.3.2.7.2,1-.2.8-.9,1.2-1.7,1.1,0,0-1.6-.3-2.7-.6h-.5c-1.7,0-3,1.3-3,3" />
        <path d="M13.24,18c1.1-1.23,1-3.13-.24-4.24-.54-.48-1.24-.76-1.96-.76" />
        <path d="M13.04,22H4.04c-1.1,0-2-.9-2-2s.9-2,2-2h12" />
        <path d="M16.04,9h.01" />
      </svg>
    );
  },
);

export default Rat;
