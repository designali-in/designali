import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowDownFromLine = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M12,21.99V7.99"/>
  <path  d="M6,15.99l6,6,6-6"/>
  <line  x1="5" y1="2.01" x2="19" y2="2.01"/>
</svg>
    );
  },
);

export default ArrowDownFromLine;
