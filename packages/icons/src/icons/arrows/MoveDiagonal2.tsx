import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MoveDiagonal2 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <polyline points="5 11 5 5 11 5" />
        <polyline points="19 13 19 19 13 19" />
        <line x1="5" x2="19" y1="5" y2="19" />
      </svg>
    );
  },
);

export default MoveDiagonal2;
