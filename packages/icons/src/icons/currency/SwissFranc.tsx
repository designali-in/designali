import * as React from "react";

import type { DesignaliProps } from "../types";

export const SwissFranc = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10 21V3h8" />
        <path d="M6 16h9" />
        <path d="M10 9.5h7" />
      </svg>
    );
  },
);

export default SwissFranc;
