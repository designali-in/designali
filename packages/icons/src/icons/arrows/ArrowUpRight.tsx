import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowUpRight = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M7 7h10v10" />
        <path d="M7 17 17 7" />
      </svg>
    );
  },
);

export default ArrowUpRight;
