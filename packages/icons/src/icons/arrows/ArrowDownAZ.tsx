import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowDownAZ = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="m3 16 4 4 4-4" />
        <path d="M7 20V4" />
        <path d="M20 8h-5" />
        <path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
        <path d="M15 14h5l-5 6h5" />
      </svg>
    );
  },
);

export default ArrowDownAZ;
