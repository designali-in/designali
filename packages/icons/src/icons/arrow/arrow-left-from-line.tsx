import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowLeftFromLine = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
         <path  d="M8.67,5.33l-6.67,6.67,6.67,6.67"/>
  <path  d="M2,12h15.56"/>
  <path  d="M22,19.78V4.22"/>
</svg>
    );
  },
);

export default ArrowLeftFromLine;
