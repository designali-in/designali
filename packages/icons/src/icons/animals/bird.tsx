import * as React from "react";

import type { DesignaliProps } from "../types";

export const Bird = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M16,7.01h.01" />
        <path d="M3.4,18.01h8.6c4.42,0,8-3.58,8-8v-3c0-2.21-1.78-4-3.99-4.01-1.31,0-2.54.64-3.29,1.71L2,20.01" />
        <path d="M20,7.01l2,.5-2,.5" />
        <path d="M10,18.01v3" />
        <path d="M14,17.76v3.25" />
        <path
          fill="none"
          d="M7,18.01c3.31,0,6-2.69,6-6,0-1.78-.79-3.47-2.16-4.61"
        />
      </svg>
    );
  },
);

export default Bird;
