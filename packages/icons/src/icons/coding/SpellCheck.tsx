import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SpellCheck = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="m6 16 6-12 6 12" />
        <path d="M8 12h8" />
        <path d="m16 20 2 2 4-4" />
      </svg>
    );
  },
);

export default SpellCheck;
