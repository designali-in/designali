import * as React from "react";

import type { DesignaliProps } from "../../types";

export const IterationCCW = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M20,10c0-4.4-3.6-8-8-8S4,5.6,4,10s3.6,8,8,8h8" />
        <polyline points="16 14 20 18 16 22" />
      </svg>
    );
  },
);

export default IterationCCW;
