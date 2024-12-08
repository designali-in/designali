import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Snail = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2,21h12c4.4,0,8-3.6,8-8v-6c0-1.1-.9-2-2-2s-2,.9-2,2v6" />

        <path d="M18,3l1.1,2.2" />
        <path d="M22,3l-1.1,2.2" />

        <circle cx="10" cy="13" r="8" />
        <path
          fill="none"
          d="M2,13c0,3.31,2.69,6,6,6s6-2.69,6-6c0-2.21-1.79-4-4-4s-4,1.79-4,4c0,1.1.9,2,2,2s2-.9,2-2"
        />
      </svg>
    );
  },
);

export default Snail;
