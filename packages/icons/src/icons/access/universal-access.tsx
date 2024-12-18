import * as React from "react";

import type { DesignaliProps } from "../../types";

export const UniversalAccess = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="12" cy="3.25" r="1.25" />
        <path d="M8.25,22l3.75-7.5,3.75,7.5" />
        <path d="M4.5,7l7.5,2.5,7.5-2.5" />
        <path d="M12,9.5v5" />
      </svg>
    );
  },
);

export default UniversalAccess;
