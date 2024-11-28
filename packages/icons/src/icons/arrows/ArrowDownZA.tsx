import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowDownZA = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
        <path d="M7 4v16" />
        <path d="M15 4h5l-5 6h5" />
        <path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" />
        <path d="M20 18h-5" />
      </svg>
    );
  },
);

export default ArrowDownZA;
