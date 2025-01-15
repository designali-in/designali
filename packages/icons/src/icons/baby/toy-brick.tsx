import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ToyBrick = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect x="2" y="7.56" width="20" height="13.33" rx="1.11" ry="1.11" />
        <path d="M9.78,7.56v-3.33c0-.67-.44-1.11-1.11-1.11h-3.33c-.61,0-1.11.5-1.11,1.11v3.33" />
        <path d="M19.78,7.56v-3.33c0-.67-.44-1.11-1.11-1.11h-3.33c-.61,0-1.11.5-1.11,1.11v3.33" />
      </svg>
    );
  },
);

export default ToyBrick;
