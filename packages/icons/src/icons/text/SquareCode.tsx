import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SquareCode = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10 9.5 8 12l2 2.5" />
        <path d="m14 9.5 2 2.5-2 2.5" />
        <rect width="18" height="18" x="3" y="3" rx="2" />
      </svg>
    );
  },
);

export default SquareCode;
