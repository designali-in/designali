import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowBigRightDash = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M7.71,7.71h4.29V2l10,10-10,10v-5.71h-4.29V7.71Z"/>
  <line  x1="2" y1="16.29" x2="2" y2="7.71"/>
</svg>
    );
  },
);

export default ArrowBigRightDash;
