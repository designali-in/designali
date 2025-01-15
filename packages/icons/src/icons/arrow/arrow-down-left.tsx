import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowDownLeft = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M21.99,2.01L2.01,21.99"/>
  <path  d="M21.99,21.99H2.01V2.01"/>
</svg>
    );
  },
);

export default ArrowDownLeft;
