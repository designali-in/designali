import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowUp01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="m3 8 4-4 4 4" />
        <path d="M7 4v16" />
        <rect x="15" y="4" width="4" height="6" ry="2" />
        <path d="M17 20v-6h-2" />
        <path d="M15 20h4" />
      </svg>
    );
  },
);

export default ArrowUp01;
