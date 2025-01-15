import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowUpAZ = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M1.99,7.29L6.7,2.58l4.71,4.71"/>
  <path  d="M6.7,2.58v18.84"/>
  <path  d="M22.01,7.29h-5.89"/>
  <path  d="M16.12,9.64v-4.12c0-1.63,1.32-2.94,2.94-2.94s2.94,1.32,2.94,2.94v4.12"/>
  <path  d="M16.12,14.36h5.89l-5.89,7.07h5.89"/>
</svg>
    );
  },
);

export default ArrowUpAZ;
