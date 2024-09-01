import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowUpLeft = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props}
        ref={forwardedRef}
      >
        <path d="M7 17V7h10" />
        <path d="M17 17 7 7" />
      </svg>
    );
  },
);

export default ArrowUpLeft;
