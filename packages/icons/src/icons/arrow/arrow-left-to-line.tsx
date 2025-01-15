import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowLeftToLine = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
         <path  d="M2,19.78V4.22"/>
  <path  d="M13.11,5.33l-6.67,6.67,6.67,6.67"/>
  <path  d="M6.44,12h15.56"/>
</svg>
    );
  },
);

export default ArrowLeftToLine;
