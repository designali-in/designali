import * as React from "react";

import type { DesignaliProps } from "../../types";

export const CaseSensitive = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="m3 15 4-8 4 8" />
        <path d="M4 13h6" />
        <circle cx="18" cy="12" r="3" />
        <path d="M21 9v6" />
      </svg>
    );
  },
);

export default CaseSensitive;
