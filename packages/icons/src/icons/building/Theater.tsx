import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Theater = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2 10s3-3 3-8" />
        <path d="M22 10s-3-3-3-8" />
        <path d="M10 2c0 4.4-3.6 8-8 8" />
        <path d="M14 2c0 4.4 3.6 8 8 8" />
        <path d="M2 10s2 2 2 5" />
        <path d="M22 10s-2 2-2 5" />
        <path d="M8 15h8" />
        <path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
        <path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
      </svg>
    );
  },
);

export default Theater;
