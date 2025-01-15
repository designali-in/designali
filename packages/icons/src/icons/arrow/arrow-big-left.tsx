import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowBigLeft = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
         <path  d="M21.29,16.29h-8.57v5.71L2.71,12,12.71,2v5.71h8.57v8.57Z"/>
         </svg>
    );
  },
);

export default ArrowBigLeft;
