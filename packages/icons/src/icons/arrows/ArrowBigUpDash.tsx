import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowBigUpDash = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M9 19h6" />
        <path d="M9 15v-3H5l7-7 7 7h-4v3H9z" />
      </svg>
    );
  },
);

export default ArrowBigUpDash;
