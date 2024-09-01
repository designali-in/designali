import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowUpFromDot = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="m5 9 7-7 7 7" />
        <path d="M12 16V2" />
        <circle cx="12" cy="21" r="1" />
      </svg>
    );
  },
);

export default ArrowUpFromDot;
