import * as React from "react";

import type { DesignaliProps } from "../types";

export const AArrowUp = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M3.5 13h6" />
        <path d="m2 16 4.5-9 4.5 9" />
        <path d="M18 16V7" />
        <path d="m14 11 4-4 4 4" />
      </svg>
    );
  },
);

export default AArrowUp;
