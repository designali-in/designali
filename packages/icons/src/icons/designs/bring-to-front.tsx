import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BringToFront = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect x="8" y="8" width="8" height="8" rx="2" ry="2" />
        <path d="M4,10c-1.1,0-2-.9-2-2v-4c0-1.1.9-2,2-2h4c1.1,0,2,.9,2,2" />
        <path d="M14,20c0,1.1.9,2,2,2h4c1.1,0,2-.9,2-2v-4c0-1.1-.9-2-2-2" />
      </svg>
    );
  },
);

export default BringToFront;
