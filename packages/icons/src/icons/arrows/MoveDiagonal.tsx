import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MoveDiagonal = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <polyline points="13 5 19 5 19 11" />
        <polyline points="11 19 5 19 5 13" />
        <line x1="19" x2="5" y1="5" y2="19" />
      </svg>
    );
  },
);

export default MoveDiagonal;
