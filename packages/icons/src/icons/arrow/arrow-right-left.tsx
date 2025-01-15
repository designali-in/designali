import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowRightLeft = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M16.44,2l4.44,4.44-4.44,4.44"/>
  <path  d="M20.88,6.45H3.12"/>
  <path  d="M7.56,22l-4.44-4.44,4.44-4.44"/>
  <path  d="M3.12,17.55h17.77"/>
</svg>
    );
  },
);

export default ArrowRightLeft;
