import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowBigDown = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M16.28,2.73v8.56h5.71l-9.99,9.99L2.01,11.29h5.71V2.73h8.56Z"/>
       </svg>
    );
  },
);

export default ArrowBigDown;
