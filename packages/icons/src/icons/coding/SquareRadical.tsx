import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SquareRadical = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
        <path d="M7 12h2l2 5 2-10h4" />
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
    );
  },
);

export default SquareRadical;
