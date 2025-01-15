import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowUpDown = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({  ...props }, forwardedRef) => {
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
        <path  d="M22,16.44l-4.44,4.44-4.44-4.44"/>
  <path  d="M17.56,20.89V3.11"/>
  <path  d="M2,7.56L6.44,3.11l4.44,4.44"/>
  <path  d="M6.44,3.11v17.78"/>
</svg>
    );
  },
);

export default ArrowUpDown;
