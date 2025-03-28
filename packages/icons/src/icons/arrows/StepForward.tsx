import * as React from "react";

import type { DesignaliProps } from "../../types";

export const StepForward = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <line x1="6" x2="6" y1="4" y2="20" />
        <polygon points="10,4 20,12 10,20" />
      </svg>
    );
  },
);

export default StepForward;
