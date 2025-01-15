import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MoveDiagonal = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10.57,22H2v-8.57" />
        <path d="M13.43,2h8.57v8.57" />
        <path d="M22,2L2,22" />
      </svg>
    );
  },
);

export default MoveDiagonal;
