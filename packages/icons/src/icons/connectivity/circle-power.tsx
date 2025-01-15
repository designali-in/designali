import * as React from "react";

import type { DesignaliProps } from "../../types";

export const CirclePower = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,7v4" />
        <path d="M8,9c-1.66,2.21-1.21,5.34,1,7,2.21,1.66,5.34,1.21,7-1,1.33-1.78,1.33-4.22,0-6" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    );
  },
);

export default CirclePower;
