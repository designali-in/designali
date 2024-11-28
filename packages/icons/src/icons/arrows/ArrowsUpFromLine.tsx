import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowsUpFromLine = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="m4 6 3-3 3 3" />
        <path d="M7 17V3" />
        <path d="m14 6 3-3 3 3" />
        <path d="M17 17V3" />
        <path d="M4 21h16" />
      </svg>
    );
  },
);

export default ArrowsUpFromLine;
