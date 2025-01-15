import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Headset = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M3,11h3c1.1,0,2,.9,2,2v3c0,1.1-.9,2-2,2h-1c-1.1,0-2-.9-2-2v-5ZM3,11C3,6.03,7.03,2,12,2s9,4.03,9,9M21,11v5c0,1.1-.9,2-2,2h-1c-1.1,0-2-.9-2-2v-3c0-1.1.9-2,2-2h3Z" />
        <path d="M21,16v2c0,2.21-1.79,4-4,4h-5" />
      </svg>
    );
  },
);

export default Headset;
