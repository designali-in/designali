import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowLeftRight = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M7.56,2L3.11,6.44l4.44,4.44"/>
  <path  d="M3.11,6.44h17.78"/>
  <path  d="M16.44,22l4.44-4.44-4.44-4.44"/>
  <path  d="M20.89,17.56H3.11"/>
</svg>
    );
  },
);

export default ArrowLeftRight;
