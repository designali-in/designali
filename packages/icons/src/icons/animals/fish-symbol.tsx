import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FishSymbol = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ ...props }, forwardedRef) => {
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
        <path d="M2,16S11,1,22,12C11,23,2,8,2,8" />
      </svg>
    );
  },
);

export default FishSymbol;
