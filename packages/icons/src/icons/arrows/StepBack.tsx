import * as React from "react";

import type { DesignaliProps } from "../../types";

export const StepBack = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <line x1="18" x2="18" y1="20" y2="4" />
        <polygon points="14,20 4,12 14,4" />
      </svg>
    );
  },
);

export default StepBack;
