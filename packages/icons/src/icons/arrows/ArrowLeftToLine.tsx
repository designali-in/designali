import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowLeftToLine = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M3 19V5" />
        <path d="m13 6-6 6 6 6" />
        <path d="M7 12h14" />
      </svg>
    );
  },
);

export default ArrowLeftToLine;
