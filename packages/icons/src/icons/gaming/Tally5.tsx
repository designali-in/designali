import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Tally5 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M4 4v16" />
        <path d="M9 4v16" />
        <path d="M14 4v16" />
        <path d="M19 4v16" />
        <path d="M22 6 2 18" />
      </svg>
    );
  },
);

export default Tally5;
