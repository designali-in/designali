import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Terminal = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" x2="20" y1="19" y2="19" />
      </svg>
    );
  },
);

export default Terminal;
