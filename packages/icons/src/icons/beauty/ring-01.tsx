import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Ring01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="12" cy="14.55" r="7.42" />
        <polyline points="15.31 7.76 15.31 3.94 12 2.02 8.69 3.94 8.69 7.76" />
      </svg>
    );
  },
);

export default Ring01;
