import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Dead = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <line x1="8" y1="15" x2="16" y2="15" />

        <line x1="9.33" y1="7.65" x2="7.14" y2="9.85" />
        <line x1="7.14" y1="7.65" x2="9.33" y2="9.85" />
        <line x1="16.86" y1="7.65" x2="14.67" y2="9.85" />
        <line x1="14.67" y1="7.65" x2="16.86" y2="9.85" />

        <circle cx="12" cy="12" r="10" />
      </svg>
    );
  },
);

export default Dead;
