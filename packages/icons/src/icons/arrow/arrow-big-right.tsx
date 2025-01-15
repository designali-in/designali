import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowBigRight = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
         <path  d="M3.43,7.71h8.57V2l10,10-10,10v-5.71H3.43V7.71Z"/>
         </svg>
    );
  },
);

export default ArrowBigRight;
