import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowRightToLine = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M17 12H3" />
        <path d="m11 18 6-6-6-6" />
        <path d="M21 5v14" />
      </svg>
    );
  },
);

export default ArrowRightToLine;
