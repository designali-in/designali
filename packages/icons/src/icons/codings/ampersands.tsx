import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Ampersands = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10,17.5c-5-3-7-7-7-9,0-1.1.9-2,2-2s2,.9,2,2c0,2.5-5,2.5-5,6,0,1.7,1.3,3,3,3,2.8,0,5-2.2,5-5" />
        <path d="M22,17.5c-5-3-7-7-7-9,0-1.1.9-2,2-2s2,.9,2,2c0,2.5-5,2.5-5,6,0,1.7,1.3,3,3,3,2.8,0,5-2.2,5-5" />
      </svg>
    );
  },
);

export default Ampersands;
