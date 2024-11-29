import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SearchCode = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="m13 13.5 2-2.5-2-2.5" />
        <path d="m21 21-4.3-4.3" />
        <path d="M9 8.5 7 11l2 2.5" />
        <circle cx="11" cy="11" r="8" />
      </svg>
    );
  },
);

export default SearchCode;
