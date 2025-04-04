import * as React from "react";

import type { DesignaliProps } from "../../types";

export const IndentDecrease = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <polyline points="7 8 3 12 7 16" />
        <line x1="21" x2="11" y1="12" y2="12" />
        <line x1="21" x2="11" y1="6" y2="6" />
        <line x1="21" x2="11" y1="18" y2="18" />
      </svg>
    );
  },
);

export default IndentDecrease;
