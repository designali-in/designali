import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BookKey = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="m19 3 1 1" />
        <path d="m20 2-4.5 4.5" />
        <path d="M20 8v13a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14" />
        <circle cx="14" cy="8" r="2" />
      </svg>
    );
  },
);

export default BookKey;
